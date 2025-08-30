const FeedbackDetails = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-slate-100">
        Feedback Details
      </h2>

      {/* Feedback Content */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700 p-6 shadow-md">
        <p className="text-slate-200 mb-4">
          “Delivery was late, and support was unhelpful. I had to wait 3 days
          for a response…”
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <span>Source: Google Reviews</span>
          <span>Sentiment: 😠 Negative</span>
          <span>2h ago</span>
        </div>
      </div>

      {/* Comment / Action Box */}
      <div className="mt-6">
        <textarea
          className="w-full p-3 rounded-lg bg-slate-900/40 border border-slate-700 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a comment..."
          rows={3}
        />
        <button className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition">
          Comment
        </button>
      </div>
    </div>
  );
};

export default FeedbackDetails;
