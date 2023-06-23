import React from 'react';
import EditAnswerCompo from '../components/answer/EditAnswerCompo';
import { useParams } from 'react-router-dom';

const EditAnswer = () => {
  const asId = useParams();
  return (
    <div>
      <EditAnswerCompo asId={asId} />
    </div>
  );
};

export default EditAnswer;
