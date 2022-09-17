import { eventHandler } from "./eventHandlers.js";

export const events = {
  edit: eventHandler.editNote,
  archive: eventHandler.archiveNote,
  delete: eventHandler.deleteNote,
  create: eventHandler.createNote,
};
