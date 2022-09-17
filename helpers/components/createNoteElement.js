import { onClickNoteHandler } from "../eventHandlers/onClickNoteHandler.js";

export const createNoteElement = (type, inner, key) => {
  const div = document.createElement(type);

  div.innerHTML = inner;
  div.style.color = "grey";
  if (key === "picture") {
    div.classList.add("rounded-button");
    div.style.color = "white";
  }
  if (key === "createdAt") {
    div.id = inner;
    const date = new Date(parseInt(inner) * 1000).toGMTString().substr(0,10);

    div.innerText = date.substr(0, 20) + "...";
 
  }
  if (key === "content") {
    div.innerText = inner.substr(0, 14) + "...";
  }
  if (key === "archive" || key === "delete" || key === "edit") {
    div.classList.add("notes-info-hover");
    div.id = key;
    div.addEventListener("click", (e) => onClickNoteHandler(e));
  }
  return div;
};
