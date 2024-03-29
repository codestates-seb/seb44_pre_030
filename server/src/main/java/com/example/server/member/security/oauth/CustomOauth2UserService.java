package com.example.server.member.security.oauth;

import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import com.example.server.member.security.oauth.dto.OauthAttributes;
import com.example.server.member.security.oauth.dto.SessionUser;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.time.LocalDateTime;
import java.util.Collections;

@RequiredArgsConstructor
@Service
public class CustomOauth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {
    private final MemberJpaRepository memberJpaRepository;
    private final HttpSession httpSession;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();

        OauthAttributes attributes = OauthAttributes.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());

        Member member = saveOrUpdate(attributes);
        SessionUser sessionUser = new SessionUser(member);
        sessionUser.setId(member.getId());

        httpSession.setAttribute("ID", sessionUser.getId());
        httpSession.setMaxInactiveInterval(3600);

        httpSession.setAttribute("user", new SessionUser(member));

        return new DefaultOAuth2User(Collections.singleton(new SimpleGrantedAuthority(member.getRole().getKey()))
                ,attributes.getAttributes()
                ,attributes.getNameAttributeKey());
    }

    private Member saveOrUpdate(OauthAttributes attributes){
        Member member = memberJpaRepository.findMemberByMemberEmail(attributes.getEmail())
                .map(entity -> entity.update(attributes.getName()))
                .orElse(attributes.toEntity());
        if(member.getCreatedAt() == null)
            member.setCreatedAt(LocalDateTime.now());

        member.setLastLogin(LocalDateTime.now());
        return memberJpaRepository.save(member);
    }
}
