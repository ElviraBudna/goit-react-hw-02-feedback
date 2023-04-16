import { nanoid } from 'nanoid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(option.name)}
          key={(option.id = nanoid())}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}
