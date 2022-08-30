import styled from "styled-components";
import { Indent, indentsConstructor } from "../../ui";
import { ArrowSmallLeft } from "../../assets";
import { ArrowSmallRight } from "../../assets";

export const StyledSimilarBooksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSimilarBooksList = styled.ul`
  display: flex;
  justify-content: center;
  ${indentsConstructor.create(Indent.MT, 2)}
  column-gap: 32px;
  overflow-x: hidden;
`;

export const ScrollButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowSmallLeftButton = styled(ArrowSmallLeft)`
  ${indentsConstructor.create(Indent.MT, 5)}
  cursor: pointer;
`;

export const ArrowSmallRightButton = styled(ArrowSmallRight)`
  ${indentsConstructor.create(Indent.MT, 5)}
  cursor: pointer;
`;
