import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";
import Header from "./components/Header";

const App = () => (
  <div className="font-KumbhSans bg-grey-light dark:bg-blue-midnight dark:text-white min-h-screen">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<JobsDetails />} path="/details"></Route>
        <Route element={<Jobs />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
