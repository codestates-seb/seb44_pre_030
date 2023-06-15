package com.example.server.member.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberUpdateDto {
    String displayName;
    String location;
    String title;
    String aboutMe;
    String website;
    String twitter;
    String github;
}
