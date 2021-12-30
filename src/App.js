import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Header from "./components/Header";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Applicants from "./pages/Applicants";
import ApplicantInfo from "./pages/ApplicantInfo";
import MyJobs from "./pages/MyJobs";
import PostJob from "./pages/PostJob";

const App = () => (
  <div className="font-KumbhSans bg-grey-light dark:bg-blue-midnight dark:text-white min-h-screen flex-auto">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<JobDetails />} path="/details/:id"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Forgot />} path="/forgot"></Route>
        <Route element={<Registration />} path="/registration"></Route>
        <Route element={<Profile />} path="/profile"></Route>
        <Route element={<MyJobs />} path="/myjobs"></Route>
        <Route element={<PostJob />} path="/post-job"></Route>
        <Route element={<Applicants />} path="/applicants"></Route>
        <Route element={<ApplicantInfo />} path="/applicants/:id"></Route>
        <Route element={<Jobs />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
