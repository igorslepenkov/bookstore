import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";

export const StyledUpdateUserForm = styled.form`
  display: flex;
  flex-direction: column;
  ${indentsConstructor.create(Indent.MT, 3)}
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${indentsConstructor.create(Indent.MT, 1)}
  border-top: 1px solid #e7e7e7;

  ${Media.SM} {
    flex-direction: row;
    ${indentsConstructor.create(Indent.PT, 2)}
  }

  ${Media.MD} {
    flex-direction: row-reverse;
    gap: 32px;
  }
`;

export const SubmitButton = styled.button`
  ${fonts.h3}
  color: ${Color.White};
  letter-spacing: 0.05em;
  border: none;
  background-color: ${Color.Black};
  cursor: pointer;

  ${Media.SM} {
    width: 100%;
  }

  ${Media.MD} {
    width: 255px;
    height: 56px;
  }
`;

export const CancelButton = styled.button`
  ${fonts.h3}
  color: ${Color.Black};
  background-color: ${Color.White};
  border: 1px solid #e7e7e7;
  cursor: pointer;

  ${Media.SM} {
    width: 100%;
  }

  ${Media.MD} {
    width: 255px;
    height: 56px;
  }
`;

export const ProfileInputGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    ${indentsConstructor.create(Indent.MT, 4)}
  }

  ${Media.MD} {
    display: grid;
    grid-template-areas:
      "profile profile"
      "name email"
      "name-input email-input"
      "name-error email-error";
    column-gap: 32px;
  }
`;

export const PasswordInputGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    ${indentsConstructor.create(Indent.MT, 4)}
  }

  ${Media.MD} {
    display: grid;
    grid-template-areas:
      "password-title password-title"
      "password password"
      "password-input ..."
      "password-error ..."
      "new-password confirm"
      "new-password-input confirm-input"
      "new-password-error confirm-error";
    column-gap: 32px;
  }
`;
