import {
  ErrorNotification,
  Input,
  InputLabel,
  StyledSignUpForm,
  SubmitButton,
} from "./style";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { firebaseApp } from "../../firebase";
import { emailRegex } from "../../regex";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Color } from "../../ui";

interface InputFields {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const [requestError, setRequestError] = useState(null);
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
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        setRequestError(err);
      })
      .finally(() => {
        setIsRequestPending(false);
      });

    reset();
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input
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

      <InputLabel htmlFor="password">Password</InputLabel>
      <Input
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

      <SubmitButton type="submit">
        {isRequestPending ? (
          <ClipLoader loading={isRequestPending} color={Color.White} />
        ) : (
          "Submit"
        )}
      </SubmitButton>
    </StyledSignUpForm>
  );
};
