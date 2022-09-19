import { MouseEventHandler } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import { CrossBlackIcon } from "../../assets";
import { useWindowSize } from "../../hooks";
import { RoutesUrl } from "../../router";
import { getUserIsLoggedIn, signOut } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MediaBreakpoints } from "../../ui";
import { Title } from "../Header/style";
import { Portal, PortalTarget } from "../Portal";
import { Search } from "../Search";
import { ThemeChanger } from "../ThemeChanger";
import {
  MenuContent,
  StyledMenuWrapper,
  MenuTop,
  CloseButton,
  SearchLogo,
  SearchField,
  MenuLink,
  MenuLinksList,
  Button,
  ListPlug,
} from "./style";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
  searchOnChange: React.ChangeEventHandler<HTMLInputElement>;
  searchOnKeyDown: React.KeyboardEventHandler<HTMLInputElement | SVGSVGElement>;
  searchOnClick: MouseEventHandler<SVGSVGElement>;
  searchValue: string;
}

export const Menu = ({
  isOpen,
  setIsOpen,
  searchOnChange,
  searchOnKeyDown,
  searchOnClick,
  searchValue,
}: IProps) => {
  const windowSize = useWindowSize();
  const isUserLoggedIn = useAppSelector(getUserIsLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignOutClick = () => {
    dispatch(signOut());
    setIsOpen();
  };
  const handleSignInClick = () => {
    navigate(resolvePath(RoutesUrl.REGISTER));
    setIsOpen();
  };
  const handleSearchKeyDown: React.KeyboardEventHandler<HTMLInputElement | SVGSVGElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      searchOnKeyDown(event);
      setIsOpen();
    }
  };
  const handleSearchClick: MouseEventHandler<SVGSVGElement> = (event) => {
    searchOnClick(event);
    setIsOpen();
  };

  const transition = { x: { duration: 1 }, type: "spring", stiffness: 100 };

  if (isOpen) {
    return (
      <Portal target={PortalTarget.MENU}>
        <StyledMenuWrapper initial={{ x: "+100%" }} animate={{ x: 0 }} transition={transition}>
          <MenuTop>
            <Title>Bookstore</Title>
            <CloseButton onClick={setIsOpen}>
              <CrossBlackIcon />
            </CloseButton>
          </MenuTop>
          <MenuContent>
            <SearchField>
              <Search
                onChange={searchOnChange}
                onKeyDown={handleSearchKeyDown}
                value={searchValue}
              />
              <SearchLogo
                onClick={handleSearchClick}
                onKeyDown={handleSearchKeyDown}
                tabIndex={0}
              />
            </SearchField>
            {windowSize.width < MediaBreakpoints.MD && <ThemeChanger />}

            {isUserLoggedIn ? (
              <MenuLinksList>
                <MenuLink to={resolvePath(RoutesUrl.FAVORITES)} onClick={setIsOpen}>
                  Favorites
                </MenuLink>
                <MenuLink to={resolvePath(RoutesUrl.CART)} onClick={setIsOpen}>
                  Cart
                </MenuLink>
                <MenuLink to={resolvePath(RoutesUrl.ACCOUNT)} onClick={setIsOpen}>
                  Account
                </MenuLink>
              </MenuLinksList>
            ) : (
              <ListPlug />
            )}
            {isUserLoggedIn ? (
              <Button type="button" onClick={handleSignOutClick}>
                Log Out
              </Button>
            ) : (
              <Button type="button" onClick={handleSignInClick}>
                Sign In
              </Button>
            )}
          </MenuContent>
        </StyledMenuWrapper>
      </Portal>
    );
  }

  return null;
};
