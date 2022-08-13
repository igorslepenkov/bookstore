import styled from "styled-components";
import { fonts } from "../../ui";
import { Color } from "../../ui";

export const StyledSearch = styled.input`
  flex-grow: 1;
  padding: 5px 20px;
  outline: none;
  border: 1px solid #e7e7e7;
  ${fonts.bodyRegular}
  color: ${Color.TextBlack};

  &:focus {
    background-color: ${Color.BackgroundFocusInput};
    border: 2px solid #e7e7e7;
  }

  &::placeholder {
    ${fonts.bodyRegular}
    color: ${Color.InputPlaceholder};
    opacity: 1;
  }
`;
