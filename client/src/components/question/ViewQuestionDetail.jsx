import React from 'react';
import { useLocation } from "react-router-dom";
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { NumberForMatter } from '../../utils/NumberForMatter';
import colorpalette from '../../styles/colorpalette';
import AskQuestionBtn from './AskQuestionBtn';
import VoteGroup from '../vote/VoteGroup';
import advertisementImg from '../../assets/questionDetail/advertisement.svg'
import QuestionTag from './QuestionTag';


const ViewQuestionDetail = () => {
    const questionDetail = useLocation();
    const data = questionDetail.state.question;


    return (
        <QuestionDetailContainer>
            <QuestionDetailHeader>
                <h1>{data.question_title}</h1>
                <AskQuestionBtn/>
            </QuestionDetailHeader>
            <QuestionInfo>
                    <QuestionInfoItem>
                        <span>Asked</span>
                        <time dateTime={`${data.question_date}`}>{`${data.question_date}`}</time>
                    </QuestionInfoItem>
                    <QuestionInfoItem>
                        <span>Modified</span>
                        <span>{NumberForMatter(`${data.question_view}`)}</span>
                    </QuestionInfoItem>
                    <QuestionInfoItem>
                        <span>Viewed</span>
                        <time dateTime={`${data.modified_date}`}>{`${data.modified_date}`}</time>
                    </QuestionInfoItem>
                </QuestionInfo>
                <QuestionContent>
                    <Advertisement>
                        <img src={advertisementImg}/>
                    </Advertisement>
                    <QuestionLayout>
                        <QuestionLayoutLeft>
                            <VoteGroup/>
                        </QuestionLayoutLeft>
                        <QuestionLayouttRight>
                            {data.question_content}
                            <QuestionTagLayout>
                                <QuestionTag tagList={data.tag}/>
                            </QuestionTagLayout>
                        </QuestionLayouttRight>
                    </QuestionLayout>
                    <QuestionUserAuthority>

                        <QuestionEdit>
                            {
                            data.User?
                            (<>
                                <Link to={`/question/edit/${data.User.user_id}`} state={{ question: data }}>Edit</Link>

                                <Link to='/'>Delete</Link>
                            </>)
                            :
                            <div></div>
                            }
                        </QuestionEdit>
                
                        <QuestionUserInfo>
                            <div>
                                <img src={`${data.User.profile_image_url}`}/>
                            </div>
                            <div>
                                <Link className='userInfoName' to={`/mypage/${data.User.user_id}`}>{`${data.User.name}`}</Link>
                            </div>
                        </QuestionUserInfo>
           
                    </QuestionUserAuthority>
                </QuestionContent>
        </QuestionDetailContainer>
    );
};

const QuestionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const QuestionDetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.625rem 0;

    & h1{
        width:916px;
        color:${colorpalette.questionDetailTitleFontColor};
        font-size: ${colorpalette.questionDetailTitleSize};
        font-weight: normal;
    }
`
const QuestionInfo = styled.div`
    display: flex;
    font-size: ${colorpalette.headerFontSize};
    padding-bottom: 8px;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${colorpalette.headerBorderBttom};
`
const QuestionInfoItem = styled.div`
    margin-right: 0.813rem;
    & span{
        margin-right: 0.313rem;
    }
    & span:first-child{
        color:${colorpalette.questionDetailInfoFontColor};
    }
`
const QuestionContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Advertisement = styled.div`
    width:100%;
    height:90px;
    margin-bottom: 1.5rem;
`
const QuestionLayout = styled.div`
    display: flex;
    transform: translateX(-3%);
`
const QuestionLayoutLeft = styled.div`
    width:10%;
`
const QuestionLayouttRight = styled.div`
    width:90%;
    padding-right: 16px;
    width:670px;
`
const QuestionTagLayout = styled.div`
    margin: 1.5rem 0 0.75rem 0;
`
const QuestionUserAuthority = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top:4px;
    padding-left:75px;
    margin: 1rem 0;
    width:724px;
    height: 79px;
`
const QuestionEdit = styled.div`
    font-size: ${colorpalette.headerFontSize};
    color:${colorpalette.headerFontColor};

    & a{
        margin-right:0.5rem;
    }
`

const QuestionUserInfo = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 5px 6px 7px 7px;
    background-color: ${colorpalette.questionDetailUserInfoBgColor};
    border-radius: ${colorpalette.headerBorderRadius};
    width:160px;
    height: 47px;

    & img{
        width:32px;
        height: 32px;
        margin-right: 0.5rem;
    }
    & .userInfoName{
        font-size:${colorpalette.headerFontSize};
        color: ${colorpalette.questionDetailUserInfoColor};
    }
    & .userInfoName:hover{
        color:${colorpalette.questionDetailUserInfoHoverColor};
    }
`
export default ViewQuestionDetail;