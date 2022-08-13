import styled from "styled-components";
import { fonts } from "../../ui";
import { Color } from "../../ui";
import { ReactComponent as Logo } from "../../assets/search.svg";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 3fr 12fr 4fr;
  grid-gap: 10%;
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
  position: relative;
  display: flex;
  flex-direction: row;
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
  justify-content: space-around;
`;
