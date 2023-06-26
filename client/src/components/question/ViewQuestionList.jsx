import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import colorpalette from '../../styles/colorpalette';
import { NumberForMatter } from '../../utils/NumberForMatter';
import QuestionTag from './QuestionTag';
import AskQuestionBtn from './AskQuestionBtn';
import { ExtractingImage } from '../../utils/ExtractingImage';
import Pagination from './Pagination';

const QuestionList = ({inputText,enterState,setEnterState}) => {
  const [questions, setQuestions] = useState([]);

  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState('Newest');

  const [totalElements,setTotalElements] = useState(0);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);

  const [printData,setPrintData] = useState([]);

  const buttonFilter = [
    { filterName: 'Newest' },
    { filterName: 'Active' },
    { filterName: 'Score' },
  ];

  const image_url = [
    'https://gravatar.com/avatar/0c8b0a8b346f1549e6f08f8ed841acd0?s=270&d=identicon',
    'https://gravatar.com/avatar/0c8b0a8b346f1549e6f08f8ed841acd0?s=270&d=identicon',
    'https://gravatar.com/avatar/0c8b0a8b346f1549e6f08f8ed841acd0?s=270&d=identicon',
  ];

  const tag = ['React', 'Java', 'JavaScript'];
  const getData = async () => {
    const response = await axios.get('/api/questions',
      {
        params: {page:page,size:limit}
      });
      setQuestions(response.data.data);
      setPrintData(response.data.data);
      setTotalElements(response.data.pageInfo.getTotalElements);
  }

  const selectFilter = index => {
    setIndex(index);
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(()=>{
    if(enterState){
      const setTotalData = questions;
      const data = setTotalData.filter(list=>list.title.includes(inputText));
      setPrintData(data);
    }
    else{
      if(questions){
        setPrintData(questions);
      }
    }
  },[enterState])

  useEffect(() => {
    setEnterState(false);
  }, [inputText]);

  return (
    <QuestionListContainer>
      <QustionList>
        <QuestionFilter>
          <div className="headContents">
            <h2>All Questions</h2>
          <Link to={'/question/ask'}>
            <AskQuestionBtn />
          </Link>
        </div>
        <div className="headContents flex-column">
          <span>{ totalElements && `${NumberForMatter(totalElements)} questions`}</span>
          <aside className="subFilterBtn">
            {buttonFilter.map((fil, idx) => (
              <button
                key={idx}
                className={idx === index ? 'focused' : null}
                onClick={() => {
                  selectFilter(idx);
                  setFilter(fil.filterName);
                }}
              >
                {fil.filterName}
              </button>
            ))}
          </aside>
        </div>
      </QuestionFilter>
      <ul>
        {printData.map(list => {
          return (
            <li className="post" key={list.id}>
              <PostSummaryWrapper>
                <PostSummaryStatsItem>
                  <span className="postVoteText">{`${NumberForMatter(
                    list.vote,
                  )} votes`}</span>
                </PostSummaryStatsItem>
                <PostSummaryStatsItem>
                  <span>{`${NumberForMatter(list.answerCount)} answers`}</span>
                </PostSummaryStatsItem>
                <PostSummaryStatsItem>
                  <span>{`${NumberForMatter(list.view)} views`}</span>
                </PostSummaryStatsItem>
              </PostSummaryWrapper>
              <PostContentWrapper>
                <PostContentTitle>
                  <Link to={`/question/${list.id}`}>
                    <span>{list.title}</span>
                  </Link>
                </PostContentTitle>
                <PostContentExcerpt>{list.content}</PostContentExcerpt>
                <PostContentMeta>
                  <QuestionTag tagList={tag} />
                  <PostUserCard>
                    <img src={ExtractingImage(image_url)}></img>
                    <Link className="UserName" to={`mypage/${list.member.id}`}>
                      {list.member.displayName}
                    </Link>
                    <div>
                      <span className="userCardAnswerCount">
                        {NumberForMatter(list.answerCount)}
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
    </QustionList>
    <Pagination 
      total={totalElements}
      limit={limit}
      page={page}
      setPage={setPage}
      />
    </QuestionListContainer>
  );
};
const QuestionListContainer = styled.main`
  display: flex;
  flex-direction: column;
`
const QustionList = styled.div`
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
const QuestionFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  .headContents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-top: 10px;
  }
  h2 {
    font-size: 1.7em;
    font-weight: 500;
  }
  .subFilterBtn {
    display: flex;
    overflow: hidden;
    height: 35px;
    border: 1px solid hsl(210, 8%, 65%);
    border-radius: 4px;
    button {
      background-color: rgb(255, 255, 255);
      border: none;
      color: #6b6f73;
      border-left: 1px solid hsl(210, 8%, 65%);
      padding: 0px 10px;
      cursor: pointer;
    }
    button:nth-child(1) {
      border: none;
    }
    button:hover {
      background-color: #f5f5f5;
    }
    .focused {
      background-color: #e3e6e8;
    }
    .focused:hover {
      background-color: #e3e6e8;
    }
  }
`;

export default QuestionList;
