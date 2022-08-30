import styled from "styled-components";
import { fonts, Indent, indentsConstructor, Media } from "../../ui";
import { Color } from "../../ui";
import { SearchLogo as Logo } from "../../assets";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
  padding: 24px 0;
  border-bottom: 1px solid ${Color.GreyLight};

  ${Media.MD} {
    display: grid;
    grid-template-columns: 3fr 12fr 6fr;
    grid-gap: 10%;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SignOutButton = styled.button`
  ${indentsConstructor.create(Indent.ML, 7)}
  ${fonts.bodyBold}
  color: ${Color.Black};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
