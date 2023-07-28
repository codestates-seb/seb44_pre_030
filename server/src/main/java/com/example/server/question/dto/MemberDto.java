package com.example.server.question.dto;

import com.example.server.member.entity.Member;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {
    private Long id;
    private String displayName;
    private String email;
    private Member.MemberRole role;
}
