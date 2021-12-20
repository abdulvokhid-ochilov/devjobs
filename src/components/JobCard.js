import React from "react";

const JobCard = ({ detail }) => {
  return (
    <>
      <div className="bg-white dark:bg-blue-dark px-[32px] pb-[32px] rounded-[6px] relative w-[327px] sm:w-[339px] md:w-[350px] flex flex-col justify-between">
        <div
          className="w-[50px] h-[50px] bg-grey-dark rounded-[15px] flex justify-center items-center -mt-6"
          style={{ backgroundColor: detail.logoBackground }}
        >
          <img src={`${detail.logo}`} alt={detail.company} />
        </div>
        <div>
          <div className="mt-[24px]">
            <p className="text-grey-dark font-normal text-base">
              {detail.postedAt}
              <span className="font-extrabold mx-[14px]">•</span>
              {detail.contract}
            </p>
            <p className="font-semibold text-[20px] my-[10px]">
              {detail.position}
            </p>
            <p className="text-grey-dark font-normal text-base">
              {detail.company}
            </p>
          </div>
        </div>
        <p className="text-[14px] text-violet-dark font-bold mt-[40px]">
          {detail.location}
        </p>
      </div>
      {/* <img
        src="C:\Users\82102\Desktop\devjobs-web-app\devjobs\src\assets\logos\blogr.svg"
        alt="pomodoro"
      /> */}
    </>
  );
};

export default JobCard;
