package com.example.server.member.service;

import com.example.server.member.dto.MemberPostDto;
import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberJpaRepository memberJpaRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    public long signup(MemberPostDto dto){
        String password = passwordEncoder.encode(dto.getPassword());

        Member member = Member.builder()
                .email(dto.getEmail())
                .password(password)
                .displayName(dto.getDisplayName())
                .location(dto.getLocation())
                .title(dto.getTitle())
                .aboutMe(dto.getAboutMe())
                .website(dto.getWebsite())
                .twitter(dto.getTwitter())
                .github(dto.getGithub())
                .build();

        Member saveMember = memberJpaRepository.save(member);
        long saveMemberId = -1;

        if(saveMember != null) saveMemberId = saveMember.getId();

        return saveMemberId;
    }

    public long update(long memberId, MemberPostDto dto){
        Member member = memberJpaRepository.findMemberByMemberId(memberId);

        member = Member.builder()
                .displayName(dto.getDisplayName())
                .location(dto.getLocation())
                .title(dto.getTitle())
                .aboutMe(dto.getAboutMe())
                .website(dto.getWebsite())
                .twitter(dto.getTwitter())
                .github(dto.getGithub())
                .build();

        Member saveMember = memberJpaRepository.save(member);
        long saveMemberId = -1;

        if(saveMember != null) saveMemberId = saveMember.getId();

        return saveMemberId;
    }

    public Member getMember(long memberId){
        Member member = memberJpaRepository.findMemberByMemberId(memberId);

        return member;
    }

    public boolean deleteMember(long memberId){
        memberJpaRepository.deleteById(memberId);

        return true;
    }
}
