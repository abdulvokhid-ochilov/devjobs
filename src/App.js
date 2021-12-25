import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Header from "./components/Header";
import Login from "./pages/Login";

const App = () => (
  <div className="font-KumbhSans bg-grey-light dark:bg-blue-midnight dark:text-white min-h-screen flex-auto">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<JobDetails />} path="/details/:id"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Jobs />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
