export interface Note {
  id: number;
  name: string;
  category: string;
  content: string;
  createdAt: string;
  dates: string;
  status: string;
}

export interface Notes extends Array<Note>{}
