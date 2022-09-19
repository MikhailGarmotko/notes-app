import { events } from "./events.js";

export const onClickNoteHandler = (e) => {
  const action = e.currentTarget.id;
  events[action](e);
};
