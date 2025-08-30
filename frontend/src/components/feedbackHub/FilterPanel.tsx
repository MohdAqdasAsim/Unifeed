import { FiX } from "react-icons/fi";

type FilterPanelProps = {
  onClose: () => void;
};

const FilterPanel = ({ onClose }: FilterPanelProps) => {
  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      ></div>

      {/* Panel */}
      <div className="relative w-80 h-full bg-white shadow-lg p-6 flex flex-col animate-slide-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FiX size={20} />
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Filter Feedback
        </h2>

        {/* Filter Options */}
        <div className="space-y-4">
          {/* Time */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Time</h3>
            <select className="w-full px-3 py-2 border rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          {/* Source */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Source</h3>
            <select className="w-full px-3 py-2 border rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Typeform</option>
              <option>Google Forms</option>
              <option>SurveyMonkey</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Status</h3>
            <select className="w-full px-3 py-2 border rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Pending</option>
              <option>Reviewed</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>

        {/* Apply Filters */}
        <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
