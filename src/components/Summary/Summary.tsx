import styles from "./Summary.module.css"
import { SummaryTitle } from "./SummaryTitle/SummaryTitle";
import { SummaryContainer } from "./SummaryContainer/SummaryContainer";

export const Summary:React.FC = ():JSX.Element => { 
    return (
      <div className={styles["summary-container"]}>
        <SummaryTitle />
        <SummaryContainer />
      </div>
    );

}