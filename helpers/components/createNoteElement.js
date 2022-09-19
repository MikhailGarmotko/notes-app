import { onClickNoteHandler } from "../eventHandlers/onClickNoteHandler.js";

export const createNoteElement = (type, inner, key, parentElement) => {
  const div = document.createElement(type);

  div.innerHTML = inner;
  div.style.color = "grey";
  div.id = key;
  if (key === "picture") {
    div.classList.add("rounded-button");
    div.style.color = "white";
  }

  if (key === "status") {
    div.style.display = "none";
  }
  if (key === "status" && inner === "archived") {
    parentElement.style.display = "none";
  }

  if (key === "createdAt") {
    div.id = inner;
    const date = new Date(parseInt(inner)).toLocaleDateString("en-US");

    div.innerText = date;
  }
  if (key === "name" && key === "dates") {
    div.innerText = inner.length < 14 ? inner : inner.substr(0, 14) + "...";
    div.id = key;
  }

  if (key === "content") {
    div.innerText = inner.substr(0, 14) + "...";
    div.id = key;
  }
  if (key === "archive" || key === "delete" || key === "edit") {
    div.classList.add("notes-info-hover");
    div.id = key;
    div.addEventListener("click", (e) => onClickNoteHandler(e));
  }
  return div;
};
