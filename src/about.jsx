export function About () {
  return (
    <div className="about-container">
      <h1>About This App</h1>

      <p>
        This is a simple task manager built using React and React Router.
        It demonstrates multi-page navigation, dynamic routing, and state management.
      </p>

      <div className="about-section">
        <h3>Features</h3>
        <ul>
          <li>View all tasks</li>
          <li>Filter active tasks</li>
          <li>View task details</li>
          <li>Dynamic routing with URL parameters</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Tech Used</h3>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>CSS (custom styling)</li>
        </ul>
      </div>

      <p className="about-footer">
        Built as part of a routing assignment.
      </p>
    </div>
  );
}