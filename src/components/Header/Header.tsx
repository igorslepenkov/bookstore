import { RoutesUrl } from "../../router";
import { CartLogo } from "../CartLogo";
import { HeartLogo } from "../HeartLogo";
import { Search } from "../Search";
import { UserLogo } from "../UserLogo";
import {
  NavLinks,
  SearchField,
  SearchLogo,
  StyledHeader,
  StyledLink,
  Title,
} from "./style";

export const Header = () => {
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
      </NavLinks>
    </StyledHeader>
  );
};
