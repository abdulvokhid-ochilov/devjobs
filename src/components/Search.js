import { ReactComponent as SearchIcon } from "../assets/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../assets/desktop/icon-location.svg";
import { ReactComponent as CheckIcon } from "../assets/desktop/icon-check.svg";
import { ReactComponent as FilterIcon } from "../assets/mobile/icon-filter.svg";
import Button from "./Button";

const Search = () => {
  return (
    <div className="w-[330px] sm:w-[690px] md:w-[1110px] mx-auto bg-white rounded-[6px] -mt-10">
      <form className="flex justify-between">
        <div className="flex items-center border-r-[1px] border-r-grey-light pl-[32px] pr-[16px] py-[28px] w-[462px]">
          <SearchIcon className="w-[26px]" />
          <input
            className="ml-[16px] w-full focus:outline-none placeholder-grey-med"
            type="text"
            name="filter"
            value=""
            placeholder="Filter by title, companies, expertise…"
          />
        </div>
        <div className="flex items-center border-r-[1px] border-r-grey-light pl-[32px] pr-[16px] py-[28px] w-[299px]">
          <LocationIcon className="w-[22px]" />
          <input
            className="ml-[16px] w-full focus:outline-none placeholder-grey-med"
            type="text"
            name="location"
            value=""
            placeholder="Filter by location…"
          />
        </div>
        <div className="flex justify-between items-center pl-[32px] pr-[16px] py-[16px] w-[345px]">
          <div class="flex items-center">
            <input
              type="checkbox"
              name="full_time"
              value=""
              class="cursor-pointer opacity-0 absolute h-[24px] w-[24px]"
            />
            <div class="bg-grey-light border-0 rounded-sm  h-[24px] w-[24px] flex flex-shrink-0 justify-center items-center mr-[16px]">
              <CheckIcon class="hidden" />
            </div>
            <label for="full_time">Full Time Only</label>
          </div>
          <Button
            text="Search"
            type="submit"
            onClick={() => {
              console.log("Search is clicked");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
