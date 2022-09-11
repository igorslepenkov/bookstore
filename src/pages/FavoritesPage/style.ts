import styled from "styled-components";
import { Indent, indentsConstructor } from "../../ui";

export const FavoritesList = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(1, 1fr);
  ${indentsConstructor.create(Indent.MT, 3)}
`;
