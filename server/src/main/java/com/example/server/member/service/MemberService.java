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

    public long signup(MemberPostDto dto){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode(dto.getPassword());

        Member member = Member.builder()
                .email(dto.getEmail())
                .password(password)
                .displayName(dto.getDisplayName())
                .role(Member.MemberRole.ROLE_USER)
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
}
