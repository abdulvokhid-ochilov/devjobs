import Button from "../components/Button";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import Context from "../store/context";

const Jobsjob = function () {
  const ctx = useContext(Context);
  const job = useLocation().state;
  console.log(job);

  const applyJob = () => {
    if (!ctx.isLoggedIn) {
      return alert("You need to log in to apply for a job!");
    }

    if (ctx.userData["_id"] === job.postedBy) {
      return alert("You cannot apply for a job you posted!");
    }

    if (ctx.userData.resume === "undefined" || !ctx.userData.resume) {
      return alert("You need to upload your resume to apply for a job!");
    }

    const appliedJobs = ctx.userData.appliedJobs;

    for (let i = 0; i < appliedJobs.length; i++) {
      if (appliedJobs[i].job["_id"] === job["_id"]) {
        return alert("You have already applied to this job!");
      }
    }

    let url = `http://localhost:5000/api/v1/jobs/${job["_id"]}/apply`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Applying for a job is failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);

        ctx.updateUserData(ctx.token);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <div className="md:mx-auto sm:mx-[40px] mx-[24px] -mt-10 mb-10 sm:mb-20 max-w-[730px] min-w-[330px]">
        <div className="bg-white dark:bg-blue-dark pb-[2rem] sm:px-0 sm:py-0 sm:pr-[40px] relative w-full min-h-[205px] sm:min-h-[140px] max-w-[22rem] sm:max-w-full flex flex-col sm:flex-row justify-between items-center mx-auto rounded-md">
          <div className="flex justify-center w-full sm:w-3/12 self-stretch">
            <div className="w-[56px] h-[56px] sm:w-full sm:h-full  bg-grey-dark rounded-[15px] sm:rounded-none sm:rounded-l-md flex justify-center items-center -mt-7 sm:mt-0 sm:p-0]">
              <img
                className="sm:w-full rounded-l"
                src={job.logo}
                alt={job.company}
              />
            </div>
          </div>
          <div className="text-center sm:w-6/12 sm:text-left sm:px-[40px] sm:pt-0">
            <h1 className="font-semibold lg:text-[24px] text-[20px]">
              {job.company}
            </h1>
            <p className="text-grey-dark text-base">{job.website}</p>
          </div>
          <div className="sm:w-4/12 flex justify-end">
            <Link
              target="_blank"
              to="/"
              onClick={() => {
                window.open(job.website);
              }}
            >
              <Button
                text="Comapany Site"
                width="[147px]"
                className="bg-violet-dark bg-opacity-10 text-violet-dark hover:bg-violet-dark hover:bg-opacity-40 dark:bg-grey-btn dark:text-white dark:hover:bg-grey-hover text-base lg:px-6 md:px-6 px-6"
              />
            </Link>
          </div>
        </div>
        <div className="py-[40px] px-[24px] md:p-[48px] bg-white dark:bg-blue-dark mt-6 sm:mt-8 rounded-md max-w-[22rem] sm:max-w-full mx-auto">
          <div className="flex w-full justify-between sm:items-center flex-col sm:flex-row mb-4">
            <div>
              <p className="text-grey-dark text-base">
                {new Date(job.postedAt).toLocaleDateString()}
                <span className="px-[12px]">•</span>
                {job.contract}
              </p>
              <p className="font-bold text-[20px] md:text-[28px] my-[6px]">
                {job.position}
              </p>
              <p className="text-[14px] text-violet-dark font-bold">
                {job.location}
              </p>
            </div>

            <Button
              onClick={applyJob}
              text="Apply Now"
              className="bg-violet-dark text-white hover:bg-violet-light w-full sm:w-40 mt-[49px] sm:mt-0"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      </div>
      <footer className="bottom-0 py-5 bg-white dark:bg-blue-dark">
        <div className="max-w-[730px] md:mx-auto sm:mx-[40px] mx-[24px] flex justify-between sm:items-center flex-col sm:flex-row">
          <div className="hidden sm:flex flex-col">
            <p className="font-bold py-1 text-[20px]">{job.position}</p>
            <p className="text-grey-dark text-base">{job.company}</p>
          </div>

          <Button
            onClick={applyJob}
            text="Apply Now"
            className="bg-violet-dark text-white hover:bg-violet-light w-full sm:w-40"
          />
        </div>
      </footer>
    </>
  );
};

export default Jobsjob;
