import { ReactComponent as SearchIcon } from "../assets/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../assets/desktop/icon-location.svg";
import { ReactComponent as CheckIcon } from "../assets/desktop/icon-check.svg";
import { ReactComponent as FilterIcon } from "../assets/mobile/icon-filter.svg";
import Button from "./Button";
import { useModal } from "react-hooks-use-modal";

const Search = () => {
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });
  return (
    <div className="min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] bg-white dark:bg-blue-dark rounded-[6px] -mt-10">
      <form className="flex justify-between">
        <div className="flex items-center sm:border-r-[1px] dark:border-grey-btn sm:pl-[24px] lg:pl-[32px] pr-[16px] py-[28px] w-full max-w-[462px]">
          <SearchIcon className="hidden text-violet-dark sm:flex w-[26px]" />
          <input
            className="ml-[24px] sm:ml-[16px] w-full focus:outline-none placeholder-grey-med dark:bg-blue-dark"
            type="text"
            name="filter"
            placeholder="Filter by title, companies, expertise…"
          />
        </div>
        <div className="hidden sm:flex items-center border-r-[1px] dark:border-grey-btn sm:pl-[24px] lg:pl-[32px] pr-[16px] py-[28px] w-full max-w-[299px]">
          <LocationIcon className="w-[22px]" />
          <input
            className="ml-[16px] w-full focus:outline-none placeholder-grey-med dark:bg-blue-dark"
            type="text"
            name="location"
            placeholder="Filter by location…"
          />
        </div>
        <div className="hidden sm:flex justify-between items-center sm:pl-[24px] lg:pl-[32px] pr-[16px] py-[16px] w-full max-w-[345px]">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="full_time"
              className="cursor-pointer opacity-0 absolute h-[24px] w-[24px]"
            />
            <div className="bg-grey-light dark:bg-grey-btn border-0 rounded-sm  h-[24px] w-[24px] flex flex-shrink-0 justify-center items-center mr-[16px]">
              <CheckIcon className="hidden dark:bg-violet-dark dark:w-full dark:h-full dark:items-center dark:p-[5px] dark:rounded-sm" />
            </div>
            <label for="full_time" className="font-semibold">
              Full Time
            </label>
          </div>
          <Button
            width="w-auto"
            text="Search"
            type="submit"
            onClick={() => {
              console.log("Search is clicked");
            }}
          />
        </div>
        <div className="flex sm:hidden items-center p-[16px]">
          <FilterIcon onClick={open} className="cursor-pointer mr-[24px]" />
          <Button
            width="[48px]"
            text={<SearchIcon className="mx-auto" />}
            type="submit"
            onClick={() => {
              console.log("Search is clicked");
            }}
          />
        </div>
        {/* Modal input */}
        <Modal>
          <div className="bg-white dark:bg-blue-dark rounded-[6px] w-[327px] h-[217px]">
            <div className="flex items-center border-b-[1px] dark:border-grey-btn p-[24px] w-[327px]">
              <LocationIcon className="w-[22px]" />
              <input
                className="ml-[16px] w-full focus:outline-none placeholder-grey-med dark:bg-blue-dark"
                type="text"
                name="location"
                placeholder="Filter by location…"
              />
            </div>
            <div className="flex items-center p-[24px]">
              <input
                type="checkbox"
                name="full_time"
                className="cursor-pointer opacity-0 absolute h-[24px] w-[24px]"
              />
              <div className="bg-grey-light dark:bg-grey-btn border-0 rounded-sm  h-[24px] w-[24px] flex flex-shrink-0 justify-center items-center mr-[16px]">
                <CheckIcon className="hidden dark:bg-violet-dark dark:w-full dark:h-full dark:items-center dark:p-[5px] dark:rounded-sm" />
              </div>
              <label for="full_time" className="font-semibold dark:text-white">
                Full Time Only
              </label>
            </div>
            <div className="px-[24px]">
              <Button
                width="[279px] w-full"
                text="Search"
                type="submit"
                onClick={() => {
                  console.log("Search is clicked");
                }}
              />
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
};

export default Search;
