package com.example.server.member.servicetest;

import com.example.server.member.repository.MemberJpaRepository;
import com.example.server.member.service.MemberService;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class MemberServiceTest {
    @InjectMocks
    private MemberService memberService;

    @Mock
    MemberJpaRepository memberJpaRepository;


}
