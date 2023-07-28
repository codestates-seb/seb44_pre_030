package com.example.server.member.security;

import com.example.server.member.entity.Member;
import com.example.server.member.repository.MemberJpaRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class CustomLoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    private final MemberJpaRepository memberJpaRepository;
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws ServletException, IOException {
        String email = authentication.getName();
        Member member = memberJpaRepository.findMemberByMemberEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("존재하지 않은 회원입니다."));

        member.setLastLogin(LocalDateTime.now());
        memberJpaRepository.save(member);

//        SecurityContextHolder.getContext().setAuthentication(authentication);
        request.getSession().setAttribute("ID", member.getId());
        request.getSession().setMaxInactiveInterval(3600);

        response.getWriter().write(String.valueOf(member.getId()));

//        response.sendRedirect("/members/login/success");
//        RequestDispatcher dispatcher = request.getRequestDispatcher("/members/login/success");
//        dispatcher.forward(request, response);
    }
}
