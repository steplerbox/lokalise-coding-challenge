export type Language = {
  id: string;
  name: string;
  done: number,
  toDo: number,
  unverified: number,
};

export type LanguagesState = {
  languages: Language[]
};

