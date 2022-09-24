import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkDataPresence } from "../../helper/checkDataPresense";
import { Note, Notes } from "../../data/interfaces";

const initialState:Notes = [];
export const ArchiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
      getArchiveNotes: (state, action: PayloadAction<any>): Notes => {
          const notes = action.payload;
      return [...notes.filter((i:Note) => i.status === "archived")];
    },
  },
});

export const {

  getArchiveNotes,
} = ArchiveSlice.actions;

export default ArchiveSlice.reducer;
