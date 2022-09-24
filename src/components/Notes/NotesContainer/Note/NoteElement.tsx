import { Note } from "../../../../data/interfaces";
import styles from "./Note.module.css";
import { Link } from "react-router-dom";
import {
  deleteNote,
  archiveNote,
} from "../../../../redux/reducers/notesreducer";
import { useDispatch } from "react-redux";
import { checkDataPresence } from "../../../../helper/checkDataPresense";
import {
  TrashOutline,
  BulbOutline,
  ArchiveOutline,
  PencilOutline,
} from "react-ionicons";
import {} from "react-ionicons";

export const NoteElement = (props: Note): JSX.Element => {
  const { name, category, content, createdAt, status } = props;
  const dispatch = useDispatch();
  const deleteOnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteNote(elementId));
  };
  const archiveOnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(archiveNote(elementId));
  };

  const elementId = createdAt;
  const date = new Date(parseInt(createdAt)).toLocaleDateString("en-US");
  const contentHasDates = checkDataPresence(content);

  return (
    <>
      {status === "active" && (
        <div id={elementId} className={styles["notes-info"]}>
          <BulbOutline color={"grey"} />
          <div>{name}</div>
          <div>{date}</div>
          <div>{category}</div>
          <div className={styles["note-content"]}>{content}</div>
          <div className={styles["note-content"]}>
            {contentHasDates ? contentHasDates.join() : ""}
          </div>
          <Link
            to={"/note-form"}
            state={{
              action: "Edit",
              name: name,
              category: category,
              content: content,
              elementId: elementId,
            }}
          >
            <PencilOutline color={"grey"} />
          </Link>

          <TrashOutline onClick={deleteOnClickHandler} color={"grey"} />
          <ArchiveOutline onClick={archiveOnClickHandler} color={"grey"} />
        </div>
      )}
    </>
  );
};
