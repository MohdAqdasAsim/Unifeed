import { useState } from "react";
import { FiX, FiSend, FiMoreVertical } from "react-icons/fi";

const Details = ({
  feedback,
  onClose,
}: {
  feedback: any | null;
  onClose: () => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!feedback) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <h2 className="text-lg font-medium">No feedback selected</h2>
        <p className="text-sm text-gray-400 mt-1">
          Select a feedback from the list to see its details here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          {feedback.title}
        </h2>

        <div className="flex items-center gap-2">
          {/* Options Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FiMoreVertical className="text-gray-600" size={20} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-50">
                <button
                  onClick={() => alert("Edit feedback")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => alert("Mark as Resolved")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Mark as Resolved
                </button>
                <button
                  onClick={() => alert("Delete feedback")}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FiX className="text-gray-600" size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
        {/* Message */}
        <p className="text-gray-700 text-base leading-relaxed">
          {feedback.message}
        </p>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-800">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                feedback.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : feedback.status === "Reviewed"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {feedback.status}
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-800">Source:</span>{" "}
            {feedback.source}
          </div>
          <div>
            <span className="font-medium text-gray-800">Date:</span>{" "}
            {feedback.date}
          </div>
          <div>
            <span className="font-medium text-gray-800">ID:</span> {feedback.id}
          </div>
        </div>
      </div>

      {/* Comment Bar */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
};

export default Details;
