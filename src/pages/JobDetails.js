import Data from "../data.json";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const Jobsjob = function () {
  const { id } = useParams();

  const job = Data.find((el) => el.id === parseInt(id));

  return (
    <>
      <div className="md:mx-auto sm:mx-[40px] mx-[24px] -mt-10 mb-10 sm:mb-20 max-w-[730px] min-w-[330px]">
        <div className="bg-white dark:bg-blue-dark pb-[2rem] sm:px-0 sm:py-0 sm:pr-[40px] relative w-full min-h-[205px] sm:min-h-[140px] max-w-[22rem] sm:max-w-full flex flex-col sm:flex-row justify-between items-center mx-auto rounded-md">
          <div className="flex justify-center w-full sm:w-3/12 self-stretch">
            <div
              className="w-[56px] h-[56px] sm:w-full sm:h-full  bg-grey-dark rounded-[15px] sm:rounded-none sm:rounded-l-md flex justify-center items-center -mt-7 sm:mt-0 sm:p-[30px]"
              style={{ backgroundColor: job.logoBackground }}
            >
              <img
                className="sm:w-full"
                src={`../${job.logo}`}
                alt={job.company}
              />
            </div>
          </div>
          <div className="text-center sm:w-6/12 sm:text-left sm:px-[40px] sm:pt-0">
            <h1 className="font-semibold lg:text-[24px] text-[20px]">
              {job.company}
            </h1>
            <p className="text-grey-dark text-base">{`${job.company.toLowerCase()}.com`}</p>
          </div>
          <div className="sm:w-4/12 flex justify-end">
            <a target="blank" rel="noopener noreferrer" href={job.website}>
              <Button
                text="Comapany Site"
                width="[147px]"
                className="bg-violet-dark bg-opacity-10 text-violet-dark hover:bg-violet-dark hover:bg-opacity-40 dark:bg-grey-btn dark:text-white dark:hover:bg-grey-hover text-base lg:px-6 md:px-6 px-6"
              />
            </a>
          </div>
        </div>
        <div className="py-[40px] px-[24px] md:p-[48px] bg-white dark:bg-blue-dark mt-6 sm:mt-8 rounded-md max-w-[22rem] sm:max-w-full mx-auto">
          <div className="flex w-full justify-between sm:items-center flex-col sm:flex-row">
            <div>
              <p className="text-grey-dark text-base">
                {job.postedAt}
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
            <a target="blank" rel="noopener noreferrer" href={job.apply}>
              <Button
                text="Apply Now"
                className="bg-violet-dark text-white hover:bg-violet-light w-full sm:w-full mt-[49px] sm:mt-0"
              />
            </a>
          </div>
          <p className="text-base text-grey-dark my-[40px] ">
            {job.description}
          </p>
          <h3 className="font-bold text-[20px]">Requirements</h3>
          <p className="text-base text-grey-dark mt-5">
            {job.requirements.content}
          </p>
          <ul className="my-10 px-3 md:px-[1rem] list-disc text-base text-grey-dark">
            {job.requirements.items.map((item, i) => (
              <li className="mt-[10px] pl-2 md:pl-5" key={i}>
                {item}
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-[20px]">What You Will Do</h3>
          <p className="text-base text-grey-dark pt-5">{job.role.content}</p>
          <ul className="py-5 px-3 md:px-[1rem] list-disc text-base text-grey-dark">
            {job.role.items.map((item, i) => (
              <li className="mt-[10px] pl-2 md:pl-5" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="bottom-0 py-5 bg-white dark:bg-blue-dark">
        <div className="max-w-[730px] md:mx-auto sm:mx-[40px] mx-[24px] flex justify-between sm:items-center flex-col sm:flex-row">
          <div className="hidden sm:flex flex-col">
            <p className="font-bold py-1 text-[20px]">{job.position}</p>
            <p className="text-grey-dark text-base">{job.company}</p>
          </div>
          <a target="blank" rel="noopener noreferrer" href={job.apply}>
            <Button
              text="Apply Now"
              className="bg-violet-dark text-white hover:bg-violet-light w-full"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Jobsjob;
