import AppWrapper from "../../hoc/AppWrapper";

type CollaborationProps = {
  isConnected: boolean;
};

const Collaboration = ({ isConnected }: CollaborationProps) => {
  return <div>Collaboration{isConnected}</div>;
};

const WrappedApp = AppWrapper(Collaboration, "Collaboration");
export default WrappedApp;
