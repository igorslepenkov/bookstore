import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  ${indentsConstructor.create(Indent.MT, 3)}
`;

export const InputLabel = styled.label`
  ${indentsConstructor.create(Indent.MT, 7)}
  ${fonts.bodyBold};
  color: ${Color.Black};
`;

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

export const SubmitButton = styled.button`
  width: 100%;
  ${indentsConstructor.create(Indent.MB, 4)}
  ${indentsConstructor.create(Indent.MT, 4)}
  padding: 15px 0;
  ${fonts.h3}
  color: ${Color.White};
  letter-spacing: 0.05em;
  border: none;
  background-color: ${Color.Black};
`;

export const ErrorNotification = styled.p`
  ${fonts.bodyBold}
  color: ${Color.Danger};
`;
