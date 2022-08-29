import { getAuth } from "firebase/auth";
import { MouseEventHandler } from "react";
import { useIsUserSignedIn } from "../../hooks";
import { RoutesUrl } from "../../router";
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
  const isUserSignedIn = useIsUserSignedIn();
  const handleSignOut: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event) {
      const auth = getAuth();
      auth.signOut();
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
        {isUserSignedIn ? (
          <SignOutButton type="button" onClick={handleSignOut}>
            Sign Out
          </SignOutButton>
        ) : (
          <UserLogo />
        )}
      </NavLinks>
    </StyledHeader>
  );
};
