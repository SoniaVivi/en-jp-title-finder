import { useGetWorkFromTitleQuery } from "../aniListApi";
import SearchResult from "./SearchResult";
import styles from "./SearchBar.module.scss";
import Arrow from "../arrow/Arrow";
import { useEffect, useMemo, useState } from "react";

const ResultsContainer = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { workData, workIds, isFetching } = useGetWorkFromTitleQuery(
    {
      title: props.workName,
      pageNumber: pageNumber,
      workTypes: props.workTypes,
    },
    {
      selectFromResult: (response) => ({
        workIds: response?.data?.ids,
        workData: response?.data?.entities,
        isFetching: response.isFetching,
      }),
      skip: props.workName <= 0,
    }
  );
  const modifyPageNumber = useMemo(
    () => (action) =>
      setPageNumber((value) => {
        if (!workIds || workIds.length == 0) {
          return value;
        } else if (value > 1 && action == "decrement") {
          return value - 1;
        } else if (
          workIds.length &&
          workData[workIds[0]].pageInfo.hasNextPage &&
          action == "increment"
        ) {
          return value + 1;
        }
        return value;
      }),
    [workIds, workData]
  );

  const decrementPage = useMemo(
    () =>
      typeof modifyPageNumber == "function"
        ? () => modifyPageNumber("decrement")
        : () => {},
    [modifyPageNumber]
  );
  const incrementPage = useMemo(
    () =>
      typeof modifyPageNumber == "function"
        ? () => modifyPageNumber("increment")
        : () => {},
    [modifyPageNumber]
  );

  useEffect(() => setPageNumber(1), [props.workName]);

  if (isFetching) {
    return (
      <ul
        className={`col-8 ${styles.resultsContainer} ${
          props.isActive ? styles.active : ""
        } justify-content-center flex`}
      >
        <div className={styles.circle}></div>
      </ul>
    );
  }

  return (
    <ul
      className={`col-8 ${styles.resultsContainer} ${
        props.isActive ? styles.active : ""
      }`}
    >
      {workIds && workIds.length != 0 ? (
        <>
          <div className={`col-12 ${styles.pageButtonsContainer}`}>
            <span>Page</span>
            <Arrow direction="left" onClick={decrementPage} />
            <span>{pageNumber}</span>
            <Arrow direction="right" onClick={incrementPage} />
          </div>
          {workIds.map((id) => (
            <SearchResult key={id} workData={workData[id]} />
          ))}
        </>
      ) : null}
    </ul>
  );
};

export default ResultsContainer;
