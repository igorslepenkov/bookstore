import axios from "axios";
import path from "path-browserify";
import { IBooksApi } from "../types";

enum Endpoint {
  BookDetails = "books",
  New = "new",
  Search = "search",
}

class ItBookstoreApi {
  private readonly BASE_URL = process.env
    .REACT_APP_BOOKSTORE_API_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  public getByISBN = async (isbn: string) => {
    const url = path.join(Endpoint.BookDetails, isbn);
    const response = await this.API.get(url);
    return response.data;
  };

  public getNew = async () => {
    const response = await this.API.get(Endpoint.New);
    return response.data;
  };

  public getBySearch = async (
    searchValue: string,
    page: number
  ): Promise<IBooksApi> => {
    const url = path.join(Endpoint.Search, searchValue, page.toString());
    const response = await this.API.get(url);
    return response.data;
  };
}

export const bookstoreApi = new ItBookstoreApi();
