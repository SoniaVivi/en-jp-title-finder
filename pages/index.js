import styles from "../styles/Home.module.scss";
import SearchResultContainer from "../components/searchResults/SearchResultContainer";
import localFont from "@next/font/local";

const exoFont = localFont({ src: "../fonts/exo-regular.otf" });

export default function Home() {
  return (
    <div
      className={`container-lg min-vh-100 position-relative ${styles.searchWrapper}`}
    >
      <div className={`${styles.searchContainer} row position-absolute w-100`}>
        <div className="col-3"></div>
        <h1 className={`col-6 ${exoFont.className}`}>
          English to Japanese Title Converter
        </h1>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <SearchResultContainer />
        <div className="col-3"></div>
      </div>
    </div>
  );
}
