import { useState } from "react";
import { FiMail, FiCopy } from "react-icons/fi";

const InviteModal = ({ setIsModalOpen, handleInvite, inviteUrl }) => {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="fixed inset-0 bg-[#000000aa] flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6 w-[420px]">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Invite Teammates
        </h2>

        {/* Invite by email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Invite by Email
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teammate@example.com"
              className="flex-1 border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => handleInvite(email)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              <FiMail />
              Send
            </button>
          </div>
        </div>

        {/* Invite link */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Share Invite Link
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={inviteUrl}
              readOnly
              className="flex-1 border rounded-lg px-3 py-2 text-gray-700 bg-gray-50"
            />
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-2 border border-gray-600 cursor-pointer rounded-lg hover:bg-gray-100 transition"
            >
              <FiCopy color="#000" />
            </button>
          </div>
        </div>

        {/* Cancel */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-2 text-sm text-gray-500 cursor-pointer hover:underline text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InviteModal;
