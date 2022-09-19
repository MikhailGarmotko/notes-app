import { createSummaryDiv } from "../../components/createSummaryDiv.js";
import { createNoteDiv } from "../../components/createNoteDiv.js";
import { notes } from "../../../data/data.js";

export const deleteNote = (e) => {
  const elem = e.currentTarget.parentElement.children[2].id;
  e.currentTarget.parentElement.remove();
  let indexElem = 0;
  notes.map((i, index) => (i.createdAt === elem ? (indexElem = index) : null));
  notes.splice(indexElem, 1);
  createNoteDiv(notes);
  createSummaryDiv(notes);
  return notes;
};
