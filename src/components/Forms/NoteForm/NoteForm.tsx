import styles from "./NoteForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createNewNote, editNote } from "../../../redux/reducers/notesreducer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FormDataType } from "../../../data/interfaces";

export const Form = (): JSX.Element => {
  const location = useLocation();
  const { action, name, category, content, elementId } = location.state;
  const formData: FormDataType = {
    name: name,
    category: category,
    content: content,
  };
  const [responseBody, setResponseBody] = useState<FormDataType>(formData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };
  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };

  const onSubmitFormHandler = (e: React.BaseSyntheticEvent<any>) => {
    e.preventDefault();
    switch (action) {
      case "Create":
        dispatch(createNewNote(responseBody));
        break;
      case "Edit":
        dispatch(editNote({ responseBody, elementId }));
        break;
    }

    navigate("/");
  };
  return (
    <div className={styles["new-note-form"]}>
      <form className={styles["form"]} onSubmit={onSubmitFormHandler}>
        <h1 className={styles["form-title"]}>{action} note</h1>
        <label className={styles["form-label"]} htmlFor={"category"}>
          Choose category
        </label>
        <select
          className={styles["form-input"]}
          id="category"
          name="category"
          defaultValue={formData.category}
          onChange={(e) => selectChangeHandler(e)}
        >
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
          <option value="Random Thought">Random Thought</option>
        </select>
        <label className={styles["form-label"]} htmlFor="name">
          Input name
        </label>
        <input
          className={styles["form-input"]}
          id="name"
          name="name"
          placeholder={action === "Create" ? formData.name : ""}
          defaultValue={action === "Edit" ? formData.name : ""}
          onChange={(e) => inputChangeHandler(e)}
        />
        <label className={styles["form-label"]} htmlFor="content">
          Input content
        </label>
        <input
          className={styles["form-textarea"]}
          id="content"
          name="content"
          placeholder={action === "Create" ? formData.content : ""}
          defaultValue={action === "Edit" ? formData.content : ""}
          onChange={(e) => inputChangeHandler(e)}
        ></input>
        <button type="submit" id="submit" className={styles["form-button"]}>
          {action} note
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
