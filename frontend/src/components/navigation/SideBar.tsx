import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  LayoutDashboard,
  MessageSquare,
  Users,
  Settings,
  HelpCircle,
  FileText,
  LogOut,
  FileSignature,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`${
        collapsed ? "w-18" : "w-64"
      } h-full p-4 z-20 bg-gradient-to-b from-[#FFFAFA] to-gray-100 flex flex-col justify-between border-r border-gray-200 transition-all duration-300 relative`}
    >
      {/* Top Section */}
      <div>
        {/* Brand + Collapse Button */}
        <div className="flex flex-row items-center justify-between mb-4">
          {!collapsed && (
            <h1 className="text-xl font-bold text-gray-800">Unifeed</h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-200 transition"
          >
            {collapsed ? (
              <ChevronRight color="#4a5565" size={20} />
            ) : (
              <ChevronLeft color="#4a5565" size={20} />
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div
          className={`flex items-center border border-gray-300 rounded-lg px-2 py-1 mb-3 ${
            collapsed ? "hidden" : "flex"
          }`}
        >
          <Search size={18} className="text-gray-600" />
          {!collapsed && (
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className={`ml-2 w-full bg-transparent border-0 focus:ring-0 text-sm text-gray-700`}
            />
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {!collapsed && (
            <h1 className="text-xs font-bold text-gray-500 px-2 mb-1">MAIN</h1>
          )}
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <LayoutDashboard size={18} className="text-gray-700" />
            {!collapsed && "Dashboard"}
          </Link>
          <Link
            to="/feedback-hub"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <MessageSquare size={18} className="text-gray-700" />
            {!collapsed && "Feedback"}
          </Link>
          <Link
            to="/collaboration"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FileText size={18} className="text-gray-700" />
            {!collapsed && "Collaboration"}
          </Link>

          {!collapsed && (
            <h1 className="text-xs font-bold text-gray-500 px-2 mt-3 mb-1">
              EXPLORE
            </h1>
          )}
          <Link
            to="/team"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Users size={18} className="text-gray-700" />
            {!collapsed && "Team"}
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Settings size={18} className="text-gray-700" />
            {!collapsed && "Settings"}
          </Link>
          <Link
            to="/help"
            className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <HelpCircle size={18} className="text-gray-700" />
            {!collapsed && "Help"}
          </Link>
        </nav>
      </div>

      {/* Profile Section */}
      <div className="relative">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center w-full gap-3 p-2 rounded-lg bg-white shadow hover:shadow-md transition-all"
        >
          <img
            src="https://lirp.cdn-website.com/18180652/dms3rep/multi/opt/online-dating-KevinBrookim-Onlinedating-82-640w.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border"
          />
          {!collapsed && (
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-gray-800 leading-tight">
                John Doe
              </p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          )}
          {!collapsed && (
            <ChevronDown
              size={16}
              className={`text-gray-600 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          )}
        </button>

        {/* Dropdown Menu */}
        {openMenu && !collapsed && (
          <div className="absolute bottom-14 left-0 w-full bg-white shadow-lg rounded-lg py-2 z-50">
            <a
              href="#logout"
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#ff0000] hover:bg-gray-100"
            >
              <LogOut color="#ff0000" size={16} /> Logout
            </a>
            <a
              href="#tos"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FileSignature size={16} /> Terms of Service
            </a>
            <a
              href="#privacy"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Shield size={16} /> Privacy Policy
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
