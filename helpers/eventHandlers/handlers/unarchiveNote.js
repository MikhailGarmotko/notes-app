import { notes } from "../../../data/data.js";
import { createNoteDiv } from "../../components/createNoteDiv.js";
import { createSummaryDiv } from "../../components/createSummaryDiv.js";

const unarchiveForm = document.querySelector(".unarchived-form");
const archivesContainer = document.querySelector(".archives-container");
const unArchiveButton = unarchiveForm.querySelector("#submit");
let archivedCategory = "";
let archivedNotes = [];

const getArchivedNotes = () => {
  archivedNotes = notes.filter(
    (i) => i.category === archivedCategory && i.status === "archived"
  );
  return;
};
const createArchivedList = () => {
  const inputClickHandler = (e) => {
    const unArchiveInputs = unarchiveForm.querySelectorAll("input");
    Array.from(unArchiveInputs).some((i) =>
      i.checked
        ? (unArchiveButton.classList.remove("form-button-disabled"),
          (unArchiveButton.disabled = false),
          unArchiveButton.classList.add("form-button"))
        : null
    );
    const anyChecked = Array.from(unArchiveInputs).find(
      (i) => i.checked == true
    );
    if (!anyChecked) {
      unArchiveButton.classList.remove("form-button"),
        (unArchiveButton.disabled = false),
        unArchiveButton.classList.add("form-button-disabled");
    }
  };
  archivedNotes.forEach((i) => {
    const div = document.createElement("div");
    div.style.display = "flex";
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "checkbox";
    input.id = i.createdAt;
    input.addEventListener("click", inputClickHandler);
    label.htmlFor = i.createdAt;
    label.innerText = i.name;
    div.classList.add("archives-container-element");
    div.append(label);
    div.append(input);
    archivesContainer.append(div);
  });
  return;
};

const clearUnarchiveForm = () => {
  unarchiveForm.style.display = "none";
  unArchiveButton.classList.remove("form-buton");
  unArchiveButton.disabled = true;
  unArchiveButton.classList.add("form-button-disabled");
};

const unArchivedSubmitHandler = (e) => {
  e.preventDefault();

  if (e.submitter.id === "cancel") {
    clearUnarchiveForm();
  }
  if (e.submitter.id === "submit") {
    const unArchiveInputs = archivesContainer.querySelectorAll("input");
    const unArchivedMap = Array.from(unArchiveInputs).filter((i) =>
      i.checked ? i.id : null
    );
    unArchivedMap.map((item) =>
      notes.filter((i) =>
        i.createdAt == item.id ? (i.status = "active") : null
      )
    );
    clearUnarchiveForm();
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
  unArchiveButton.disabled = true;
  getArchivedNotes();
  createArchivedList();
  unarchiveForm.addEventListener("submit", unArchivedSubmitHandler);
};
