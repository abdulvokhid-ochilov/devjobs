import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route component={JobsDetails} path="/details"></Route>
          <Route component={Jobs} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
