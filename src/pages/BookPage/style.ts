import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

export const StyledArrowLeft = styled(ArrowLeft)`
  ${indentsConstructor.create(Indent.MB, 4)}
  color: ${Color.Black};
  cursor: pointer;
`;

export const BookDetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${indentsConstructor.create(Indent.MT, 3)}
`;

export const BookDetailsImageWrapper = styled.div`
  background-color: ${Color.Orange};
`;

export const BookImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const BookDetails = styled.div`
  border-top: 1px solid ${Color.GreyLight};
  ${indentsConstructor.create(Indent.PT, 3)}
`;

export const BookDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  ${indentsConstructor.create(Indent.MB, 2)}
`;

export const BookDetail = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10%;
`;

export const BookDetailTitle = styled.span`
  ${fonts.bodyRegular}
  color: ${Color.Grey};
`;

export const BookDetailValue = styled.span`
  ${fonts.bodyBold}
  color: ${Color.Black};
`;

export const AddToCartButton = styled.button`
  width: 100%;
  ${indentsConstructor.create(Indent.MB, 4)}
  ${fonts.subline}
  border: none;
  background-color: ${Color.Black};
  color: ${Color.White};
`;

export const PreviewLink = styled.a`
  ${fonts.bodyRegular}
  color: ${Color.Black};
  text-align: center;
`;
