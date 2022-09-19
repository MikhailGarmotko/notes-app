import { createNoteDiv } from "./helpers/components/createNoteDiv.js";
import { notes } from "./data/data.js";
import { createSummaryDiv } from "./helpers/components/createSummaryDiv.js";
try {
  createNoteDiv(notes);
  createSummaryDiv(notes);
} catch (error) {
  alert(error);
}
