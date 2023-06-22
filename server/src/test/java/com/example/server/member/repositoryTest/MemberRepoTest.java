package com.example.server.member.repositoryTest;

import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class MemberRepoTest {
    @Autowired
    MemberJpaRepository memberJpaRepository;

    @Test
    void findMemberByMemberId(){
        long id = 1L;
        Member member = Member.builder()
                .id(id)
                .email("temp@dsa.com")
                .displayName("dis")
                .location("lo")
                .build();

        Member saveMember = memberJpaRepository.save(member);

        Member testMember = memberJpaRepository.findMemberByMemberId(id);

        assertThat(id, is(equalTo(testMember.getId())));
    }
}
