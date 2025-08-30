import AppWrapper, { type WithConnectionProps } from "../../hoc/AppWrapper";

const Dashboard: React.FC<WithConnectionProps> = ({ isConnected }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-black font-bold">Dashboard</h1>
      <p className="text-black">
        Connection status:{" "}
        <span className={isConnected ? "text-green-600" : "text-red-600"}>
          {isConnected ? "Connected ✅" : "Disconnected ❌"}
        </span>
      </p>
    </div>
  );
};

const WrappedApp = AppWrapper(Dashboard, "Dashboard");
export default WrappedApp;
