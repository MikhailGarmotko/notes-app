import { onClickNoteHandler } from "../eventHandlers/onClickNoteHandler.js";

export const createSummaryElement = (type, inner, key) => {
  const div = document.createElement(type);

  div.innerHTML = inner;
  div.id = key;
  div.style.color = "grey";
  if (key === "picture") {
    div.classList.add("rounded-button");
    div.style.color = "white";
  }
  if (key === "button") {
    const button = document.createElement("button");

    inner
      ? (button.classList.add("unarchived"), (button.disabled = false))
      : (button.classList.add("unarchived-disabled"), (button.disabled = true));

    button.innerHTML = "Unarchived";
    button.id = "unarchived";
    button.addEventListener("click", (e) => onClickNoteHandler(e));
    return button;
  }

  return div;
};
