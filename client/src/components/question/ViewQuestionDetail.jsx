import React from 'react';
import { useLocation } from "react-router-dom";
import { styled } from 'styled-components';
import colorpalette from '../../styles/colorpalette';
import AskQuestionBtn from './AskQuestionBtn';
import { NumberForMatter } from '../../utils/NumberForMatter';
import VoteGroup from '../vote/VoteGroup';
import advertisementImg from '../../assets/questionDetail/advertisement.svg'
import QuestionTag from './QuestionTag';


const QuestionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding:15px;
    padding-right: 0;
    width:1091px;
    margin-left: 285px;
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

const QuestionDetailContent = styled.div`
    
`
const QuestionTagLayout = styled.div`
    margin: 1.5rem 0 0.75rem 0;
`
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
                            <QuestionDetailContent>
                                {data.question_content}
                                <QuestionTagLayout>
                                    <QuestionTag tagList={data.tag}/>
                                </QuestionTagLayout>

                            </QuestionDetailContent>
                        </QuestionLayouttRight>
                    </QuestionLayout>
           
                </QuestionContent>
        </QuestionDetailContainer>
    );
};

export default ViewQuestionDetail;