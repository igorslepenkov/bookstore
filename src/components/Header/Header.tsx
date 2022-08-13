import { CartLogo } from "../CartLogo";
import { HeartLogo } from "../HeartLogo";
import { Search } from "../Search";
import { UserLogo } from "../UserLogo";
import {
  NavLinks,
  SearchField,
  SearchLogo,
  StyledHeader,
  Title,
} from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Title>Bookstore</Title>
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
