import { ReactComponent as SearchIcon } from "../assets/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../assets/desktop/icon-location.svg";
import { ReactComponent as CheckIcon } from "../assets/desktop/icon-check.svg";
import { ReactComponent as FilterIcon } from "../assets/mobile/icon-filter.svg";
import Button from "./Button";

const Search = () => {
  return (
    <div className="w-[330px] sm:w-[690px] md:w-[1110px] mx-auto">
      <form className="bg-white">
        <div className="">
          <SearchIcon />
          <input type="text" id="fname" name="fname" value="John" />
        </div>
        <div className="">
          <LocationIcon />
          <input type="text" id="fname" name="fname" value="John" />
        </div>
        <div className="">
          <input type="text" id="fname" name="fname" value="John" />
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
