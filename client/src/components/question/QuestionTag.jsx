import React from 'react';
import { styled } from 'styled-components';
import colorpalette from '../../styles/colorpalette';

const QuestionTag = ({tagList}) => {

    return (
        <PostTags>
        {tagList.map((tag,i)=>{
            return (
                <Tag key={i}>{tag}</Tag>
            )
        })}
    </PostTags>
    );
};

const PostTags = styled.ul`
    display: flex;
`
const Tag = styled.li`
    font-size:12px;
    background-color: ${colorpalette.questionPostTagBackgroundColor};
    padding:5px;
    margin-right:5px;
    border-radius: 3px;
    color:${colorpalette.questionPostTagColor};
    cursor: pointer;
    &:hover{
        background-color: ${colorpalette.questionPostTagHoverBackgroundColor};
    }
`

export default QuestionTag;