import { Title } from "../Title";
import {
  StyledSubscribeToNewsletter,
  SubscribeButton,
  SubscribeEmailInput,
  SubscribeForm,
  SubscribeMessageText,
} from "./style";

export const SubscribeToNewsletter = () => {
  return (
    <StyledSubscribeToNewsletter>
      <Title text="Subscribe to newsletter" titleGrade={2} />
      <SubscribeMessageText>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </SubscribeMessageText>
      <SubscribeForm>
        <SubscribeEmailInput type="email" placeholder="Your email" />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </SubscribeForm>
    </StyledSubscribeToNewsletter>
  );
};
