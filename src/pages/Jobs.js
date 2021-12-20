import React from "react";
import Search from "../components/Search";
import JobCard from "../components/JobCard";
import data from "../data.json";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <>
      <Search />
      <div className="min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[10px] md:gap-x-[30px] gap-y-[50px] relative lg:mt-[80px] md:mt-[60px] mt-[40px]">
        {data.map((item) => (
          <Link
            to={`../job-detail/${item.id}`}
            key={item.id}
            className="flex justify-center w-full"
          >
            <JobCard detail={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Jobs;
