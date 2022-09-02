import { MouseEventHandler } from "react";
import { RoutesUrl } from "../../router";
import { signOut } from "../../store/features/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { getUserIsLoggedIn } from "../../store/selectors";
import { CartLogo } from "../CartLogo";
import { HeartLogo } from "../HeartLogo";
import { Search } from "../Search";
import { UserLogo } from "../UserLogo";
import {
  NavLinks,
  SearchField,
  SearchLogo,
  SignOutButton,
  StyledHeader,
  StyledLink,
  Title,
} from "./style";

export const Header = () => {
  const isUserSignedIn = getUserIsLoggedIn();
  const dispatch = useAppDispatch();
  const handleSignOut: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event) {
      dispatch(signOut());
    }
  };
  return (
    <StyledHeader>
      <StyledLink to={RoutesUrl.HOME}>
        <Title>Bookstore</Title>
      </StyledLink>
      <SearchField>
        <Search />
        <SearchLogo />
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
