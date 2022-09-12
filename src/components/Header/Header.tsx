import {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { RoutesUrl } from "../../router";
import { signOut } from "../../store/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getSearchBooks, getUserIsLoggedIn } from "../../store/selectors";
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
import { fetchBooksBySearch, persistor } from "../../store";
import { resolvePath, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isUserSignedIn = useAppSelector(getUserIsLoggedIn);
  const searchBooks = useAppSelector(getSearchBooks);
  const dispatch = useAppDispatch();
  const [{ value, onChange }, clearInput] = useInput("");
  const debouncedValue = useDebounce(value, 300);
  const navigate = useNavigate();

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = async (event) => {
    if (event) {
      await dispatch(signOut());
      await persistor.purge();
    }
  };

  const handleSearchClick: MouseEventHandler<SVGSVGElement> = () => {
    if (debouncedValue !== value) return;
    navigate(resolvePath(RoutesUrl.SEARCH.replace(/:pattern/, debouncedValue)));
    clearInput();
  };
  const handleSearchKeyDown: KeyboardEventHandler<
    HTMLInputElement | SVGSVGElement
  > = (event) => {
    if (debouncedValue !== value) return;
    if (event.key === "Enter") {
      navigate(
        resolvePath(RoutesUrl.SEARCH.replace(/:pattern/, debouncedValue))
      );
      clearInput();
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchBooksBySearch({ searchValue: debouncedValue, page: 1 }));
    }
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    if (value.length === 0) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
  }, [value]);

  useEffect(() => {
    if (location.pathname.match(/search/) || location.pathname.match(/book/)) {
      setIsDropdownOpen(false);
    }
  }, [location]);

  return (
    <StyledHeader>
      <StyledLink to={RoutesUrl.HOME}>
        <Title>Bookstore</Title>
      </StyledLink>
      <SearchField>
        <Search
          onChange={onChange}
          value={value}
          onKeyDown={handleSearchKeyDown}
        />
        <SearchLogo
          onClick={handleSearchClick}
          onKeyDown={handleSearchKeyDown}
          tabIndex={0}
        />
        {searchBooks && isDropdownOpen && (
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
