import { notes } from "../../../data/data.js";
import { createNoteDiv } from "../../components/createNoteDiv.js";
import { createSummaryDiv } from "../../components/createSummaryDiv.js";

const unarchiveForm = document.querySelector(".unarchived-form");
const archivesContainer = document.querySelector(".archives-container");
let archivedCategory = "";
let archivedNotes = [];

const getArchivedNotes = () => {
  archivedNotes = notes.filter(
    (i) => i.category === archivedCategory && i.status === "archived"
  );
  //   console.log(archivedNotes);
  return;
};
const createArchivedList = () => {
  archivedNotes.forEach((i, index) => {
    const div = document.createElement("div");
    div.style.display = "flex";
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "checkbox";
    input.id = i.createdAt;
    label.htmlFor = i.createdAt;
    label.innerText = i.name;
    div.classList.add("archives-container-element");
    div.append(label);
    div.append(input);
    archivesContainer.append(div);
  });
  return;
};

const unArchivedSubmitHandler = (e) => {
  e.preventDefault();

  if (e.submitter.id === "cancel") {
    unarchiveForm.style.display = "none";
  }
  if (e.submitter.id === "submit") {
    const unArchiveInputs = archivesContainer.querySelectorAll("input");
    const unArchivedMap = Array.from(unArchiveInputs).filter((i) =>
      i.checked ? i.id : null
    );
    unArchivedMap.map((item) => notes.filter(i => i.createdAt == item.id?i.status="active":null));
    unarchiveForm.style.display = "none";
  }
  createNoteDiv(notes);
  createSummaryDiv(notes);
  return;
};

export const unarchiveNote = (e) => {
  unarchiveForm.style.display = "flex";
  archivedCategory =
    e.currentTarget.parentElement.children["category"].innerText;
  archivesContainer.innerHTML = "";
  getArchivedNotes();
  createArchivedList();
  unarchiveForm.addEventListener("submit", unArchivedSubmitHandler);
};
