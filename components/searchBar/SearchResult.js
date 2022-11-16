import Image from "next/image";
import { useMemo } from "react";
import LinkSvg from "../svg/LinkSvg";
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
              <LinkSvg />
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
                    {linkData.language ? (
                      <span> - {linkData.language}</span>
                    ) : null}{" "}
                    <LinkSvg />
                  </a>
                  <div className="d-sm-block col-md-1"></div>
                </>
              ))
            : null}
        </div>
      </div>
      <p className="col-12">{data.description}</p>
      <div className="row col-12">
        <div className="d-block col-1 col-sm-1"></div>
        <a
          href="https://learnnatively.com/"
          className="main-button col-12 col-sm-4"
          target="_blank"
          rel="noreferrer"
        >
          Natively <LinkSvg />
        </a>
        <div className="d-block col-1 col-sm-2"></div>
        <a
          href="https://jpdb.io/"
          className="main-button col-12 col-sm-4"
          target="_blank"
          rel="noreferrer"
        >
          JPDB <LinkSvg />
        </a>
        <div className="d-block col-1 col-sm-1"></div>
      </div>
    </li>
  );
};

export default SearchResult;
