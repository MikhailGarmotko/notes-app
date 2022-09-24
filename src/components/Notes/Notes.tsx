import React from "react";
import styles from "./Notes.module.css";
import { NotesTitle } from "./NotesTitle/NotesTitle";
import { NotesContainer } from "./NotesContainer/NotesContainer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../Forms/NoteForm/NoteForm";

export const Notes:React.FC = (props:any): JSX.Element => {


  return (
    <div>
      <div className={styles["notes-container"]}>
        <NotesTitle />
        <NotesContainer />
        <Link to={"/note-form"} state={{ action: "Create", name:"Put name...", category:"Idea", content:"Put content..." }} className={styles["create-note-button-container"]}>
          <button
            id="create"
            className={styles["create-note-button"]}
          >
            Create note
          </button>
        </Link>
      </div>
    </div>
  );
};
