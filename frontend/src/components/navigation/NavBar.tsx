import { useState } from "react";
import { FiRefreshCw, FiUserPlus } from "react-icons/fi";
import ConnectModal from "../feedbackHub/ConnectModal";
import InviteModal from "../feedbackHub/InviteModal";

interface NavBarProps {
  isConnected: boolean;
  pageTitle?: string;
}

const NavBar = ({ isConnected, pageTitle }: NavBarProps) => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const handleConnect = (provider: string) => {
    console.log(`Reconnecting with ${provider}...`);
    // TODO: add your connect logic here (e.g., API call, update localStorage)
    setIsConnectModalOpen(false);
  };

  const handleInvite = (email: string) => {
    console.log(`Inviting teammate: ${email}`);
    // TODO: add your invite logic here (e.g., API call to send email)
  };

  const inviteUrl = "https://unifeed.com/invite/team123"; // Example link, replace with dynamic one

  if (!isConnected) return null;

  return (
    <>
      <div className="w-full h-16 px-6 flex items-center justify-between border-b border-gray-200 bg-white">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800 font-serif">
            {pageTitle || "Feedback Hub"}
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Reconnect */}
          <button
            onClick={() => setIsConnectModalOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 cursor-pointer text-gray-700 hover:bg-gray-100 transition"
          >
            <FiRefreshCw className="text-blue-500" />
            <span className="text-sm font-medium">Integrations</span>
          </button>

          {/* Invite */}
          <button
            onClick={() => setIsInviteModalOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 cursor-pointer text-gray-700 hover:bg-gray-100 transition"
          >
            <FiUserPlus className="text-green-500" />
            <span className="text-sm font-medium">Invite</span>
          </button>
        </div>
      </div>

      {/* Connect Modal */}
      {isConnectModalOpen && (
        <ConnectModal
          handleConnect={handleConnect}
          setIsModalOpen={setIsConnectModalOpen}
        />
      )}

      {/* Invite Modal */}
      {isInviteModalOpen && (
        <InviteModal
          handleInvite={handleInvite}
          inviteUrl={inviteUrl}
          setIsModalOpen={setIsInviteModalOpen}
        />
      )}
    </>
  );
};

export default NavBar;
