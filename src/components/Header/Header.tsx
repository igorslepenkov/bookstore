import { MouseEventHandler, useEffect } from "react";
import { RoutesUrl } from "../../router";
import { signOut } from "../../store/features/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { useGetSearchBooks, useGetUserIsLoggedIn } from "../../store/selectors";
import { CartLogo } from "../CartLogo";
import { HeartLogo } from "../HeartLogo";
import { Search } from "../Search";
import { SearchDropdown } from "../SearchDropdown";
import { UserLogo } from "../UserLogo";
import { useDebounce, useInput } from "../../hooks";
import {
  NavLinks,
  SearchField,
  SearchLogo,
  SignOutButton,
  StyledHeader,
  StyledLink,
  Title,
} from "./style";
import { clearSearch, fetchBooksBySearch } from "../../store";

export const Header = () => {
  const isUserSignedIn = useGetUserIsLoggedIn();
  const searchBooks = useGetSearchBooks();
  const dispatch = useAppDispatch();
  const [{ value, onChange }] = useInput("");
  const debouncedValue = useDebounce(value, 500);

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event) {
      dispatch(signOut());
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchBooksBySearch({ searchValue: debouncedValue, page: 1 }));
    }
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    if (value === "") {
      dispatch(clearSearch());
    }
  });

  return (
    <StyledHeader>
      <StyledLink to={RoutesUrl.HOME}>
        <Title>Bookstore</Title>
      </StyledLink>
      <SearchField>
        <Search onChange={onChange} value={value} />
        <SearchLogo />
        {searchBooks && (
          <SearchDropdown
            books={searchBooks.slice(0, 5)}
            searchValue={debouncedValue}
          />
        )}
      </SearchField>

      <NavLinks>
        <HeartLogo />
        <CartLogo />
        <UserLogo />
        {isUserSignedIn ? (
          <SignOutButton type="button" onClick={handleSignOut}>
            Sign Out
          </SignOutButton>
        ) : null}
      </NavLinks>
    </StyledHeader>
  );
};
