import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import colorpalette from '../../styles/colorpalette';
import { NumberForMatter } from '../../utils/NumberForMatter';
import QuestionTag from './QuestionTag';

const QuestionList = () => {
  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    const getQuestion = async () => {
      const questions = await axios.get(`http://localhost:3000/api/answer`);
      setQuestionList(questions.data);
    };
    getQuestion();
  }, []);

  return (
    <QustionListContainer>
      <ul>
        {questionList.map(list => {
          return (
            <li className="post" key={list.User.user_id}>
              <PostSummaryWrapper>
                <PostSummaryStatsItem>
                  <span className="postVoteText">{`${NumberForMatter(
                    list.question_good_count,
                  )} votes`}</span>
                </PostSummaryStatsItem>
                <PostSummaryStatsItem>
                  <span>{`${NumberForMatter(list.answer_count)} answers`}</span>
                </PostSummaryStatsItem>
                <PostSummaryStatsItem>
                  <span>{`${NumberForMatter(list.question_view)} views`}</span>
                </PostSummaryStatsItem>
              </PostSummaryWrapper>
              <PostContentWrapper>
                <PostContentTitle>
                  <Link
                    to={`/question/${list.User.user_id}`}
                    state={{ question: list }}
                  >
                    <span>{list.question_title}</span>
                  </Link>
                </PostContentTitle>
                <PostContentExcerpt>{list.question_content}</PostContentExcerpt>
                <PostContentMeta>
                  <QuestionTag tagList={list.tag} />
                  <PostUserCard>
                    <img src={list.User.profile_image_url}></img>
                    <Link
                      className="UserName"
                      to={`mypage/${list.User.user_id}`}
                    >
                      {NumberForMatter(list.User.name)}
                    </Link>
                    <div>
                      <span className="userCardAnswerCount">
                        {NumberForMatter(list.answer_count)}
                      </span>
                      <span>asked</span>
                    </div>
                  </PostUserCard>
                </PostContentMeta>
              </PostContentWrapper>
            </li>
          );
        })}
      </ul>
    </QustionListContainer>
  );
};

const QustionListContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* padding: 0 124px; */

  & .post {
    display: flex;
    width: 786px;
    max-height: 163px;
    padding: 19px 15px 18px 42px;
    /* margin-left: 161px; */
    border-bottom: 1px solid ${colorpalette.headerBorderBttom};
  }
  & .post:first-child {
    border-top: 1px solid ${colorpalette.headerBorderBttom};
    border-bottom: 1px solid ${colorpalette.headerBorderBttom};
  }
  & a {
    cursor: pointer;
  }
`;
const PostSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin-right: 20px;
  margin-top: 5px;
`;
const PostContentWrapper = styled.div`
  width: 85%;
`;
const PostSummaryStatsItem = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  text-align: end;

  & span {
    color: ${colorpalette.questionPostFontColor};
  }
  & .postVoteText {
    color: ${colorpalette.questionPostFontBlack};
  }
`;
const PostContentTitle = styled.h3`
  margin-bottom: 5px;
  font-weight: 400;

  & a {
    color: ${colorpalette.questionListPostTitleFontColor};
  }
  & a:hover {
    color: ${colorpalette.questionListPostTitleHoverFontcolor};
  }
`;
const PostContentExcerpt = styled.div`
  font-size: 14px;
  max-height: 34px;
  overflow: hidden;
  margin-bottom: 10px;
`;
const PostContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const PostTags = styled.ul`
//     display: flex;
// `
// const Tag = styled.li`
//     font-size:12px;
//     background-color: ${colorpalette.questionPostTagBackgroundColor};
//     padding:5px;
//     margin-right:5px;
//     border-radius: 3px;
//     color:${colorpalette.questionPostTagColor};
//     cursor: pointer;
//     &:hover{
//         background-color: ${colorpalette.questionPostTagHoverBackgroundColor};
//     }
// `
const PostUserCard = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 16px;
    height: 16px;
  }
  & span,
  & a {
    font-size: 13px;
  }
  & span {
    color: ${colorpalette.questionPostFontColor};
  }
  & a {
    color: ${colorpalette.questionPostUserFontColor};
    margin: 0 3px;
  }
  & a:hover {
    color: ${colorpalette.questionPostUserHoverFontColor};
  }
  & .userCardAnswerCount {
    margin-right: 3px;
    font-weight: 700;
    color: ${colorpalette.questionPostUserCardAnswerCountColor};
  }
`;

export default QuestionList;
