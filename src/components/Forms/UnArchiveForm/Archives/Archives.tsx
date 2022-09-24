import styles from "./Archives.module.css";
import { Note } from "../../../../data/interfaces";
import { useState } from "react";
import { ArchiveType } from "../../../../data/interfaces";
import { useDispatch } from "react-redux";
import { unarchiveNote } from "../../../../redux/reducers/notesreducer";
import { useNavigate } from "react-router-dom";

export const Archives = (props: Note): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const formData: ArchiveType = {
    id: props.name,
  };
  const [responseBody, setResponseBody] = useState(formData);
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setResponseBody({ ...responseBody, id: value });
  };
  const onSubmitFormHandler = (e: React.BaseSyntheticEvent<any>) => {
    e.preventDefault();
    dispatch(unarchiveNote(responseBody));
    navigate("/");
  };

  return (
    <div className={styles["archives-container-element"]}>
        <label htmlFor="check">{props.name}</label>
        <input
          id="check"
          value={props.createdAt}
          type="checkbox"
          onChange={(e) => inputChangeHandler(e)}
        ></input>
    </div>
  );
};
