import React, { useState,useEffect } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { NumberForMatter } from '../../utils/NumberForMatter';
import colorpalette from '../../styles/colorpalette';
import AskQuestionBtn from './AskQuestionBtn';
import axios from 'axios';
import VoteGroup from '../vote/VoteGroup';
import advertisementImg from '../../assets/questionDetail/advertisement.svg';
import QuestionTag from './QuestionTag';
import { ExtractingImage } from '../../utils/ExtractingImage';
import { DateForMatter } from '../../utils/DateForMatter';


const ViewQuestionDetail = ({ qsId }) => {
  const [questionDetail, setQuestionDetail] = useState([]);
  const tag = ['python', 'js'];
  const image_url = [
    'https://gravatar.com/avatar/0c8b0a8b346f1549e6f08f8ed841acd0?s=270&d=identicon',
    'https://gravatar.com/avatar/0c8b0a8b346f1549e6f08f8ed841acd0?s=270&d=identicon',
    'https://gravatar.com/avatar/0c8b0a8b346f1549e6f08f8ed841acd0?s=270&d=identicon',
  ];
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get(`/api/questions/${qsId}/1`);
      setQuestionDetail(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [qsId]);

  const handleUserNameClick = (data) =>{
    navigate(`/mypage/${data.id}`);
  }
  const handleQuestionDelete = () => {
    axios.delete(`/api/${qsId}`)
      .then(res=>{
        console.log(res);
        navigate('/');
      })
      .catch(error=>console.log(error))
  }

  return (
    <QuestionDetailContainer>
      <QuestionDetailHeader>
        <h1>{questionDetail.title}</h1>
        <Link to={`/question/ask`}>
          <AskQuestionBtn />
        </Link>
      </QuestionDetailHeader>
      <QuestionInfo>
        <QuestionInfoItem>
          <span>Asked</span>
          <time
            dateTime={`${questionDetail.createdAt}`}
          >{DateForMatter(questionDetail.createdAt)}</time>
        </QuestionInfoItem>
        <QuestionInfoItem>
          <span>Modified</span>
          <span>{NumberForMatter(`${questionDetail.vote}`)}</span>
        </QuestionInfoItem>
        <QuestionInfoItem>
          <span>Viewed</span>
          <time
            dateTime={`${questionDetail.modifiedAt}`}
          >
            {DateForMatter(questionDetail.modifiedAt)}
          </time>
        </QuestionInfoItem>
      </QuestionInfo>
      <QuestionContent>
        <Advertisement>
          <img src={advertisementImg} />
        </Advertisement>
        <QuestionLayout>
          <QuestionLayoutLeft>
            <VoteGroup />
          </QuestionLayoutLeft>
          <QuestionLayouttRight>
            {questionDetail.content}
            <QuestionTagLayout>
              <QuestionTag tagList={tag} />
            </QuestionTagLayout>
          </QuestionLayouttRight>
        </QuestionLayout>
        <QuestionUserAuthority>
          <QuestionEdit>
            <Link to={`/question/edit/${qsId}`}>Edit</Link>

            <div onClick={handleQuestionDelete}>Delete</div>
          </QuestionEdit>

          <QuestionUserInfo>
            <div>
              <img src={ExtractingImage(image_url)} />
            </div>
        
            {questionDetail.member && (
              <span onClick={()=>handleUserNameClick(questionDetail.member)} className="userInfoName">
            {questionDetail.member.displayName}
             </span>
              )}
          
          </QuestionUserInfo>
        </QuestionUserAuthority>
      </QuestionContent>
    </QuestionDetailContainer>
  );

};

const QuestionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.625rem 0;

  & h1 {
    width: 916px;
    color: ${colorpalette.questionDetailTitleFontColor};
    font-size: ${colorpalette.questionDetailTitleSize};
    font-weight: normal;
  }
`;
const QuestionInfo = styled.div`
  display: flex;
  font-size: ${colorpalette.headerFontSize};
  padding-bottom: 8px;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colorpalette.headerBorderBttom};
`;
const QuestionInfoItem = styled.div`
  margin-right: 0.813rem;
  & span {
    margin-right: 0.313rem;
  }
  & span:first-child {
    color: ${colorpalette.questionDetailInfoFontColor};
  }
`;
const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Advertisement = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 1.5rem;
`;
const QuestionLayout = styled.div`
  display: flex;
  transform: translateX(-3%);
`;
const QuestionLayoutLeft = styled.div`
  width: 10%;
`;
const QuestionLayouttRight = styled.div`
  width: 90%;
  padding-right: 16px;
  width: 670px;
`;
const QuestionTagLayout = styled.div`
  margin: 1.5rem 0 0.75rem 0;
`;
const QuestionUserAuthority = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
  padding-left: 75px;
  margin: 1rem 0;
  width: 724px;
  height: 79px;
`;
const QuestionEdit = styled.nav`
  display: flex;
  cursor: pointer;
  font-size: ${colorpalette.headerFontSize};
  color: ${colorpalette.headerFontColor};

  & a {
    margin-right: 0.5rem;
  }
`;

const QuestionUserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px 6px 7px 7px;
  background-color: ${colorpalette.questionDetailUserInfoBgColor};
  border-radius: ${colorpalette.headerBorderRadius};
  width: 160px;
  height: 47px;

  & img {
    width: 32px;
    height: 32px;
    margin-right: 0.5rem;
  }
  & .userInfoName {
    cursor: pointer;
    font-size: ${colorpalette.headerFontSize};
    color: ${colorpalette.questionDetailUserInfoColor};
  }
  & .userInfoName:hover {
    color: ${colorpalette.questionDetailUserInfoHoverColor};
  }
`;
export default ViewQuestionDetail;
