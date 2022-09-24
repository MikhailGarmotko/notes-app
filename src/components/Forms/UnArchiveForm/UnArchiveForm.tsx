import styles from "./UnArchiveForm.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Archives } from "./Archives/Archives";
import { useDispatch, useSelector } from "react-redux";
import { getArchiveNotes } from "../../../redux/reducers/notesreducer";
import { useEffect } from 'react';
import { Notes,Note } from "../../../data/interfaces";
import { RootState } from "../../../redux/store";

export const UnArchiveForm: React.FC = (): JSX.Element => {
  
  const location = useLocation();
  const { category } = location.state;
  let archivedNotes = useSelector((state: RootState) => state.archive);
  let archivedNotesByCategory = archivedNotes.filter(i => i.category === category)
  
  const onSubmitFormHandler = () => { 
    
  }

  return (
    <div className={styles["unarchived-form"]}>
      <form className={styles["form"]} onSubmit={onSubmitFormHandler}>
        <h1>Archived notes</h1>
        <div className={styles["archives-container"]}>
          {archivedNotesByCategory.map(archiveElement => <Archives {...archiveElement} />)}
        </div>
        <button
          type="submit"
          id="submit"
          className={styles["form-button-disabled"]}
        >
          Unarchived
        </button>
        <Link to="/">
          <button type="submit" id="cancel" className={styles["form-button"]}>
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};
