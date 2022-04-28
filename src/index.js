import { render } from "react-dom";
import { BrowserRouter, Routes,
  Route } from "react-router-dom";
import App from "./App";
import Aptitud from "./routes/aptitud";
import Aptitude from "./routes/aptitude";
import Puzzle from "./routes/puzzle";
import Reasoning from "./routes/reasoning";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path="puzzle" element={<Puzzle />} />
        <Route path="reasoning" element={<Reasoning />} />
        
        <Route path="aptitude" element={<Aptitude />}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p> Select the topic </p>
          </main>
        }
      />
      <Route path=":aptitudId" element={<Aptitud />} />
    </Route>


        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

