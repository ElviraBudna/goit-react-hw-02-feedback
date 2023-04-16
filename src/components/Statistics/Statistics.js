import Notification from 'components/Section/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) {
  return (
    <div>
      {total !== 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
