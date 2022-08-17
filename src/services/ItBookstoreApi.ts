import axios from "axios";

enum Endpoint {
  BookDetails = "books/",
  New = "new",
  Search = "search/",
}

class ItBookstoreApi {
  private readonly BASE_URL = process.env
    .REACT_APP_BOOKSTORE_API_BASE_URL as string;
  public getByISBN = async (isbn: string) => {
    const response = await axios.get(
      this.BASE_URL + Endpoint.BookDetails + isbn
    );
    return response.data;
  };

  public getNew = async () => {
    const response = await axios.get(this.BASE_URL + Endpoint.New);
    return response.data;
  };

  public getBySearch = async (searchValue: string, page: number) => {
    const url = this.BASE_URL + Endpoint.Search + searchValue + "/" + page;
    const response = await axios.get(url);
    return response.data;
  };
}

export const bookstoreApi = new ItBookstoreApi();
