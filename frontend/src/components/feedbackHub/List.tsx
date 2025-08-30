import { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import FeedbackListContent from "./FeedbackListContent";
import FilterPanel from "./FilterPanel";

const List = ({
  feedbacks,
  selectedId,
  onSelect,
}: {
  feedbacks: any[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Apply search filter
  const filteredFeedbacks = feedbacks.filter((fb) =>
    fb.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col border-r border-gray-200 bg-white relative">
      <Header onOpenFilter={() => setIsFilterOpen(true)} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <FeedbackListContent
        feedbacks={filteredFeedbacks}
        selectedId={selectedId}
        onSelect={onSelect}
      />

      {isFilterOpen && <FilterPanel onClose={() => setIsFilterOpen(false)} />}
    </div>
  );
};

export default List;

// Header Component
const Header = ({ onOpenFilter }: { onOpenFilter: () => void }) => {
  return (
    <div className="h-14 flex items-center justify-between px-4">
      <h1 className="text-lg font-semibold text-gray-800">Feedbacks</h1>
      <button
        onClick={onOpenFilter}
        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition"
      >
        <FiFilter className="text-gray-600" />
      </button>
    </div>
  );
};

// Search Bar Component
const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}) => {
  return (
    <div className="p-3 border-b border-gray-200">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search feedback..."
          className="bg-transparent outline-none flex-1 text-sm text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
};
