import React, { useState } from 'react';
import { styled } from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { AiFillCloseCircle } from 'react-icons/ai';
import axios from 'axios';

const WriteAnswer = () => {
  const [openInfo, setOpenInfo] = useState(true);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };
  const [createAnswer, setCreateAnswer] = useState('');

  const handleAnswerContent = e => {
    setCreateAnswer(e.blocks[0].text);
    console.log(createAnswer);
  };
  const answerPosting = () => {
    axios
      .post(`http://localhost:3000/api/answer`, {
        User: {
          name: '승현',
        },
        Answer_id: 5,
        Content: createAnswer,
        answered_At: '',
        User_id: 1,
        count: 0,
        question_id: 1,
        question_title:
          "How can I attach a javascript file to a page I'm repeatedly reloading with a fetch call?",
        question_content:
          " have a php file with a script linking to a javascript file that I'm reloading multiple times in a div with a fetch call. The first time I call it with fetch it's fine. However, when I'm returned the page with a fetch call for the second time, I'm getting errors that variables have already been declared which means the script is trying to reload every time I call that file. I can't insert it on the page from the start because the initial page is different from the subsequent fetches. Any ideas how I can attach a js script to a file that I'm fetching multiple times without errors on conflicting variables?",
        question_data: '2022-01-23',
        question_good_count: 1322,
        answer_count: 1112,
        question_view: 3000,
        tag: ['js', 'python'],
      })
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(error => console.log(error));
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
            onContentStateChange={handleAnswerContent}
            toolbar={{
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: false },
            }}
          />
        </AnswerContainerInput>
        <div>
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
            <button className="askquestion_Btn" onClick={answerPosting}>
              Post Your Answer
            </button>
          </AnswerBtn>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 727px;
`;

const AnswerContainerTitle = styled.div`
  margin: 20px 0;
`;
const AnswerContainerInput = styled.div`
  display: flex;
  margin-top: 10px;
  height: 450px;
  .wrapper-class {
    margin-bottom: 4rem;
    border: 1px solid lightgray;
  }
  .editor {
    height: 254px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

const AnswerInfo = styled.div`
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
  width: 800px;
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
    cursor: pointer;
  }
  .askquestion_Btn:hover {
    background: hsl(206, 100%, 40%);
  }
`;

export default WriteAnswer;
