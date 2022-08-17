export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface IBooksApi {
  total: string;
  page: string;
  books: IBook[];
}

export interface INewBooksApi {
  total: string;
  books: IBook[];
}

export interface IBookApiDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: {
    [chapter: string]: string;
  };
}
