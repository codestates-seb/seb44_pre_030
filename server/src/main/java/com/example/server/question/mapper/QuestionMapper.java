package com.example.server.question.mapper;

import com.example.server.member.entity.Member;
import com.example.server.question.dto.MemberDto;
import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    // Post Mapper
    Question PostToEntity(QuestionDto.Post post);
    // Patch Mapper
    Question PatchToEntity(QuestionDto.Patch patch);

    // MemberDto Response -> 멤버에서 반환해줄 값들만 응답으로 돌려보내는 Dto
    //--> 이 함수에만 추가할 사항 추가하시면 본문으로 응답을 보낼수 있습니다.
    default MemberDto convertMemberToDto(Member member) {
        MemberDto memberDto = MemberDto.builder()
                .id(member.getId())
                .displayName(member.getDisplayName())
                .email(member.getEmail())
                .role(member.getRole())
                .build();
        return memberDto;
    }
    // 내부에 MemberDto 선언을 해서 Question 과 Member 원하는 데이터 응답
    default QuestionDto.Response EntityToResponse(Question question){

        if(question == null){
            return null;
        }

        QuestionDto.Response response = QuestionDto.Response.builder()
                .id(question.getId())
                .title(question.getTitle())
                .content(question.getContent())
                .view(question.getView())
                .vote(question.getVote())
                .selectedAnswerId(question.getSelectedAnswerId())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .build();

        Member member = question.getMember();
        if(member != null){
            MemberDto memberDto = convertMemberToDto(member);
            response.setMember(memberDto);
        }

        return response;
    }

    // List Question Response
    QuestionDto.DetailResponse EntityToDetailResponse(Question question);
    List<QuestionDto.Response> ListEntityToListResponse(List<Question> questionList);
}
