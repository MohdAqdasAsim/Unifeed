const FeedbackCard = ({ text, source, time }) => {
  return (
    <div className="p-4 mb-3 rounded-xl bg-slate-800/50 backdrop-blur-md border border-slate-700 shadow-md cursor-pointer hover:border-blue-500 hover:shadow-blue-500/30 transition">
      <p className="text-sm font-medium text-slate-100">{text}</p>
      <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
        <span>{source}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
