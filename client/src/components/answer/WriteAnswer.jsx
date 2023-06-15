import React, { useState } from 'react';
import { styled } from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { AiFillCloseCircle } from 'react-icons/ai';

const WriteAnswer = () => {
  const [openInfo, setOpenInfo] = useState(true);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };
  return (
    <>
      <AnswerContainerTitle>
        <h2>Your Answer</h2>
      </AnswerContainerTitle>
      <Container>
        <AnswerContainerInput>
          <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor"
            toolbarClassName="toolbar-class"
            localization={{
              locale: 'ko',
            }}
            placeholder="답변 내용을 입력하세요."
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
            toolbar={{
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: false },
            }}
          />
        </AnswerContainerInput>
        {openInfo ? (
          <AnswerInfo>
            Thanks for contributing an answer to Stack Overflow!
            <ul>
              <li>
                Please be sure to answer the question. Provide details and share
                your research!
              </li>
            </ul>
            But avoid...
            <ul>
              <li>
                Asking for help, clarification, or responding to other answers.
              </li>
              <li>
                Making statements based on opinion; back them up with references
                or personal experience.
              </li>
              To learn more, see our tips on writing great answers.
            </ul>
            <button
              onClick={() => {
                setOpenInfo(!openInfo);
              }}
              className="closeInfo-btn"
            >
              <AiFillCloseCircle />
            </button>
          </AnswerInfo>
        ) : null}
        <AnswerBtn>
          <button className="askquestion_Btn">Post Your Answer</button>
        </AnswerBtn>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerContainerTitle = styled.div`
  margin: 20px 0;
  transform: translateX(25%);
`;
const AnswerContainerInput = styled.div`
  display: flex;
  margin-top: 10px;
  height: 450px;
  .wrapper-class {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 4rem;
    border: 3px solid lightgray;
  }
  .editor {
    height: 254px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
    background-color: #f1f1f1;
  }
`;
const AnswerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  position: relative;
  margin-bottom: 10px;
  background-color: #fdf7e2;
  border-radius: 10px;
  line-height: 180%;
  font-size: 14px;
  padding: 20px;
  border: 1px solid hsl(47, 70%, 70%);
  margin-bottom: 20px;
  li {
    list-style: inside !important;
    margin-left: 20px;
  }
  .closeInfo-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
const AnswerBtn = styled.div`
  display: flex;
  width: 542px;
  .askquestion_Btn {
    background: #0a95ff;
    width: 125px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 13px;
    color: #fff;
    border-radius: 5px;
    border: #1681d2;
    font-weight: 500;
  }
  .askquestion_Btn:hover {
    background: hsl(206, 100%, 40%);
  }
`;

export default WriteAnswer;
