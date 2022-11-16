import { useState } from "react";
import styles from "./FilterForm.module.scss";

const FilterForm = (props) => {
  const [selectedOptions, setSelectedOptions] = useState(
    props.defaultValue ?? props.options
  );
  const buttonClassName = `col-12 col-sm-4 col-md-5 col-lg-3 col-xl-2 main-button text-center ${styles.option}`;
  const whiteSpaceClassName = "d-sm-block col-sm-2 col-md-1 col-lg-1";

  return (
    <div className="row col-8">
      <button
        className={buttonClassName}
        onClick={() => {
          let temp =
            selectedOptions.length == props.options.length
              ? props.deselectAll()
              : props.selectAll();
          props.setValue(temp);
          setSelectedOptions(temp);
        }}
      >
        {selectedOptions.length == props.options.length ? "NONE" : "ALL"}
      </button>
      <div className={whiteSpaceClassName}></div>
      {props.options.map((option) => (
        <>
          <button
            className={`${buttonClassName} ${
              selectedOptions.indexOf(option) != -1 ? styles.selected : ""
            }`}
            key={option}
            onClick={() => {
              let temp = null;
              if (selectedOptions.indexOf(option) != -1) {
                temp = props.onDeselect(option, selectedOptions);
              } else {
                temp = props.onSelect(option, selectedOptions);
              }
              props.setValue(temp);
              setSelectedOptions(temp);
            }}
          >
            {props.displayFunc(option)}
          </button>
          <div className={whiteSpaceClassName}></div>
        </>
      ))}
    </div>
  );
};

export default FilterForm;
