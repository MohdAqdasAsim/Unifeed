import React, { useEffect, useState } from "react";
import { NavBar, SideBar } from "../components";

export interface WithConnectionProps {
  isConnected: boolean;
}

const AppWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithConnectionProps>,
  pageTitle?: string
) => {
  const ComponentWithWrapper = (props: P) => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
      const storedStatus = localStorage.getItem("isConnected") === "true";
      setIsConnected(storedStatus);
    }, []);

    useEffect(() => {
      localStorage.setItem("isConnected", String(isConnected));
    }, [isConnected]);

    return (
      <main className="w-screen h-screen flex flex-row bg-[#FFFAFA]">
        <SideBar />
        {/* flex column container */}
        <div className="flex flex-col flex-1 overflow-auto">
          <NavBar isConnected={isConnected} pageTitle={pageTitle} />
          {/* this will take the rest of the space */}
          <div className="flex-1 w-full h-full overflow-hidden">
            <WrappedComponent isConnected={isConnected} {...props} />
          </div>
        </div>
      </main>
    );
  };

  return ComponentWithWrapper;
};

export default AppWrapper;
