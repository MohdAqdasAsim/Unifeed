import FeedbackCard from "./FeedbackCard";

const FeedbackList = () => {
  const feedbacks = [
    {
      id: 1,
      text: "Delivery was late, and support was unhelpful…",
      source: "Google Reviews",
      time: "2h ago",
    },
    {
      id: 2,
      text: "Really happy with the new dashboard update!",
      source: "Twitter",
      time: "5h ago",
    },
  ];

  return (
    <div className="w-1/3 border-r-2 border-gray-700 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Feedback Hub</h2>
      {feedbacks.map((f) => (
        <FeedbackCard
          key={f.id}
          text={f.text}
          source={f.source}
          time={f.time}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
