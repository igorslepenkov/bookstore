import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts, Media } from "../../ui";

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
  gap: 5px;
  list-style: none;
  cursor: pointer;

  ${Media.MD} {
    gap: 15px;
  }
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

  & span {
    display: none;
  }

  ${Media.SM} {
    & span {
      display: block;
    }
  }
`;
