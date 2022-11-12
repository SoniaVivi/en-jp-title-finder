import Image from "next/image";
import { useMemo } from "react";
import styles from "./SearchBar.module.scss";

const SearchResult = (props) => {
  const data = props.workData;
  const titles = useMemo(
    () => [data.native, data.romaji, data.english],
    [data]
  );

  return (
    <li className="row">
      <div className="col-3 row">
        <div>
          <Image
            src={data.cover}
            alt="Work cover"
            width={133}
            height={189}
            className={styles.cover}
          />
        </div>
        <div className="col-12 row">
          <span className={`col-6 text-center ${styles.volumes}`}>
            Volumes {data.volumes || "?"}
          </span>
          <span className={`col-6 text-center ${styles.chapters}`}>
            Chapters {data.chapters || "?"}
          </span>
        </div>
      </div>
      <div className="col-9">
        <div className="col-12 row">
          {titles.map((title) => (
            <>
              <button
                className="col-3 main-button"
                onClick={() => navigator.clipboard.writeText(title)}
              >
                Copy
              </button>
              <span className="col-9">{title}</span>
            </>
          ))}
        </div>
      </div>
      <p className="col-12">{data.description}</p>
    </li>
  );
};

export default SearchResult;
