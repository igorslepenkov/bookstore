import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import { IBook, IBooksApi } from "../../types";
import { bookstoreApi } from "../../services";
import { AxiosError } from "axios";

type InitialState = {
  searchBooks: IBook[] | null;
  error: string | null;
  isLoading: boolean;
  page: number | null;
  total: number | null;
};

type SearchConfig = {
  searchValue: string;
  page: number;
};

const initialState: InitialState = {
  searchBooks: null,
  error: null,
  isLoading: false,
  page: null,
  total: null,
};

const fetchBooksBySearch = createAsyncThunk<
  IBooksApi,
  SearchConfig,
  { rejectValue: string }
>(
  "searchBooks/fetchBooksBySearch",
  async ({ searchValue, page }, { rejectWithValue }) => {
    try {
      const response = await bookstoreApi.getBySearch(searchValue, page);
      return response;
    } catch (err) {
      const axiosError = err as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  }
);

export const searchBooksSlice = createSlice({
  name: "searchBooks",
  initialState,
  reducers: {
    incrementPage: (state) => {
      if (
        state.page !== null &&
        state.total &&
        state.page < Math.floor(state.total / 10)
      ) {
        state.page += 1;
      }
    },
    decrementPage: (state) => {
      if (state.page && state.page > 1) {
        state.page -= 1;
      }
    },
    clearSearch: (state) => {
      state.error = null;
      state.isLoading = false;
      state.page = null;
      state.total = null;
      state.searchBooks = null;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksBySearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchBooks = action.payload.books;
      state.page = Number(action.payload.page);
      state.total = Number(action.payload.total);
    });

    builder.addCase(fetchBooksBySearch.rejected, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload;
      }
    });

    builder.addMatcher(isPending(), (state) => {
      state.error = "";
      state.isLoading = true;
    });
  },
});

export const { incrementPage, decrementPage, clearSearch, setPage } =
  searchBooksSlice.actions;
export { fetchBooksBySearch };
export default searchBooksSlice.reducer;
