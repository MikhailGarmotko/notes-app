import styles from "./NotesTitle.module.css";
import { ArchiveOutline, TrashOutline } from "react-ionicons";
import React from "react";

export const NotesTitle: React.FC = (): JSX.Element => {
  return (
    <div className={styles["notes-title"]}>
      <div></div>
      <div>Name</div>
      <div>Created</div>
      <div>Category</div>
      <div>Content</div>
      <div>Dates</div>
      <div></div>
      <ArchiveOutline color={"white"} />
      <TrashOutline color={"white"} />
    </div>
  );
};
