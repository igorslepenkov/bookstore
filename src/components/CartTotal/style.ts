import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";

export const StyledCartTotal = styled.form`
  display: flex;
  flex-direction: column;
  ${indentsConstructor.create(Indent.MT, 2)}

  ${Media.SM} {
    margin-left: auto;
    width: 328px;
  }
`;

export const CartTotalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const TitleItem = styled.p`
  ${fonts.bodyRegular};
  color: ${Color.Grey};
`;

export const Value = styled.p`
  text-align: end;
  ${fonts.bodyBold}
  ${Color.Black};
`;

export const TotalValue = styled.p`
  text-align: end;
  ${fonts.h2}
  ${Color.Black};
`;
