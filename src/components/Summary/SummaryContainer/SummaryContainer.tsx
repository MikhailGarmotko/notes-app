import styles from "./SummaryContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { createSummaryFromNotes } from "../../../redux/reducers/summaryreducer";
import { SummaryElement } from "./SummaryElement/SummaryElement";

export const SummaryContainer: React.FC = (): JSX.Element => {
  const summary = useSelector((state: RootState) => state.summary);
  return (
    <div className={styles["summary-info-container"]}>
      {summary.map((item) => (
        <SummaryElement {...item} />
      ))}
    </div>
  );
};
