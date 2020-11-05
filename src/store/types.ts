export type Language = {
  id: number;
  name: string;
  done: number,
  toDo: number,
  unverified: number,
};

export type LanguagesState = {
  languages: Language[]
};

