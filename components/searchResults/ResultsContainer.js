import { useGetWorkFromTitleQuery } from "../aniListApi";
import SearchResult from "./SearchResult";

const ResultsContainer = () => {
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
    <ul className="col-6">
      <SearchResult />
    </ul>
  );
};

export default ResultsContainer;
