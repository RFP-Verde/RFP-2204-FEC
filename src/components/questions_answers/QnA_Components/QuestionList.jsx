import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import MoreQuestions from './MoreQuestions';
import AddAQuestion from './AddAQuestion';

export default function QuestionList({ questions, searchInput, productID }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      style={{
        maxHeight: '1000px',
        overflowY: 'scroll',
      }}
    >
      {searchInput === null
        ? questions
            .slice(0, 5)
            .map((question, count) =>
              count > 3 ? (
                <MoreQuestions
                  questions={questions}
                  key={question.question_id}
                />
              ) : (
                <Question
                  question={question}
                  key={question.question_id}
                  productID={productID}
                />
              )
            )
        : questions
            .filter((q) =>
              q.question_body.toLowerCase().includes(searchInput.toLowerCase())
            )
            .slice(0, 5)
            .map((question, count) =>
              count > 3 ? (
                <MoreQuestions
                  questions={questions}
                  key={question.question_id}
                />
              ) : (
                <Question
                  question={question}
                  productID={productID}
                  key={question.question_id}
                />
              )
            )}
      <div>
        <button
          className="add-question-button"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          Add A QUESTION +
        </button>
        {openModal && (
          <AddAQuestion productID={productID} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  searchInput: PropTypes.string,
  productID: PropTypes.string.isRequired,
};

QuestionList.defaultProps = {
  searchInput: null,
};
