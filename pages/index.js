import styles from "../styles/Home.module.scss";
import SearchBar from "../components/searchBar/SearchBar";
import localFont from "@next/font/local";
import Arrow from "../components/arrow/Arrow";
import { useRef } from "react";

const exoFont = localFont({ src: "../fonts/exo-regular.otf" });

export default function Home() {
  const titleRef = useRef();

  return (
    <>
      <div
        className={`container-lg min-vh-100 position-relative ${styles.searchWrapper}`}
      >
        <div
          className={`${styles.searchContainer} row position-absolute w-100`}
        >
          <div className="col-2"></div>
          <h1
            className={`col-8 ${exoFont.className} text-center `}
            ref={titleRef}
          >
            English to Japanese Title Converter
          </h1>
          <div className="col-2"></div>
          <SearchBar />
        </div>
      </div>
      <div
        className={`position-fixed ${styles.goToTop} flex justify-content-end`}
      >
        <Arrow
          direction="top"
          onClick={() => titleRef.current.scrollIntoView(true)}
        />
      </div>
    </>
  );
}
