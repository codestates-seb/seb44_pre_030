package com.example.server.member.controller;

import com.example.server.member.dto.MemberPostDto;
import com.example.server.member.dto.MemberSignupDto;
import com.example.server.member.entity.Member;
import com.example.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/tmpLoginSuccess")
    ResponseEntity success(){
        return new ResponseEntity("Login Success!", HttpStatus.OK);
    }

    @PostMapping("/login/fail")
    ResponseEntity fail(){
        return new ResponseEntity("fail", HttpStatus.OK);
    }

    @PostMapping("/signup")
    ResponseEntity signupMember(@Valid @RequestBody MemberSignupDto dto/*, HttpServletResponse response*/) throws IOException {
        long id = memberService.signup(dto);

        if(id == -1) return new ResponseEntity(id, HttpStatus.ACCEPTED);

        return new ResponseEntity(id, HttpStatus.OK);
    }

    @PostMapping("/update/{memberId}")
    ResponseEntity updateMember(@PathVariable("memberId") long memberId,
                          @RequestBody MemberPostDto dto){
        long response = memberService.update(memberId, dto);

        if(response == -1) return new ResponseEntity(response, HttpStatus.ACCEPTED);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/get/{memberId}")
    ResponseEntity getMember(@PathVariable("memberId") long memberId){
        Member response = memberService.getMember(memberId);

        if(response == null) return new ResponseEntity(response, HttpStatus.ACCEPTED);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{memberId}")
    ResponseEntity delelteMember(@PathVariable("memberId") long memberId){
        boolean response = memberService.deleteMember(memberId);

        return new ResponseEntity(response, HttpStatus.OK);
    }
}