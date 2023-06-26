gipackage com.example.server.question.mapper;

import com.example.server.answer.entity.Answer;
import com.example.server.comment.entity.Comment;
import com.example.server.member.entity.Member;
import com.example.server.question.dto.AnswerDto;
import com.example.server.question.dto.CommentDto;
import com.example.server.question.dto.MemberDto;
import com.example.server.question.dto.QuestionDto;
import com.example.server.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question PostToEntity(QuestionDto.Post post);
    Question PatchToEntity(QuestionDto.Patch patch);
    default List<CommentDto> convertCommentToDto(List<Comment> comments){

        List<CommentDto> commentDtos = new ArrayList<>();

        for(Comment comment : comments){
            CommentDto commentDto = CommentDto.builder()
                    .id(comment.getId())
                    .memberDto(convertMemberToDto(comment.getMember()))
                    .content(comment.getContent())
                    .createdAt(comment.getCreatedAt())
                    .build();

            commentDtos.add(commentDto);
        }
        return commentDtos;
    }
    default MemberDto convertMemberToDto(Member member) {
        MemberDto memberDto = MemberDto.builder()
                .id(member.getId())
                .displayName(member.getDisplayName())
                .email(member.getEmail())
                .role(member.getRole())
                .build();
        return memberDto;
    }
    default List<AnswerDto> convertAnswerToDto(List<Answer> answers) {

        List<AnswerDto> answerDtos = new ArrayList<>();

        for(Answer answer : answers){
            AnswerDto answerDto = AnswerDto.builder()
                    .id(answer.getId())
                    .member(convertMemberToDto(answer.getMember()))
                    .content(answer.getContent())
                    .vote(answer.getVote())
                    .createdAt(answer.getCreatedAt())
                    .build();

            List<Comment> comments = answer.getComments();
            if(comments != null){
                List<CommentDto> commentDto = convertCommentToDto(comments);
                answerDto.setComments(commentDto);
            }

            answerDtos.add(answerDto);
        }

        return answerDtos;
    }
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
                .answerCount(question.getAnswerCount())
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
    default QuestionDto.DetailResponse EntityToDetailResponse(Question question){

        if(question == null){
            return null;
        }

        QuestionDto.DetailResponse response = QuestionDto.DetailResponse.builder()
                .id(question.getId())
                .title(question.getTitle())
                .content(question.getContent())
                .view(question.getView())
                .vote(question.getVote())
                .answerCount(question.getAnswerCount())
                .selectedAnswerId(question.getSelectedAnswerId())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .build();

        Member member = question.getMember();
        if(member != null){
            MemberDto memberDto = convertMemberToDto(member);
            response.setMember(memberDto);
        }
        List<Answer> answers = question.getAnswers();
        if(answers != null){
            List<AnswerDto> answerDto = convertAnswerToDto(answers);
            response.setAnswers(answerDto);
        }
        return response;
    }
    List<QuestionDto.Response> ListEntityToListResponse(List<Question> questionList);
}
