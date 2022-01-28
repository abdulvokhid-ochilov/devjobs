import React from "react";

const JobCard = ({ job }) => {
  return (
    <>
      <div className="bg-white dark:bg-blue-dark px-[32px] pb-[32px] rounded-[6px] relative w-[327px] sm:w-[339px] md:w-[350px] flex flex-col justify-between">
        <div
          className="w-[50px] h-[50px] bg-grey-dark rounded-[15px] flex justify-center items-center -mt-6"
          // style={{ backgroundColor: job.logoBackground }}
        >
          <img src={job.logo} alt={job.company} />
        </div>
        <div>
          <div className="mt-[24px]">
            <p className="text-grey-dark font-normal text-base">
              {new Date(job.postedAt).toLocaleDateString()}
              <span className="font-extrabold mx-[14px]">•</span>
              {job.contract}
            </p>
            <p className="font-semibold text-[20px] my-[10px]">
              {job.position}
            </p>
            <p className="text-grey-dark font-normal text-base">
              {job.company}
            </p>
          </div>
        </div>
        <p className="text-[14px] text-violet-dark font-bold mt-[40px]">
          {job.location}
        </p>
      </div>
    </>
  );
};

export default JobCard;
