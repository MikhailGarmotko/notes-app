import styles from "./UnArchiveForm.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useState } from 'react';
import { unarchiveNote } from "../../../redux/reducers/notesreducer";
import { ArchiveType } from "../../../data/interfaces";

export const UnArchiveForm: React.FC = (): JSX.Element => {
  
  const location = useLocation();
  const { category } = location.state;
  let archivedNotes = useSelector((state: RootState) => state.archive);
  let archivedNotesByCategory = archivedNotes.filter(i => i.category === category)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [responseBody, setResponseBody] = useState({});
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    setResponseBody({ ...responseBody, [id]:id });
  };
  const onSubmitFormHandler = (e: React.BaseSyntheticEvent<any>) => {
    e.preventDefault();
    dispatch(unarchiveNote(responseBody));
    navigate("/");
  };


  return (
    <div className={styles["unarchived-form"]}>
      <form className={styles["form"]} onSubmit={onSubmitFormHandler}>
        <h1>Archived notes</h1>
        <div className={styles["archives-container"]}>
          {archivedNotesByCategory.map((archiveElement) => (
            <div className={styles["archives-container-element"]}>
              <label htmlFor={archiveElement.createdAt}>{archiveElement.name}</label>
              <input
                id={archiveElement.createdAt}
                value={archiveElement.name}
                type="checkbox"
                onChange={(e) => inputChangeHandler(e)}
              ></input>
            </div>
          ))}
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
