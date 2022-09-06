import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts } from "../../ui";

type PaginationNumberProps = {
  isActive: boolean;
};

export const StyledBookListPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PaginationNumbers = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  list-style: none;
`;

export const PaginationNumber = styled.li<PaginationNumberProps>`
  ${({ isActive }: PaginationNumberProps) => {
    if (isActive) {
      return css`
        ${fonts.bodyBold}
        color: ${Color.Black};
      `;
    }

    return css`
      ${fonts.bodyRegular}
      color: ${Color.Grey};
    `;
  }}
`;

export const PaginationArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
