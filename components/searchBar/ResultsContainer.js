import { useGetWorkFromTitleQuery } from "../aniListApi";
import SearchResult from "./SearchResult";
import styles from "./SearchBar.module.scss";
import { useMemo } from "react";

const ResultsContainer = (props) => {
  const { workData, workIds } = useGetWorkFromTitleQuery(
    {
      title: props.workName,
      pageNumber: props.pageNumber,
    },
    {
      selectFromResult: (response) => ({
        workIds: response?.data?.ids,
        workData: response?.data?.entities,
      }),
      skip: props.workName <= 0,
    }
  );

  return (
    <ul
      className={`col-8 ${styles.resultsContainer} ${
        props.isActive ? styles.active : ""
      }`}
    >
      {workIds && workIds.length != 0
        ? workIds.map((id) => <SearchResult key={id} workData={workData[id]} />)
        : null}
    </ul>
  );
};

export default ResultsContainer;
