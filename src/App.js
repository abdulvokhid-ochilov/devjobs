import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<JobsDetails />} path="/details"></Route>
      <Route element={<Jobs />} path="/"></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
