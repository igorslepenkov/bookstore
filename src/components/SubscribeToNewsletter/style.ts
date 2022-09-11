import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";

export const StyledSubscribeToNewsletter = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${Color.PinkLight};
  padding: 40px;
  ${indentsConstructor.create(Indent.MB, 1)}
  ${indentsConstructor.create(Indent.MT, 1)}

  ${Media.LG} {
    padding: 56px 64px;
  }
`;

export const SubscribeMessageText = styled.p`
  ${fonts.bodyRegular}
  color: ${Color.Grey};
  ${indentsConstructor.create(Indent.MB, 5)}
  ${indentsConstructor.create(Indent.MT, 5)}
`;

export const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;

  ${Media.LG} {
    flex-direction: row;
  }
`;

export const SubscribeEmailInput = styled.input`
  flex-grow: 1;
  padding: 5px 20px;
  outline: none;
  border: none;
  ${fonts.bodyRegular}
  color: ${Color.Black};

  &:focus {
    background-color: ${Color.GreyLight};
  }

  &::placeholder {
    ${fonts.bodyRegular}
    color: ${Color.Grey};
    opacity: 1;
  }
`;

export const SubscribeButton = styled.button`
  padding: 5px 20px;
  ${indentsConstructor.create(Indent.MT, 5)}
  ${fonts.h3}
  border: none;
  background-color: ${Color.Black};
  color: ${Color.White};
  cursor: pointer;

  ${Media.LG} {
    margin-top: 0;
  }
`;
