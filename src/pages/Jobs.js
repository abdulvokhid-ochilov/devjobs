import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    let url = "http://localhost:5000/api/v1/jobs";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Getting jobs failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        setJobs(data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <>
      <Search />
      <div className="min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[10px] md:gap-x-[30px] gap-y-[50px] relative lg:mt-[80px] md:mt-[60px] mt-[40px]">
        {jobs
          ? jobs.map((job) => (
              <Link
                to="../details"
                key={job["_id"]}
                state={job}
                className="flex justify-center w-full"
              >
                <JobCard job={job} />
              </Link>
            ))
          : "Loading..."}
      </div>
    </>
  );
};

export default Jobs;
