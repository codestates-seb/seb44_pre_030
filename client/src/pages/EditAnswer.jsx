import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import EditAnswerCompo from '../components/answer/EditAnswerCompo';
import { useParams } from 'react-router-dom';

const EditAnswer = () => {
  const asId = useParams();
  return (
    <div>
      <Sidebar />
      <EditAnswerCompo asId={asId} />
    </div>
  );
};

export default EditAnswer;
