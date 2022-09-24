import { configureStore } from "@reduxjs/toolkit";
import archiveReducer from "./reducers/archivereducer";
import notesReducer from "./reducers/notesreducer"
import summaryReducer from "./reducers/summaryreducer"

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    summary: summaryReducer,
    archive:archiveReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch