import "./Sidebar/StudySidebar.css";

function StudySidebar() {
  return (
    <aside className="study-container">
      <h2 className="study-title">StudyHub</h2>

      <nav>
        <ul className="study-list">
          <li>
            <a className="study-link active" href="/">
              Dashboard
            </a>
          </li>

          <li>
            <a className="study-link" href="/courses">
              Courses
            </a>
          </li>

          <li>
            <a className="study-link" href="/schedule">
              Schedule
            </a>
          </li>

          <li>
            <a className="study-link" href="/progress">
              Progress
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default StudySidebar;
