import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";

export const StyledBookDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  ${indentsConstructor.create(Indent.MB, 2)}
`;

export const BookDetail = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10%;

  ${Media.MD} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BookDetailTitle = styled.span`
  ${fonts.bodyRegular}
  color: ${Color.Grey};
`;

export const BookDetailValue = styled.span`
  ${fonts.bodyBold}
  color: ${Color.Black};
`;
