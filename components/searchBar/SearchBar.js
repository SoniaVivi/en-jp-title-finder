import { useState } from "react";
import styles from "./SearchBar.module.scss";
import ResultsContainer from "./ResultsContainer";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("Otherside Picnic");
  return (
    <>
      <div className="col-3"></div>
      <div className={`col-6 ${styles.searchBarWrapper}`}>
        <input
          type="text"
          class={styles.searchBar}
          placeholder="Ex. Mieruko-chan"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search clickable"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <div className="col-3"></div>
      <div className="col-3"></div>
      <ResultsContainer />
      <div className="col-3"></div>
    </>
  );
};

export default SearchBar;
