import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { IBookApiDetails } from "../../types";
import { bookstoreApi } from "../../services";
import { AxiosError } from "axios";

type InitialState = {
  book: IBookApiDetails;
  error: string | null;
  isLoading: boolean;
};

const initialState: InitialState = {
  book: {
    language: "",
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: "",
    pdf: {
      "": "",
    },
  },
  error: null,
  isLoading: false,
};

const fetchBook = createAsyncThunk<
  IBookApiDetails,
  string,
  { rejectValue: string }
>("book/fetchBook", async (isbn, { rejectWithValue }) => {
  try {
    const book = await bookstoreApi.getByISBN(isbn);
    return book;
  } catch (err) {
    const axiosError = err as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.book = action.payload;
    });

    builder.addCase(fetchBook.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }
    });

    builder.addMatcher(isPending(), (state) => {
      state.error = "";
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isRejected(), (state) => {
      state.isLoading = false;
    });
  },
});

export { fetchBook };
export default bookSlice.reducer;
