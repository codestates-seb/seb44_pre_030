import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { styled } from 'styled-components';

function EditAnswerCompo({ asId }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };
  const [editAnswer, setEditAnswer] = useState('');

  const handleAnswerContent = e => {
    setEditAnswer(e.blocks[0].text);
    console.log(editAnswer);
  };
  return (
    <div>
      <EditContainer>
        <BodyContainer>
          <div className="edit-title">Answer</div>
          <AnswerContainerInput>
            <Editor
              wrapperClassName="wrapper-class"
              editorClassName="editor"
              toolbarClassName="toolbar-class"
              localization={{
                locale: 'ko',
              }}
              placeholder="답변 내용을 입력하세요."
              EditorState={editorState}
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
        </BodyContainer>
        <div className="answer-preview">{editAnswer}</div>
        <BtnContainer>
          <button className="save flex-center btn-blue-style">Save Edit</button>
          <button className="cancel flex-center btn-skyblue-style">
            Cancel
          </button>
        </BtnContainer>
      </EditContainer>
    </div>
  );
}

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .answer-preview {
    display: flex;
    justify-content: center;
    min-height: 30px;
    margin-bottom: 30px;
  }
`;
const BodyContainer = styled.div`
  width: 80%;
  .edit-title {
    width: 600px;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 600px;
  margin-bottom: 20px;
  .save {
    height: 35px;
    width: 80px;
    font-size: 13px;
    background-color: hsl(206, 100%, 52%);
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }
  .save:hover {
    background-color: hsl(
      206.02941176470586,
      90.66666666666666%,
      29.411764705882355%
    );
  }
  .cancel {
    font-weight: 600;
    padding: 2px 5px;
    height: 35px;
    width: 80px;
    font-size: 13px;
    border-radius: 3px;
    border: none;
    background-color: hsl(0, 0%, 100%);
    color: hsl(206, 100%, 52%);
    cursor: pointer;
  }
  .cancel:hover {
    background-color: hsl(0, 7.462686567164193%, 86.86274509803921%);
  }
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
export default EditAnswerCompo;
