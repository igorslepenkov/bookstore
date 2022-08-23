import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

interface IProps {
  appendPlace: string;
}

export const StyledBookCostAndRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ appendPlace }: IProps) => {
    if (appendPlace === "page") {
      return css`
        ${indentsConstructor.create(Indent.MB, 2)}
        ${indentsConstructor.create(Indent.MB, 5)}
      `;
    } else {
      return indentsConstructor.create(Indent.MB, 2);
    }
  }}
`;

export const BookCost = styled.p`
  margin: 0;
  color: ${Color.Black};
  ${({ appendPlace }: IProps) => {
    if (appendPlace === "page") {
      return fonts.h2;
    } else {
      return fonts.bodyBold;
    }
  }}
`;
