import {
  Mail,
  MessageSquare,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-20 border-r border-slate-700 flex flex-col items-center py-6 space-y-6 shadow-lg bg-slate-900/50 backdrop-blur-md">
      {/* Logo */}
      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
        <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
      </div>

      {/* Nav Icons */}
      <nav className="flex flex-col items-center space-y-6 flex-1">
        <button className="p-2 rounded-lg hover:bg-slate-800 transition">
          <Mail className="h-6 w-6 text-slate-300 hover:text-cyan-400" />
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-800 transition">
          <MessageSquare className="h-6 w-6 text-slate-300 hover:text-cyan-400" />
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-800 transition">
          <CheckSquare className="h-6 w-6 text-slate-300 hover:text-cyan-400" />
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-800 transition">
          <BarChart3 className="h-6 w-6 text-slate-300 hover:text-cyan-400" />
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-800 transition">
          <Settings className="h-6 w-6 text-slate-300 hover:text-cyan-400" />
        </button>
      </nav>

      {/* Profile */}
      <div className="w-10 h-10 rounded-full bg-slate-700" />
    </div>
  );
};

export default Sidebar;
