const AnswerOption = ({ answer, index, isSelected, onSelect }) => {
  return (
    <div
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(index)}
    >
      {answer}
    </div>
  );
};

export default AnswerOption;
