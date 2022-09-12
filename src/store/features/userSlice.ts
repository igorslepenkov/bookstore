import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { AUTH_ERROR_CODES } from "../../errors";
import { IUser } from "../../types";

type InitialState = {
  user: IUser | null;
  error: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
};

type UserInfo = {
  email: string;
  password: string;
};

type UserInfoUpdate = Partial<Omit<UserInfo, "password">> &
  Required<Omit<UserInfo, "email">> & {
    name?: string;
    newPassword?: string;
  };

const initialState: InitialState = {
  user: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const signUp = createAsyncThunk<IUser, UserInfo, { rejectValue: string }>(
  "user/signUp",
  async ({ email, password }: UserInfo, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const response: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userObj: IUser = {
        id: response.user.uid,
        email: response.user.email,
        meta: response.user.metadata,
      };

      return userObj;
    } catch (err) {
      const newError = err as FirebaseError;
      if (newError.code === AUTH_ERROR_CODES.EMAIL_ALLREADY_EXISTS) {
        return rejectWithValue(
          "This email is already occupied. Please sign in or use another email address"
        );
      }
      return rejectWithValue(
        "Unexpected error recieved from server. Please try again later"
      );
    }
  }
);

const signIn = createAsyncThunk<IUser, UserInfo, { rejectValue: string }>(
  "user/signIn",
  async ({ email, password }: UserInfo, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const response: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userObj: IUser = {
        id: response.user.uid,
        email: response.user.email,
        meta: response.user.metadata,
      };

      return userObj;
    } catch (err) {
      const newError = err as FirebaseError;
      if (newError.code === AUTH_ERROR_CODES.USER_NOT_FOUND) {
        return rejectWithValue("We could not find user with such credentials");
      }

      if (newError.code === AUTH_ERROR_CODES.INVALID_PASSWORD) {
        return rejectWithValue(
          "It seems that you have entered the wrong password. Please try again"
        );
      }
      return rejectWithValue(
        "Unexpected error recieved from server. PLease try again later"
      );
    }
  }
);

const signOut = createAsyncThunk("user/signOut", async (_) => {
  const auth = getAuth();
  await auth.signOut();
});

const updateUser = createAsyncThunk<
  void,
  UserInfoUpdate,
  { rejectValue: string }
>(
  "user/update",
  async (
    { name, email, password, newPassword }: UserInfoUpdate,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (name && currentUser?.email && password) {
        await updateProfile(currentUser, { displayName: name });
        dispatch(signIn({ email: currentUser.email, password: password }));
      }

      if (email && currentUser?.email && password) {
        const credential = EmailAuthProvider.credential(
          currentUser.email,
          password
        );
        await reauthenticateWithCredential(currentUser, credential);
        await updateEmail(currentUser, email);
        dispatch(signIn({ email: currentUser.email, password: password }));
      }

      if (password && newPassword && currentUser?.email) {
        const credential = EmailAuthProvider.credential(
          currentUser.email,
          password
        );
        await reauthenticateWithCredential(currentUser, credential);
        await updatePassword(currentUser, newPassword);
        dispatch(signIn({ email: currentUser.email, password: newPassword }));
      }
    } catch (err) {
      const newError = err as FirebaseError;
      if (newError.code === AUTH_ERROR_CODES.INVALID_EMAIL_USED) {
        rejectWithValue("Invalid email passed");
      }

      if (newError.code === AUTH_ERROR_CODES.WEEK_PASSWORD) {
        rejectWithValue(
          "Passed password is too week, please provide a new one"
        );
      }

      if (newError.code === AUTH_ERROR_CODES.INVALID_PASSWORD) {
        rejectWithValue("Invalid password provided, please try again");
      }

      if (newError.code === AUTH_ERROR_CODES.EMAIL_ALLREADY_EXISTS) {
        rejectWithValue("Sorry this email is allready exists");
      }
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });

    builder.addCase(signIn.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      if (action?.payload) {
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

export { signUp, signIn, signOut, updateUser };
export const { clearErrors } = userSlice.actions;
export default userSlice.reducer;
