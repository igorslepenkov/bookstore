import { ErrorNotification, StyledLink } from "./style";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { firebaseApp } from "../../firebase";
import { emailRegex } from "../../regex";
import { useState } from "react";
import { resolvePath } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { FormSubmitButton } from "../FormSubmitButton";
import { FormInput } from "../FormInput";
import { FormInputLabel } from "../FormInputLabel";
import { Form } from "../Form";
import { AUTH_ERROR_CODES } from "../../errors";
import { FormServerMessage } from "../FormServerMessage";

interface InputFields {
  email: string;
}

export const ResetPasswordForm = () => {
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const [requestMessage, setRequestMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFields>();
  const auth = getAuth(firebaseApp);

  const onSubmit = ({ email }: InputFields) => {
    setIsRequestPending(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setRequestMessage(
          `Please, check your email. You will recieve link to reset your password. Click here if you want to go back to register page.`
        );
      })
      .catch((err) => {
        if (err.code === AUTH_ERROR_CODES.USER_NOT_FOUND) {
          setRequestMessage("USer with such email does not exist");
        }
      })
      .finally(() => {
        setIsRequestPending(false);
      });

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {requestMessage && (
        <StyledLink to={resolvePath(RoutesUrl.REGISTER)}>
          <FormServerMessage>{requestMessage}</FormServerMessage>
        </StyledLink>
      )}
      <FormInputLabel htmlFor="email">Email</FormInputLabel>
      <FormInput
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: emailRegex,
            message:
              "Looks like email you entered is not valid, please check it, or consider using another one",
          },
        })}
        id="email"
        type="email"
        placeholder="Your email"
      />
      {errors.email && (
        <ErrorNotification>{errors.email.message}</ErrorNotification>
      )}

      <FormSubmitButton isRequestPending={isRequestPending} />
    </Form>
  );
};
