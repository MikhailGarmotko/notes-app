import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notes } from "../../data/data";
import { checkDataPresence } from "../../helper/checkDataPresense";
import { Note, Notes } from "../../data/interfaces";

const initialState = notes;
export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNewNote: (state, action: PayloadAction<any>) => {
      const { name, category, content } = action.payload;
      const picture = "";
      const createdAt = Date.now().toString();
      const status = "active";
      const dates = "";
      return [
        ...state,
        { picture, name, category, content, createdAt, dates, status },
      ];
    },
    editNote: (state, action: PayloadAction<any>): void => {
      const { name, category, content } = action.payload.responseBody;
      const { elementId } = action.payload;
      const contentHasDates = checkDataPresence(content);

      state = [
        ...state.filter((i: Note) =>
          i.createdAt == elementId
            ? ((i.name = name),
              (i.category = category),
              (i.content = content),
              (i.picture = ""),
              (i.dates = contentHasDates ? contentHasDates.join() : ""),
              (i.status = "active"))
            : null
        ),
      ];
    },
    deleteNote: (state, action: PayloadAction<any>): void => {
      const elementId = action.payload;
      let indexElem = 0;
      state.map((i: Note, index: number) =>
        i.createdAt === elementId ? (indexElem = index) : null
      );
      state.splice(indexElem, 1);
    },
    archiveNote: (state, action: PayloadAction<any>): void => {
      const elementId = action.payload;
      state.forEach((i: Note) =>
        i.createdAt == elementId ? (i.status = "archived") : null
      );
    },
    unarchiveNote: (state, action: PayloadAction<any>) => {},
    getArchiveNotes: (state, action: PayloadAction<any>): any => {
      const archivedCategory = action.payload;
      const archivedNotes: Notes = state.filter(
        (i: Note) => i.category === archivedCategory && i.status === "archived"
      );
      state = archivedNotes;
      return state;
    },
  },
});


export const { createNewNote, editNote, deleteNote, archiveNote, getArchiveNotes } =
  NotesSlice.actions;

export default NotesSlice.reducer;
