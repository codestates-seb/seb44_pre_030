package com.example.server.member.service;

import com.example.server.member.dto.MemberPostDto;
import com.example.server.member.dto.MemberSignupDto;
import com.example.server.member.dto.maildto.RequestMailDto;
import com.example.server.member.dto.maildto.ResponseMailDto;
import com.example.server.member.entity.EmailCode;
import com.example.server.member.entity.Member;
import com.example.server.member.repository.EmailCodeJpaRepository;
import com.example.server.member.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.Random;

@Slf4j
@Validated
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberJpaRepository memberJpaRepository;
    private final EmailCodeJpaRepository emailCodeJpaRepository;
    private final JavaMailSender javaMailSender;

    public long signup(@Valid MemberSignupDto dto){
        log.info("회원가입 실행");
        if(doubleCheck(dto.getEmail())) {
            log.info("이메일 중복 발생");
            return -1;
        }

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode(dto.getPassword());

        Member member = Member.builder()
                .email(dto.getEmail())
                .password(password)
                .displayName(dto.getDisplayName())
                .role(Member.MemberRole.USER)
                .createdAt(LocalDateTime.now())
                .VerifiedLike(false) // 추가사항
                .VerifiedView(false) // 추가사항
                .build();

        Member saveMember = memberJpaRepository.save(member);

        log.info("회원가입 성공");
        return saveMember.getId();
    }

    public long update(long memberId, MemberPostDto dto){
        log.info("회원정보 수정 실행");
        Member member = memberJpaRepository.findMemberByMemberId(memberId);

        if (dto.getDisplayName() != null) {
            member.setDisplayName(dto.getDisplayName());
        }
        if (dto.getLocation() != null) {
            member.setLocation(dto.getLocation());
        }
        if (dto.getTitle() != null) {
            member.setTitle(dto.getTitle());
        }
        if (dto.getAboutMe() != null) {
            member.setAboutMe(dto.getAboutMe());
        }
        if (dto.getWebsite() != null) {
            member.setWebsite(dto.getWebsite());
        }
        if (dto.getTwitter() != null) {
            member.setTwitter(dto.getTwitter());
        }
        if (dto.getGithub() != null) {
            member.setGithub(dto.getGithub());
        }

        Member saveMember = memberJpaRepository.save(member);

        log.info("회원정보 수정 성공");
        return saveMember.getId();
    }

    public Member getMember(long memberId){
        log.info("회원정보 읽기");
        Member member = memberJpaRepository.findMemberByMemberId(memberId);
        if(member == null)
            log.info("존재하지 않은 사용자");

        log.info("회원정보 수정 성공");
        return member;
    }

    public boolean deleteMember(long memberId){
        memberJpaRepository.deleteById(memberId);

        log.info("회원정보 삭제 성공");
        return true;
    }

    public boolean doubleCheck(String email){
        log.info("이메일 중복 확인");
        return memberJpaRepository.findMemberByMemberEmail(email).isPresent();
    }

    public void authEmail(RequestMailDto dto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("smtp.gmail.com");
        message.setTo(dto.getEmail());
        message.setSubject("인증코드");

        String code = generateAuthCode();
        EmailCode emailCode = EmailCode.builder()
                .code(code)
                .email(dto.getEmail())
                .build();

        emailCodeJpaRepository.save(emailCode);

        message.setText(code);
        javaMailSender.send(message);
    }

    public boolean checkEmail(ResponseMailDto dto){
        EmailCode emailCode = emailCodeJpaRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("존재하지 않은 Email입니다."));

        if(emailCode == null){
            log.info("DB에 Email이 없음");
            return false;
        }

        boolean response = false;

        if(emailCode.getEmail().equals(dto.getEmail()) && emailCode.getCode().equals(dto.getCode())){
            log.info("이메일 코드 일치 확인");
            response = true;
            emailCodeJpaRepository.deleteById(emailCode.getId());
        }else{
            log.info("이메일 코드 불일치");
        }

        return response;
    }

    public String generateAuthCode(){
        int zero = 48;
        int nine = 57;
        Random random = new Random();

        String code = random.ints(zero, nine + 1)
                .limit(6)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return code;
    }
}
