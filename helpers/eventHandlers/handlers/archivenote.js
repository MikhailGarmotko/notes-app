import { notes } from "../../../data/data.js";
import { createSummaryDiv } from "../../components/createSummaryDiv.js";
import { createNoteDiv } from "../../components/createNoteDiv.js";
export const archiveNote = (e) => {
  const elemId = e.currentTarget.parentElement.children[2].id.toString();

  notes.forEach((i) =>
    i.createdAt == elemId ? (i.status = "archived") : null
  );

  createNoteDiv(notes);
  createSummaryDiv(notes);
};
