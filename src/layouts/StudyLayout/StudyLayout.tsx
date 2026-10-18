import "./StudyLayout.css";
import type { ReactNode } from "react";
import Sidebar from "/./src/components/Sidebar/Sidebar";
type StudyLayoutProps = {
  children: ReactNode;
};
function StudyLayout({ children }: StudyLayoutProps) {
  return (
    <div className="study-layout">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
}
export default StudyLayout;
