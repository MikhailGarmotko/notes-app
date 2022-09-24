import { Summary } from "../../../../data/interfaces";
import styles from "./SummaryElement.module.css";
import { Link } from "react-router-dom";

export const SummaryElement = (props:Summary): JSX.Element => {
    const { picture, category, active, archivedCount, button } = props;
    return (
      <div className={styles["summary-info"]}>
        <div></div>
        <div>{category}</div>
        <div>{active}</div>
        <div>{archivedCount}</div>
        <Link to={"/unarchive"} state={{ category: category }}>
          <button
            className={!archivedCount?styles["disabled-button"]:["unarchived"]}
            disabled={archivedCount?false:true}
          >
            Unarchived
          </button>
        </Link>
      </div>
    );
}