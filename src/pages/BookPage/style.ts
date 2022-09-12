import styled, { css } from "styled-components";
import { ArrowLeft } from "../../assets";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";

type AddToCartProps = {
  isInCart: boolean;
};

export const StyledArrowLeft = styled(ArrowLeft)`
  ${indentsConstructor.create(Indent.MB, 4)}
  color: ${Color.Black};
  cursor: pointer;
`;

export const BookDetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${indentsConstructor.create(Indent.MT, 3)}
  ${indentsConstructor.create(Indent.MB, 1)}

  ${Media.MD} {
    flex-direction: row;
    justify-content: space-between;
    gap: 5%;
  }
`;

export const BookDetailsImageWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.Orange};
`;

export const BookImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const BookDetails = styled.div`
  flex-grow: 1;
  ${indentsConstructor.create(Indent.PT, 3)}
  border-top: 1px solid ${Color.GreyLight};
`;

export const AddToCartButton = styled.button<AddToCartProps>`
  width: 100%;
  ${indentsConstructor.create(Indent.MB, 4)}
  ${fonts.h3}
  color: ${Color.White};
  border: none;
  ${({ isInCart }: AddToCartProps) => {
    if (isInCart) {
      return css`
        background-color: ${Color.Danger};
      `;
    }
    return css`
      background-color: ${Color.Black};
    `;
  }}

  cursor: pointer;
`;

export const PreviewLink = styled.a`
  display: flex;
  ${fonts.bodyRegular}
  color: ${Color.Black};
  justify-content: center;
`;
