package com.example.server.member.dto.maildto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResponseMailDto {
    String email;
    String code;
}
