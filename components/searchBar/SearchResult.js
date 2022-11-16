import Image from "next/image";
import { useMemo } from "react";
import styles from "./SearchBar.module.scss";

const SearchResult = (props) => {
  const data = props.workData;
  const titles = useMemo(
    () =>
      [data.native, data.romaji, data.english, ...data.synonyms].filter(
        (title) => title && title.length > 0
      ),
    [data]
  );

  return (
    <li className="row">
      <div className="col-12 col-sm-6 col-md-4 col-xl-3 row">
        <div className="col-12 flex">
          <Image
            src={data.cover}
            alt="Work cover"
            width={133}
            height={189}
            className={styles.cover}
          />
        </div>
        <div className="col-12">
          <div className="row">
            <span className={`col-6 text-center ${styles.volumes}`}>
              Volumes {data.volumes || "?"}
            </span>
            <span className={`col-6 text-center ${styles.chapters}`}>
              Chapters {data.chapters || "?"}
            </span>
            <div className="d-sm-block col-md-1"></div>
            <a
              href={data.siteUrl}
              className={`col-12 col-md-9 main-button text-center ${styles.aniListLink}`}
              target="_blank"
              rel="noreferrer"
            >
              AniList
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icon link"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </a>
            <div className="d-sm-block col-md-1"></div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-8 col-xl-9">
        <div className="col-12 row">
          {titles.map((title, i) => (
            <>
              <button
                className="col-3 col-sm-4 col-md-3 main-button"
                onClick={() => navigator.clipboard.writeText(title)}
              >
                Copy
              </button>
              <span
                className={`col-9 col-sm-8 col-md-9${
                  i == 0 ? " fw-semibold fs-5" : ""
                }`}
              >
                {title}
              </span>
            </>
          ))}
          {data.externalLinks.length > 0
            ? data.externalLinks.map((linkData, i) => (
                <>
                  <a
                    href={linkData.url}
                    key={i}
                    className="col-12 col-md-5 main-button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{linkData.site}</span>
                    <span> - {linkData.language}</span>
                  </a>
                  <div className="d-sm-block col-md-1"></div>
                </>
              ))
            : null}
        </div>
      </div>
      <p className="col-12">{data.description}</p>
    </li>
  );
};

export default SearchResult;
