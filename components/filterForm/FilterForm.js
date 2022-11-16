import { useState } from "react";
import styles from "./FilterForm.module.scss";

const FilterForm = (props) => {
  const [selectedOptions, setSelectedOptions] = useState(
    props.defaultValue ?? props.options
  );

  return (
    <div className="row col-8">
      {props.options.map((option) => (
        <>
          <button
            className={`col-12 col-sm-4 col-md-5 col-lg-3 col-xl-2 main-button text-center ${
              styles.option
            } ${selectedOptions.indexOf(option) != -1 ? styles.selected : ""}`}
            key={option}
            onClick={() => {
              let temp = null;
              if (selectedOptions.indexOf(option) != -1) {
                temp = props.onDeselect(option, selectedOptions, props.options);
              } else {
                temp = props.onSelect(option, selectedOptions, props.options);
              }
              props.setValue(temp);
              setSelectedOptions(temp);
            }}
          >
            {props.displayFunc(option)}
          </button>
          <div className="d-sm-block col-sm-2 col-md-1 col-lg-1"></div>
        </>
      ))}
    </div>
  );
};

export default FilterForm;
