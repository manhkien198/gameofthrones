export interface ValueLogin {
  username: string;
  password: string;
}
export interface BooksDeclare {
  url: string;
  name: string;
  isbn: string;
  authors: string;
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}
export interface Desc {
  title: string;
  content: string;
}
