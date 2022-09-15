const editNote = () => {
  alert("edit");
};
const archiveNote = () => {
  alert("archive");
};
const deleteNote = () => {
  alert("delete");
};
const createNote = () => {
  alert("create");
};

export const events = {
  edit: editNote,
  archive: archiveNote,
  delete: deleteNote,
  create: createNote,
};
