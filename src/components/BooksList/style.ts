import styled from "styled-components";
import { Indent, indentsConstructor, Media } from "../../ui";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  padding: 0;
  ${indentsConstructor.create(Indent.MT, 3)}
  ${indentsConstructor.create(Indent.MB, 3)}
  list-style: none;

  ${Media.SM} {
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
  }

  ${Media.MD} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${Media.LG} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
