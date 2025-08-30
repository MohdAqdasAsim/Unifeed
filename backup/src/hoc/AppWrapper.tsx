import React from "react";

const AppWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithWrapper = (props: P) => {
    return (
      <section className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-slate-100">
        <WrappedComponent {...props} />
      </section>
    );
  };

  return ComponentWithWrapper;
};

export default AppWrapper;
