import { onClickNoteHandler } from "./onClickNoteHandler.js";

export const createNoteElement = (type, inner, key) => {
  const div = document.createElement(type);

  div.innerHTML = inner;
  div.style.color = "grey";
  if (key === "picture") {
    div.classList.add("rounded-button");
    div.style.color = "white";
  }
  if (key === "content") {
    div.innerText = inner.substr(0, 14) + "...";
  }
  if (key === "archive" || key === "delete" || key === "edit") {
      div.classList.add("notes-info-hover");
      div.id = key;
    div.addEventListener("click", (e) => onClickNoteHandler(e))
  }
  return div;
};
