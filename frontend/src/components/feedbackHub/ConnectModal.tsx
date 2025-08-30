import { SiTypeform } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { TbForms } from "react-icons/tb";

const ConnectModal = ({ handleConnect, setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-[#000000aa] flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Choose a Provider
        </h2>
        <div className="flex flex-row gap-3">
          <button
            onClick={() => handleConnect("Typeform")}
            className="flex flex-col items-center gap-3 p-3 rounded-lg cursor-pointer border hover:bg-gray-100 transition"
          >
            <SiTypeform className="text-[#2C2C2C]" size={104} />
            <span className="font-medium text-gray-700">Typeform</span>
          </button>
          <button
            onClick={() => handleConnect("SurveyMonkey")}
            className="flex flex-col items-center gap-3 p-3 rounded-lg cursor-pointer border hover:bg-gray-100 transition"
          >
            <TbForms className="text-green-500" size={104} />
            <span className="font-medium text-gray-700">SurveyMonkey</span>
          </button>
          <button
            onClick={() => handleConnect("Google Forms")}
            className="flex flex-col items-center gap-3 p-3 rounded-lg cursor-pointer border hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-red-500" size={104} />
            <span className="font-medium text-gray-700">Google Forms</span>
          </button>
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 text-sm text-gray-500 cursor-pointer hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConnectModal;
