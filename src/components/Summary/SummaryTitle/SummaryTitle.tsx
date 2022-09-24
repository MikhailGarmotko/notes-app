import styles from "./SummaryTitle.module.css";

export const SummaryTitle: React.FC = (): JSX.Element => {
  return (
    <div className={styles["summary-title"]}>
      <div></div>
      <div>Note Category</div>
      <div>Active</div>
      <div>Archived</div>
    </div>
  );
};
