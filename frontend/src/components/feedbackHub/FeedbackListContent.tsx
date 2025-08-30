import "../../index.css";

const FeedbackListContent = ({
  feedbacks,
  selectedId,
  onSelect,
}: {
  feedbacks: any[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
      {feedbacks.map((fb) => {
        const isSelected = selectedId === fb.id;
        return (
          <div
            key={fb.id}
            onClick={() => onSelect(fb.id)}
            className={`cursor-pointer py-3 px-4 border rounded-lg transition 
              ${
                isSelected
                  ? "bg-blue-50 border-blue-400 shadow-md"
                  : "bg-white hover:shadow-sm"
              }`}
          >
            {/* Title + Status */}
            <div className="flex items-center justify-between mb-1">
              <h3
                className={`text-sm font-semibold ${
                  isSelected ? "text-blue-700" : "text-gray-800"
                }`}
              >
                {fb.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  fb.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : fb.status === "Reviewed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {fb.status}
              </span>
            </div>

            {/* Message */}
            <p
              className={`text-sm line-clamp-2 ${
                isSelected ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {fb.message}
            </p>

            {/* Meta info */}
            <div
              className={`mt-2 flex items-center justify-between text-xs ${
                isSelected ? "text-blue-500" : "text-gray-400"
              }`}
            >
              <span>{fb.source}</span>
              <span>{fb.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackListContent;
