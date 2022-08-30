import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const Input = styled.input`
  flex-grow: 1;
  padding: 5px 20px;
  ${fonts.bodyRegular}
  color: ${Color.Black};
  border: 1px solid #e7e7e7;
  outline: none;

  &:focus {
    background-color: ${Color.GreyLight};
    border: 2px solid #e7e7e7;
  }

  &::placeholder {
    ${fonts.bodyRegular}
    color: ${Color.Grey};
    opacity: 1;
  }
`;
