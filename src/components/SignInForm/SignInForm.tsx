import { ErrorNotification, ResetLink, StyledLink } from "./style";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { firebaseApp } from "../../firebase";
import { emailRegex } from "../../regex";
import { useState } from "react";
import { RoutesUrl } from "../../router";
import { resolvePath } from "react-router-dom";
import { FormSubmitButton } from "../FormSubmitButton";
import { FormInput } from "../FormInput";
import { FormInputLabel } from "../FormInputLabel";
import { Form } from "../Form";
import { AUTH_ERROR_CODES } from "../../errors";
import { FormServerMessage } from "../FormServerMessage";

interface InputFields {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const [requestMessage, setRequestMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFields>();
  const auth = getAuth(firebaseApp);

  const onSubmit = ({ email, password }: InputFields) => {
    setIsRequestPending(true);

    signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setRequestMessage(
          "Unexpected error recieved from server. PLease try again later"
        );

        if (err.code === AUTH_ERROR_CODES.USER_NOT_FOUND) {
          setRequestMessage("We could not find user with such credentials");
        }

        if (err.code === AUTH_ERROR_CODES.INVALID_PASSWORD) {
          setRequestMessage(
            "It seems that you have entered the wrong password. PLease try again"
          );
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
        <FormServerMessage>{requestMessage}</FormServerMessage>
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

      <FormInputLabel htmlFor="password">Password</FormInputLabel>
      <FormInput
        {...register("password", {
          required: "Please enter your password",
          min: {
            value: 6,
            message: "Your password must contain at least 6 characters",
          },
        })}
        id="password"
        type="password"
        placeholder="Your password"
      />
      {errors.password && (
        <ErrorNotification>{errors.password.message}</ErrorNotification>
      )}

      <ResetLink to={resolvePath(RoutesUrl.RESET)}>Forgot password?</ResetLink>

      <FormSubmitButton isRequestPending={isRequestPending} />
    </Form>
  );
};
