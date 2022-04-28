import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>MathQuiz</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/aptitude">Aptitude</Link> |{" "}
        <Link to="/reasoning">Reasoning</Link> |{" "}
        <Link to="/puzzle">Puzzle</Link>
      </nav>
      <Outlet />
    </div>
  );
}


