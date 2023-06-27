package com.example.server.member.service;

import com.example.server.member.dto.MemberPostDto;
import com.example.server.member.dto.MemberSignupDto;
import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import java.time.LocalDateTime;

@Slf4j
@Validated
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberJpaRepository memberJpaRepository;

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
                .build();

        Member saveMember = memberJpaRepository.save(member);

        log.info("회원가입 성공");
        return saveMember.getId();
    }

    public long update(long memberId, MemberPostDto dto){
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

        return saveMember.getId();
    }

    public Member getMember(long memberId){
        Member member = memberJpaRepository.findMemberByMemberId(memberId);

        return member;
    }

    public boolean deleteMember(long memberId){
        memberJpaRepository.deleteById(memberId);

        return true;
    }

    public boolean doubleCheck(String email){
        return memberJpaRepository.findMemberByMemberEmail(email).isPresent();
    }
}
