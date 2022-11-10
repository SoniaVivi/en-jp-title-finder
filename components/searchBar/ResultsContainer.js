import { useGetWorkFromTitleQuery } from "../aniListApi";
import SearchResult from "./SearchResult";
import styles from "./SearchBar.module.scss";

const ResultsContainer = (props) => {
  // PLACEHOLDER VALUES
  // MODIFY LATER FOR CORRECT FUNCTIONALITY
  const workData = useGetWorkFromTitleQuery(
    {
      title: "Otherside",
      pageNumber: 0,
    },
    { selectFromResult: (response) => ({ ...response?.data?.ids }), skip: true }
  );

  return (
    <ul
      className={`col-8 ${styles.resultsContainer} ${
        props.isActive ? styles.active : ""
      }`}
    >
      <SearchResult />
      <SearchResult />
    </ul>
  );
};

export default ResultsContainer;
