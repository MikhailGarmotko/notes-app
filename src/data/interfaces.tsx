export interface FormDataType {
  name: string;
  category: string;
  content: string;
}

export interface ArchiveType {
  id: string;
}

export interface Summary {
  picture: string;
  category: string;
  active: number;
  archivedCount: number;
  button: number;
}

export interface Note {
  picture: string;
  name: string;
  createdAt: string;
  category: string;
  content: string;
  dates: string;
  status: string;
}

export interface Notes extends Array<Note> {}

export interface Summaries extends Array<Summary> {}
