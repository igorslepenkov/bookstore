import { KeyboardEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { RoutesUrl } from "../../router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCart,
  getFavorites,
  getSearchBooks,
  getSearchBooksPage,
  getUserError,
  getUserIsLoggedIn,
} from "../../store/selectors";
import { CartLogo } from "../CartLogo";
import { HeartLogo } from "../HeartLogo";
import { Search } from "../Search";
import { SearchDropdown } from "../SearchDropdown";
import { UserLogo } from "../UserLogo";
import { useDebounce, useInput, useToggle, useWindowSize } from "../../hooks";
import { NavLinks, SearchField, SearchLogo, StyledHeader, StyledLink, Title } from "./style";
import { fetchBooksBySearch } from "../../store";
import { resolvePath, useLocation, useNavigate } from "react-router-dom";
import { Burger } from "../Burger";
import { MediaBreakpoints } from "../../ui";
import { Menu } from "../Menu";
import { Modal } from "../Modal";
import { ThemeChanger } from "../ThemeChanger";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isModalOpen, toggleIsModalOpen] = useToggle();
  const error = useAppSelector(getUserError);
  const isUserSignedIn = useAppSelector(getUserIsLoggedIn);
  const favorites = useAppSelector(getFavorites);
  const cart = useAppSelector(getCart);
  const searchBooks = useAppSelector(getSearchBooks);
  const searchPage = useAppSelector(getSearchBooksPage);
  const [{ value, onChange }, clearInput] = useInput("");

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const debouncedValue = useDebounce(value, 300);

  const windowSize = useWindowSize();

  const toggleBurgerClick = () => {
    setIsMenuOpen((state) => {
      return !state;
    });
  };

  const handleSearchClick: MouseEventHandler<SVGSVGElement> = () => {
    if (debouncedValue !== value || !debouncedValue) return;
    const page = searchPage || 1;
    navigate(
      resolvePath(
        RoutesUrl.SEARCH.replace(/:pattern/, debouncedValue).replace(/:page/, page.toString())
      )
    );
    clearInput();
  };
  const handleSearchKeyDown: KeyboardEventHandler<HTMLInputElement | SVGSVGElement> = (event) => {
    if (debouncedValue !== value || !debouncedValue) return;
    if (event.key === "Enter") {
      const page = searchPage || 1;
      navigate(
        resolvePath(
          RoutesUrl.SEARCH.replace(/:pattern/, debouncedValue).replace(/:page/, page.toString())
        )
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

  useEffect(() => {
    if (error && error === "needReAuth") {
      toggleIsModalOpen();
    }
  }, [error, toggleIsModalOpen]);

  return (
    <StyledHeader>
      <StyledLink to={RoutesUrl.HOME}>
        <Title>Bookstore</Title>
      </StyledLink>
      <SearchField>
        <Search onChange={onChange} value={value} onKeyDown={handleSearchKeyDown} />
        <SearchLogo onClick={handleSearchClick} onKeyDown={handleSearchKeyDown} tabIndex={0} />
        {searchBooks && isDropdownOpen && (
          <SearchDropdown books={searchBooks.slice(0, 5)} searchValue={debouncedValue} />
        )}
      </SearchField>
      <NavLinks>
        {windowSize.width > MediaBreakpoints.MD && <ThemeChanger />}
        <HeartLogo isActive={favorites.length > 0 && isUserSignedIn} />
        <CartLogo isActive={cart.length > 0 && isUserSignedIn} />
        <UserLogo />
        {windowSize.width < MediaBreakpoints.MD && (
          <Burger isOpen={isMenuOpen} setIsOpen={toggleBurgerClick} />
        )}
      </NavLinks>
      {isMenuOpen && (
        <Menu
          isOpen={isMenuOpen}
          setIsOpen={toggleBurgerClick}
          searchOnChange={onChange}
          searchOnKeyDown={handleSearchKeyDown}
          searchOnClick={handleSearchClick}
          searchValue={value}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        status={"error"}
        message="Sorry, you need to log in again to perform profile update"
        handler={toggleIsModalOpen}
      />
    </StyledHeader>
  );
};
