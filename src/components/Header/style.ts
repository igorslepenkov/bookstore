import styled from "styled-components";
import { fonts, Media } from "../../ui";
import { Color } from "../../ui";
import { SearchLogoIcon as Logo } from "../../assets";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 10fr 4fr;
  grid-gap: 3%;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
  padding: 24px 0;
  border-bottom: 1px solid ${Color.GreyLight};

  ${Media.SM} {
    grid-template-columns: 10fr 4fr;
  }

  ${Media.MD} {
    display: grid;
    grid-template-columns: 4fr 8fr 7fr;
    column-gap: 3%;
  }

  ${Media.LG} {
    grid-template-columns: 5fr 9fr 7fr;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h2`
  margin: 0;
  ${fonts.h2}
  color: ${Color.Black};
  text-align: start;
  text-transform: uppercase;
`;

export const SearchField = styled.span`
  position: relative;
  display: none;
  flex-direction: row;

  ${Media.MD} {
    display: flex;
  }
`;

export const SearchLogo = styled(Logo)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translate(50%, -50%);
`;

export const NavLinks = styled.nav`
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;
