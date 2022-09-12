import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

export const FavoritesList = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(1, 1fr);
  ${indentsConstructor.create(Indent.MT, 3)}
`;

export const NothingToShow = styled.h2`
  margin: auto;
  ${fonts.h2}
  color: ${Color.Grey};
`;
