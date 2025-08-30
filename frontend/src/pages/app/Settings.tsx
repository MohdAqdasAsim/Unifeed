import AppWrapper from "../../hoc/AppWrapper";

type SettingsProps = {
  isConnected: boolean;
};

const Settings = ({ isConnected }: SettingsProps) => {
  return <div>{isConnected}</div>;
};

const WrappedApp = AppWrapper(Settings, "Settings");
export default WrappedApp;
