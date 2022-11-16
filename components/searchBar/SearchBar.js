import { useRef, useState } from "react";
import styles from "./SearchBar.module.scss";
import ResultsContainer from "./ResultsContainer";
import FilterForm from "../filterForm/FilterForm";

const formatTypes = [
  "ALL",
  "MANGA",
  "NOVEL",
  "ONE_SHOT",
  "TV",
  "TV_SHORT",
  "MOVIE",
  "SPECIAL",
  "OVA",
  "ONA",
];

const SearchBar = () => {
  const [showBottomBorder, setShowBottomBorder] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchFieldRef = useRef(null);
  const searchOptionsRef = useRef(null);
  const [searchOptions, setSearchOptions] = useState(formatTypes);
  const onSearch = () => {
    setSearchText(searchFieldRef.current.value);
    setSearchOptions(
      (!searchOptionsRef.current || searchOptionsRef.current.length == 0
        ? formatTypes
        : searchOptionsRef
      ).filter((val) => val != "ALL")
    );
  };

  return (
    <>
      <div className="col-2"></div>
      <FilterForm
        options={formatTypes}
        onSelect={(selected, currentSelected, options) => {
          if (selected != "ALL") {
            return [...currentSelected, selected];
          } else {
            return [...options];
          }
        }}
        onDeselect={(selected, currentSelected, options) => {
          if (selected != "ALL") {
            return currentSelected.filter((x) => x != selected && x != "ALL");
          } else {
            return [];
          }
        }}
        setValue={(value) => (searchOptionsRef.current = value)}
        displayFunc={(text) => text.split("_").join(" ")}
      />
      <div className="col-2"></div>
      <div className="col-2"></div>
      <div
        className={`col-8 ${styles.searchBarWrapper} ${
          searchText.length > 0 ? styles.noBottom : ""
        }`}
      >
        <input
          type="text"
          defaultValue=""
          className={styles.searchInput}
          placeholder="Ex. Mieruko-chan"
          ref={searchFieldRef}
          onKeyDown={(e) => (e.code == "Enter" ? onSearch() : "")}
          onFocus={() => setShowBottomBorder(true)}
          onBlur={() => setShowBottomBorder(false)}
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search clickable"
          onClick={onSearch}
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <div className="col-2"></div>
      <div className="col-2"></div>
      {searchText.length > 0 ? (
        <ResultsContainer
          isActive={showBottomBorder}
          workName={searchText}
          workTypes={searchOptions}
        />
      ) : null}
      <div className="col-2"></div>
    </>
  );
};

export default SearchBar;
