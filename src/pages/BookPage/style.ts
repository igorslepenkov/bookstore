import styled from "styled-components";
import { ArrowLeft } from "../../assets";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";

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
  border-top: 1px solid ${Color.GreyLight};
  ${indentsConstructor.create(Indent.PT, 3)}
`;

export const AddToCartButton = styled.button`
  width: 100%;
  ${indentsConstructor.create(Indent.MB, 4)}
  ${fonts.h3}
  border: none;
  background-color: ${Color.Black};
  color: ${Color.White};
`;

export const PreviewLink = styled.a`
  display: flex;
  ${fonts.bodyRegular}
  color: ${Color.Black};
  justify-content: center;
`;
