import styled from "styled-components";
import { fonts } from "../../ui";
import { Color } from "../../ui";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-gap: 3%;
  align-items: center;
  max-height: 100px;
  padding: 24px 0;
  border-bottom: 1px solid ${Color.BackgroundFocusInput};
`;

export const Title = styled.h2`
  margin: 0;
  ${fonts.h2}
  color: ${Color.TextBlack};
  text-align: start;
  text-transform: uppercase;
`;

export const SearchField = styled.span`
  display: flex;
  flex-direction: row;
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
