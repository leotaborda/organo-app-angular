export interface IBook {
  title: string,
  author: string,
  image: string,
  favorite: boolean,
  genre: IGenre
}

export interface IGenre {
  id: string,
  value: string,
  books: IBook[]
}
