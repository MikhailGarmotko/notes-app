import styles from "./UnArchiveForm.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import { unarchiveNote } from "../../../redux/reducers/notesreducer";

export const UnArchiveForm: React.FC = (): JSX.Element => {
  const location = useLocation();
  const { category } = location.state;
  let archivedNotes = useSelector((state: RootState) => state.archive);
  let archivedNotesByCategory = archivedNotes.filter(
    (i) => i.category === category
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  interface archObject {
    id: string;
  }
  interface archObjects extends Array<archObject> {}

  let initial: archObjects = [];
  const [responseBody, setResponseBody] = useState(initial);
  console.log(responseBody);
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    const checked = event.target.checked;
    console.log(checked, id);
    checked
      ? setResponseBody([...responseBody, { id }])
      : setResponseBody([...responseBody.filter(i => i.id !=id)]);
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
              <label htmlFor={archiveElement.createdAt}>
                {archiveElement.name}
              </label>
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
          disabled={responseBody.length?false:true}
          className={
            Object.keys(responseBody).length
              ? styles["form-button"]
              : styles["form-button-disabled"]
          }
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
