package com.example.server.member.controller;

import com.example.server.member.dto.MemberPostDto;
import com.example.server.member.dto.MemberSignupDto;
import com.example.server.member.dto.maildto.RequestMailDto;
import com.example.server.member.dto.maildto.ResponseMailDto;
import com.example.server.member.entity.Member;
import com.example.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/session")
    ResponseEntity session(HttpSession session){
        String response = "유저 DB ID : " + "\"" + session.getAttribute("ID") + "\"" + " 입니다";
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PostMapping("/email")
    ResponseEntity email(@RequestBody RequestMailDto dto){
        memberService.authEmail(dto);

        return new ResponseEntity(true, HttpStatus.OK);
    }

    @PostMapping("/email/check")
    ResponseEntity emailCheck(@RequestBody ResponseMailDto dto){
        boolean resposne = memberService.checkEmail(dto);

        return new ResponseEntity(resposne, HttpStatus.OK);
    }

    @GetMapping("/login/success")
    ResponseEntity success(){
        log.info("로그인 성공");
        return new ResponseEntity("Login Success!", HttpStatus.OK);
    }

    @PostMapping("/login/fail")
    ResponseEntity fail(){
        log.info("로그인 실패");
        return new ResponseEntity("fail", HttpStatus.NOT_FOUND);
    }


    @PostMapping("")
    ResponseEntity signupMember(@Valid @RequestBody MemberSignupDto dto/*, HttpServletResponse response*/) throws IOException {
        long id = memberService.signup(dto);

        if(id == -1) return new ResponseEntity(id, HttpStatus.ACCEPTED);

        return new ResponseEntity(id, HttpStatus.OK);
    }

    @PatchMapping("/{memberId}")
    ResponseEntity updateMember(@PathVariable("memberId") long memberId,
                          @RequestBody MemberPostDto dto){

        long response = memberService.update(memberId, dto);

        if(response == -1) return new ResponseEntity(response, HttpStatus.ACCEPTED);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/{memberId}")
    ResponseEntity getMember(@PathVariable("memberId") long memberId){
        Member response = memberService.getMember(memberId);

        if(response == null) return new ResponseEntity(response, HttpStatus.ACCEPTED);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/{memberId}")
    ResponseEntity delelteMember(@PathVariable("memberId") long memberId){
        boolean response = memberService.deleteMember(memberId);

        return new ResponseEntity(response, HttpStatus.OK);
    }
}
