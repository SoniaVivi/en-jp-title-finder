import Image from "next/image";
import testImage from "../../assets/testCover.jpg";
import styles from "./SearchBar.module.scss";

const SearchResult = () => {
  return (
    <li className="row">
      <div className="col-3 row">
        <div>
          <Image
            src={testImage}
            alt="Work cover"
            width={133}
            height={189}
            className={styles.cover}
          />
        </div>
        <div className="col-12 row">
          <span className={`col-6 text-center ${styles.volumes}`}>
            Volumes 7
          </span>
          <span className={`col-6 text-center ${styles.chapters}`}>
            Chapters 4
          </span>
        </div>
      </div>
      <div className="col-9">
        <div className="col-12 row">
          <button className="col-3 main-button">dolor</button>
          <span className="col-9">家ワヲネソ場現</span>
          <button className="col-3 main-button">dolor</button>
          <span className="col-9">Ie wawoneso ba gen</span>
          <button className="col-3 main-button">dolor</button>
          <span className="col-9">
            Lorem ipsum dolor sit amet, ne mei vocibus adversarium, autem
            legimus quo ne, iusto democritum quo ex. Quas augue ne vis, id eos
            facilis percipit mediocrem, malorum evertitur cotidieque te eos. Mea
            corpora delicata cotidieque ut. Altera graeco alienum ei pro
          </span>
        </div>
      </div>
      <p className="col-12">
        Lorem ipsum dolor sit amet, laudem graece recusabo has ne, ne alii
        homero admodum vel. Vim id intellegam complectitur, dignissim reprimique
        ad est. Dolorum utroque et mea. Oportere torquatos an has. An cum
        commodo vocibus, magna affert tincidunt ea mei, integre ullamcorper est
        ut.
      </p>
    </li>
  );
};

export default SearchResult;
