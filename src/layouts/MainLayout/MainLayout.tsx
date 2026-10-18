import "./MainLayout.css";
import type { ReactNode } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainLayout.css";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <Sidebar />

      <main className="main-content">{children}</main>
    </div>
  );
}

export default MainLayout;
