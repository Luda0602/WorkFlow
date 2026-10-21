import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">WorkFlow</h2>

      <nav>
        <ul className="sidebar-list">
          <li>
            <a className="sidebar-link" href="/">
              Dashboard
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="sidebar-link" href="/tasks">
              Tasks
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
