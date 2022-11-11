import { useGetWorkFromTitleQuery } from "../aniListApi";
import SearchResult from "./SearchResult";
import styles from "./SearchBar.module.scss";
import { useMemo } from "react";

const ResultsContainer = (props) => {
  const { workData } = useGetWorkFromTitleQuery(
    {
      title: "Otherside",
      pageNumber: 0,
    },
    {
      selectFromResult: (response) => ({ workData: response?.data?.entities }),
      // MODIFY LINE BELOW TO FETCH DATA
      skip: true,
    }
  );

  const workEntities = useMemo(
    () => (workData ? Object.values(workData) : []),
    [workData]
  );

  return (
    <ul
      className={`col-8 ${styles.resultsContainer} ${
        props.isActive ? styles.active : ""
      }`}
    >
      {workEntities.length != 0
        ? workEntities.map((data) => (
            <SearchResult key={data.id} workData={data} />
          ))
        : null}
    </ul>
  );
};

export default ResultsContainer;
