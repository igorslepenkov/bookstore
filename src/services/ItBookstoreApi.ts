import axios from "axios";

class ItBookstoreApi {
  private readonly baseUrl = process.env
    .REACT_APP_BOOKSTORE_API_BASE_URL as string;
  getOneByISBN = async (isbn: string) => {
    const response = await axios.get(this.baseUrl + isbn);
    return response.data;
  };
  getAllNew = async () => {
    const response = await axios.get(this.baseUrl + "new");
    return response.data;
  };
  search = async (searchPattern: string, page: number) => {
    const url = this.baseUrl + "search/" + searchPattern + "/" + page;
    const response = await axios.get(url);
    return response.data;
  };
}

export const bookstoreApi = new ItBookstoreApi();
