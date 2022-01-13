import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
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
import Recovery from "./pages/Recovery";
import { useContext } from "react";
import Context from "./store/context";

const App = () => {
  const authCtx = useContext(Context);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className="font-KumbhSans bg-grey-light dark:bg-blue-midnight dark:text-white min-h-screen flex-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<JobDetails />} path="/details/:id"></Route>
          {!isLoggedIn ? (
            <Route element={<Login />} path="/login"></Route>
          ) : (
            <Route element={<Navigate to="/" />} path="/login"></Route>
          )}
          {!isLoggedIn ? (
            <Route element={<Registration />} path="/registration"></Route>
          ) : (
            <Route element={<Navigate to="/" />} path="/registration"></Route>
          )}
          {!isLoggedIn ? (
            <Route element={<Recovery />} path="/recovery/:token"></Route>
          ) : (
            <Route
              element={<Navigate to="/" />}
              path="/recovery/:token"
            ></Route>
          )}
          {!isLoggedIn && <Route element={<Forgot />} path="/forgot"></Route>}

          {isLoggedIn && <Route element={<Profile />} path="/profile"></Route>}
          {isLoggedIn && <Route element={<MyJobs />} path="/myjobs"></Route>}
          {isLoggedIn && <Route element={<PostJob />} path="/post-job"></Route>}
          {isLoggedIn && (
            <Route element={<Applicants />} path="/applicants"></Route>
          )}
          {isLoggedIn && (
            <Route element={<ApplicantInfo />} path="/applicants/:id"></Route>
          )}
          <Route element={<Jobs />} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
