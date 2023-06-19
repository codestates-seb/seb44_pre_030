import React from 'react';
import WriteAnswer from '../components/answer/WriteAnswer';
import Answer from '../components/answer/Answer';
import Sidebar from '../components/sidebar/Sidebar';

const QuestionDetail = () => {
  return (
    <div>
      <Sidebar />
      <Answer />
      <WriteAnswer />
    </div>
  );
};

export default QuestionDetail;
