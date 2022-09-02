import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import { IBook } from "../../types";
import { bookstoreApi } from "../../services";
import { AxiosError } from "axios";

type InitialState = {
  newBooks: IBook[] | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: InitialState = {
  newBooks: null,
  error: null,
  isLoading: false,
};

const fetchNewBooks = createAsyncThunk<
  IBook[],
  undefined,
  { rejectValue: string }
>("newBooks/fetchNewBooks", async (_, { rejectWithValue }) => {
  try {
    const response = await bookstoreApi.getNew();
    return response.books;
  } catch (err) {
    const axiosError = err as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.newBooks = action.payload;
    });

    builder.addCase(fetchNewBooks.rejected, (state, action) => {
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

export { fetchNewBooks };
export default newBooksSlice.reducer;
