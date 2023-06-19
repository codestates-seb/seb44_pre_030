package com.example.server.member.security;

import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {
    private final MemberJpaRepository memberJpaRepository;

    @Override
    public UserDetails loadUserByUsername(String useremail) throws UsernameNotFoundException {
        Member member = memberJpaRepository.findMemberByMemberEmail(useremail);
        if(member == null)
            throw new UsernameNotFoundException("User not found");

        return member;
    }
}
