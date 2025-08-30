import AppWrapper from "../../hoc/AppWrapper";

type TeamProps = {
  isConnected: boolean;
};

const Team = ({ isConnected }: TeamProps) => {
  return <div>{isConnected}</div>;
};

const WrappedApp = AppWrapper(Team, "Team");
export default WrappedApp;
