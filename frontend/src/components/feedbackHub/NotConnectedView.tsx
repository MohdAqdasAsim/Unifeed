import ConnectModal from "./ConnectModal";

type NotConnectedViewProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  handleConnect: (provider: string) => void;
};

const NotConnectedView = ({
  setIsModalOpen,
  isModalOpen,
  handleConnect,
}: NotConnectedViewProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center justify-center p-8 w-[420px] text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-8 0v4m8 0h-4"
          />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">Feedback Hub</h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-2">
        Please connect your account to access the Feedback Hub.
      </p>

      {/* Connect Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
      >
        Connect
      </button>

      {/* Modal */}
      {isModalOpen && (
        <ConnectModal
          handleConnect={handleConnect}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default NotConnectedView;
