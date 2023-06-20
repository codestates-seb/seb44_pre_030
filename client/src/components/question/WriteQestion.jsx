import React,{useState} from 'react';
import { styled } from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

import colorpalette from '../../styles/colorpalette';


const noticeListData = [
    'Summarize your problem in a one-line title.',
    'Describe your problem in more detail.',
    'Describe what you tried and what you expected to happen.',
    'Add “tags” which help surface your question to members of the community.',
    'Review your question and post it to the site.'
]
const InputData = {
    titleInput:{title:'Title',description:'Be specific and imagine you’re asking a question to another person.',placeholder:'e.g. Is there an R function for finding the index of an element in a vector?'},
    problemInput:{title:'What are the details of your problem?',description:'Introduce the problem and expand on what you put in the title. Minimum 20 characters.'},
    tagInput:{title:'Tags',description:'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',placeholder:"e.g. (pandas spring swift)"}
}


const WriteQestion = () => {
    const [editorState,setEditorState] = useState(EditorState.createEmpty());
    const [editorFocused, setEditorFocused] = useState(false);

    const handleEditorStateChange = (newEditorState) =>{
        setEditorState(newEditorState);
    }
    const handleEditorFocus = () => {
        setEditorFocused(true);
    }
    return (
        <QuestionContainer>
            <QuestionWriteTitle>
                <h2>Ask a public question</h2>
            </QuestionWriteTitle>

            <QuestionNotice className='questionWriteContainer'>
                <h3>Writing a good question</h3>
                You’re ready to ask a programming-related question and this form will help guide you through the process.Looking to ask a non-programming question? See the topics here to find a relevant site.
                <h4>Steps</h4>
                <ul>
                    {noticeListData.map((data,i)=><li key={i}>{data}</li>)}
                </ul>
            </QuestionNotice>
            
            <InputContainer>
                <TitleInputContainer className='questionWriteContainer'>
                    <h3 className='inputBoxtitle'>{InputData.titleInput.title}</h3>
                    <span className='input-description'>{InputData.titleInput.description}</span>
                    <input className='DataInput' type='text' placeholder={InputData.titleInput.placeholder}></input>
                </TitleInputContainer>

                <ProblemInputContainer className='questionWriteContainer'>
                    <h3 className='inputBoxtitle'>{InputData.problemInput.title}</h3>
                    <span className='input-description'>{InputData.problemInput.description}</span>

                    <ProblemInputWrapper className='ProblemInputWrapper'>
                        <Editor
                            onFocus={handleEditorFocus}
                            wrapperClassName='wrapper-class'
                            editorClassName={editorFocused?"editor-focus":"editor"}
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
                </ProblemInputContainer>
                <TagInputContainer className='questionWriteContainer'>
                    <h3 className='inputBoxtitle'>{InputData.tagInput.title}</h3>
                    <span className='input-description'>{InputData.tagInput.description}</span>
                    <input className='DataInput' type='text' placeholder={InputData.tagInput.placeholder}></input>
                </TagInputContainer>

                <SubmitBtn type='submit'>Post your question</SubmitBtn>
                <ResetBtn>Discard draft</ResetBtn>
            </InputContainer>

        </QuestionContainer>
    );
};

const QuestionContainer = styled.main`
    padding:15px;
    & .questionWriteContainer{
        width:850px;
        border-radius: 5px;
        margin-top:20px;
        padding:25px;
        display: flex;
        flex-direction: column;
        border: 1px solid ${colorpalette.questionInputBoxBorderColor};
    }
    & button{
        margin-top:20px;
        margin-right: 10px;
        padding:10px;
        border: none;
        border-radius: 3px;
    }
    
`
const QuestionWriteTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 41px;
`
const QuestionNotice = styled.div`
    background-color: ${colorpalette.questionNoticeColor};
    border: 1px solid ${colorpalette.questionNoticeBorderColor};

    height: 250px;
    padding:30px;
    font-size:${colorpalette.questionWritePageFontSize};
    & h3{
        margin-bottom: 10px;
    }
    & ul{
        padding-left: 40px;
    }
    & li{
        list-style-type: disc; 
    }
    & h4{
        margin: 20px 0;
    }
`
const InputContainer = styled.form`

    & div{
        background-color: ${colorpalette.signatureWhite};
    }
    & .inputBoxtitle{
        margin-bottom: 5px;
    }
    & .input-description{
        margin-bottom: 10px;
        font-size: ${colorpalette.questionWritePageFontSize};
    }
    & .DataInput{
        padding:10px;
        border:none;
        border: 1px solid ${colorpalette.headerSearchBorderColor};
        border-radius:${colorpalette.headerBorderRadius};
    }
    & .DataInput:focus{
        outline:none !important;
        border-color: ${colorpalette.headerSearchBorderFocusColor};
        box-shadow: 0 0 10px ${colorpalette.headerSearchBorderShadowColor};
    }
    margin-bottom: 70px;
`
const TitleInputContainer = styled.div`
    height: 150px;
`
const ProblemInputContainer = styled.div`
    height: 348px;
`
const ProblemInputWrapper = styled.section`
    height: 250px;
    overflow: scroll;
    .wrapper-class{
        margin: 0 auto;
        margin-bottom: 4rem;
    }
    .editor {
        height: 180px !important;
        border: 1px solid ${colorpalette.headerSearchBorderColor};
        padding: 10px;
        border-radius: 2px !important;
    }
    .editor-focus{
        padding: 10px;
        height: 180px !important;
        outline:none !important;
        border-color: ${colorpalette.headerSearchBorderFocusColor};
        box-shadow: 0 0 10px ${colorpalette.headerSearchBorderShadowColor};
    }
    

`

const TagInputContainer = styled.div`
    height: 180px;
`
const SubmitBtn = styled.button`
    background-color: ${colorpalette.questionWriteBtnColor};
    color:${colorpalette.signatureWhite};
    cursor: pointer;
    &:hover{
        background-color: ${colorpalette.questionWriteBtnHoverColor};
    }
    &:active{
        background-color: ${colorpalette.qeustionWriteBtnActiveColor};
    }
`
const ResetBtn = styled.button`
    color: ${colorpalette.questionResetBtnFontColor};
    cursor: pointer;
    &:hover{
        background-color: ${colorpalette.questionResetBtnHoverColor};
    }
    &:active{
        background-color: ${colorpalette.questionResetBtnActiveColor};
    }
`

export default WriteQestion;