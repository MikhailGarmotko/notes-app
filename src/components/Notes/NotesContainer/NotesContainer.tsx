import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import styles  from "./NotesContainer.module.css"
import { NoteElement } from "./Note/NoteElement";
import { createSummaryFromNotes } from "../../../redux/reducers/summaryreducer";
import { getArchiveNotes } from "../../../redux/reducers/archivereducer";

export const NotesContainer: React.FC = ():JSX.Element => {
    const NotesList = useSelector((state: RootState) => state.notes);
    const dispatch = useDispatch();
    useEffect(
      () =>
        void (dispatch(createSummaryFromNotes(NotesList)),
        dispatch(getArchiveNotes(NotesList))),
      [NotesList]
    );
    return (
        <div className={styles["notes-info-container"]}>
            {NotesList.map(note => <NoteElement {...note}  />)}
        </div>
    );
};
