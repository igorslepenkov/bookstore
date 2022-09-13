import styled from "styled-components";
import { Color, indentsConstructor, Indent, Media } from "../../ui";
import { fonts } from "../../ui";

export const StyledBookListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;

  ${Media.SM} {
    flex-direction: row;
    justify-content: start;
    gap: 50px;
    height: 170px;
    ${indentsConstructor.create(Indent.MT, 3)}
    ${indentsConstructor.create(Indent.MB, 3)}
    border-bottom: 1px solid #e7e7e7;
  }

  ${Media.MD} {
    height: 200px;
  }
`;

export const BookImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
  background-color: ${Color.Blue};
  ${indentsConstructor.create(Indent.MB, 6)}

  ${Media.SM} {
    position: static;
    width: 210px;
  }

  ${Media.MD} {
    width: 256px;
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTitle = styled.h3`
  margin: 0;
  ${fonts.h3}
  color: ${Color.Black};
`;

export const BookImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const BookAuthorsAndPublisher = styled.p`
  flex-grow: 1;
  ${indentsConstructor.create(Indent.MB, 5)}
  ${indentsConstructor.create(Indent.MT, 8)}
  ${fonts.bodyRegular}
  color: ${Color.Grey};
`;

export const CartButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  border: none;
  background-color: ${Color.Black};
  cursor: pointer;

  ${Media.SM} {
    background-color: transparent;
  }

  ${Media.MD} {
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const BookCost = styled.p`
  position: relative;
  ${fonts.h2}
  color: ${Color.Black};

  ${Media.LG} {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BookCostAndAmount = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Media.LG} {
    position: static;
  }
`;

export const BookAmount = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  ${indentsConstructor.create(Indent.MB, 5)}
`;

export const BookAmountText = styled.span`
  ${fonts.h3}
  color: ${Color.Black};
`;

export const BookAmountButton = styled.button`
  ${fonts.h3}
  color: ${Color.Black};
  border: none;
  background-color: transparent;
`;
