import React, { FC } from "react";
import SideBar from "../sidebar";

interface AppLayoutPage {
  children: React.ReactNode;
}

const Layout: FC = ({ children }: AppLayoutPage) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
