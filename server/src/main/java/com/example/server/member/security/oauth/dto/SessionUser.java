package com.example.server.member.security.oauth.dto;

import com.example.server.member.entity.Member;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SessionUser implements Serializable {
    private String name;
    private String email;

    public SessionUser(Member member){
        this.name = member.getDisplayName();;
        this.email = member.getEmail();
    }
}
