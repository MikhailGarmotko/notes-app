import { notes } from "../../../data/data.js";
export const deleteNote = (e) => {
  const elem = e.currentTarget.parentElement.children[2].id;
  e.currentTarget.parentElement.remove();
  let indexElem = 0;
  notes.map((i, index) => (i.createdAt === elem ? (indexElem = index) : null));
  ;
  return [...notes.splice(indexElem, 1)];
};
