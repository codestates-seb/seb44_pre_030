package com.example.server.member.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberSignupDto {
    @Email
    @NotBlank
    String email;
    @NotNull
    String password;
    @NotBlank
    String displayName;
}
