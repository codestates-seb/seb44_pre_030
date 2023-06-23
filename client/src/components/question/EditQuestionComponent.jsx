import React,{useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { Editor } from "react-draft-wysiwyg";
import { EditorState,ContentState } from "draft-js";
import colorpalette from '../../styles/colorpalette';
import QuestionTag from './QuestionTag';

const NoticeData = ['Your edit will be placed in a queue until it is peer reviewed.','We welcome edits that make the post easier to understand and more valuable for readers. Because community members review edits, please try to make the post substantially better than how you found it, for example, by fixing grammar or adding additional resources and hyperlinks.'];
const EditQuestionComponent  = () => {
    const [questionContent,setQuestionContent] = useState([]);
    const [editorState,setEditorState] = useState(EditorState.createEmpty());
    const params = useParams();
    const tag = ['React','Java','JavaScript'];
    
    const handleEditorStateChange = (newEditorState) =>{
        setEditorState(newEditorState);
    }
    useEffect(()=>{
        axios.get(`/api/question/${params.id}`)
        .then(res=>{
            if(res.data){
              setQuestionContent(res.data)
              console.log('edit',questionContent)

            }
        })
        .catch(error=>console.log(error))
    },[params.id,questionContent])
    useEffect(()=>{
        if(questionContent && questionContent.content){
            const contentState = ContentState.createFromText(questionContent.content);
            const initialState = EditorState.createWithContent(contentState)
            setEditorState(initialState)
        }
    },[questionContent])

    return (
        <EditQuestionContainer>
            <EditQuestionNotice>
                {NoticeData.map((info,i)=>{return (<p key={i}>{info}</p>)})}
            </EditQuestionNotice>
            <EditQuestionForm>
                <PostEditorTitle>
                    <h3>Title</h3>
                    <input className='questionEditTitle' type='text' value={questionContent.title}></input>
                </PostEditorTitle>
                    <h3>Body</h3>
                    <ProblemInputWrapper className='ProblemInputWrapper'>
                    <Editor
                        wrapperClassName='wrapper-class'
                        toolbarClassName="toolbar-class"
                        localization={{
                            locale: 'ko',
                        }}
                        placeholder="질문 내용을 입력하세요."
                        editorState={editorState}
                        onEditorStateChange={handleEditorStateChange}
                        toolbar={{
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: false },
                        }}
                    />
                    </ProblemInputWrapper>
                  <PostEditorTags>
                    <h3>Tags</h3>
                    <div className='questionEditorTag' type='text'>
                        <QuestionTag tagList={tag}/>
                    </div>
                  </PostEditorTags>
                <PostBtnWrpper>
                    <PostBtn className='saveBtn'>Save edits</PostBtn>
                    <PostBtn className='calcelBtn'>Cancel</PostBtn>
                </PostBtnWrpper>
            </EditQuestionForm>
        </EditQuestionContainer>
    );
};

const EditQuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:728px;
    padding:15px;
    padding-right:0;
    margin-top: 10px;
`
const EditQuestionNotice = styled.div`
    width:100%;
    height: 111px;
    padding:16px;
    border:1px solid ${colorpalette.questionEditNoticeBorderColor};
    border-radius: ${colorpalette.headerBorderRadius};
    background-color: ${colorpalette.questionEditNoticeBgColor};

    & p{
        font-size: ${colorpalette.headerFontSize};
        color:${colorpalette.questionEditNoticeFontColor};
    }
    & p:first-child{
        margin-bottom: 13px;
    }
`
const EditQuestionForm = styled.form`
    margin-top: 10px;
    & input, & .questionEditorTag{
        width:100%;
        outline: none;
        border:1px solid ${colorpalette.questionInputBoxBorderColor};
        border-radius:${colorpalette.headerBorderRadius};
    }
    & input:focus{
        outline:none !important;
        border-color: ${colorpalette.headerSearchBorderFocusColor};
        box-shadow: 0 0 10px ${colorpalette.headerSearchBorderShadowColor};
    }
    & .questionEditTitle{
        padding:8px 10px;
        margin-bottom: 15px;
    }
    & .questionEditorTag{
        height: auto;
        padding:8px;
        padding-right: 9px;
        overflow: hidden;
    }
`
const ProblemInputWrapper = styled.section`
    height: 250px;
    margin-bottom: 10px;
    .wrapper-class{
        margin: 0 auto;
        margin-bottom: 4rem;
        border: 1px solid lightgray;
        border-radius: ${colorpalette.headerBorderRadius};
        padding:10px;
        overflow: scroll;
        max-height: 230px;
    }
    .editor {
        height: 180px !important;
        border: 1px solid ${colorpalette.headerSearchBorderColor};
        padding: 10px;
        border-radius: 2px !important;
        overflow: scroll;
    }
    .editor-focus{
        padding: 10px;
        height: 180px !important;
        outline:none !important;
        border-color: ${colorpalette.headerSearchBorderFocusColor};;
        box-shadow: 0 0 10px ${colorpalette.headerSearchBorderShadowColor};
    }
    
`
const PostEditorTitle = styled.div`
    margin-top: 10px;
`
const PostEditorTags = styled.div`
    margin-top: 30px;
`
const PostBtnWrpper = styled.div`
    display: flex;

    & .saveBtn{
        background-color: ${colorpalette.questionEditSaveBtnColor};
        color:${colorpalette.signatureWhite};
    }
    & .saveBtn:hover{
        background-color: ${colorpalette.questionEditSaveBtnHoverColor};
    }
    & .calcelBtn{
        background-color: ${colorpalette.signatureWhite};
        color:${colorpalette.questionEditCancelBtnFontColor};
    }
    & .calcelBtn:hover{
        background-color: ${colorpalette.questionEditCancelBtnHoverColor};
    } 
`
const PostBtn = styled.div`
    margin-right: 10px;
    height: 38px;
    padding:10px;
    border-radius: ${colorpalette.headerBorderRadius};
    margin-top: 20px;
    margin-bottom: 50px;
`
export default EditQuestionComponent;