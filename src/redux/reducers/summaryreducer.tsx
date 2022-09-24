import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../data/interfaces";
import { RootState } from "../store";
import {Summary, Summaries} from "../../data/interfaces"
import { images } from "../../data/images"


let initialState: Summaries | [] = [];

export const SummarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    createSummaryFromNotes: (state, action: PayloadAction<any>) => {
      const notes = action.payload;
      const notesMap = new Set(notes.map((i: Note) => i.category));
      let summaryData: any = [];
      notesMap.forEach((i) => {
        let activeCount = 0;
        let archivedCount = 0;
        notes.map(
          (item: Note) =>
            item.category === i
              ? item.status === "active"
                ? activeCount++
                : archivedCount++
              : null,
          0
        );
        summaryData.push({
          picture: images[i as keyof typeof images],
          category: i,
          active: activeCount,
          archivedCount: archivedCount,
          button: archivedCount,
        });
      });
         
      return summaryData;
    },
  },
});

export const { createSummaryFromNotes } = SummarySlice.actions;

export default SummarySlice.reducer;
