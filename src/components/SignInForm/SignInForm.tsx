import { ErrorNotification, ResetLink } from "./style";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../regex";
import { RoutesUrl } from "../../router";
import { resolvePath, useNavigate } from "react-router-dom";
import { FormSubmitButton } from "../FormSubmitButton";
import { FormInput } from "../FormInput";
import { FormInputLabel } from "../FormInputLabel";
import { Form } from "../Form";
import { FormServerMessage } from "../FormServerMessage";
import {
  getUser,
  getUserError,
  getUserIsLoading,
  getUserIsLoggedIn,
} from "../../store/selectors/userSelectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signIn } from "../../store/features/userSlice";
import { useEffect } from "react";

interface InputFields {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const navigate = useNavigate();
  const user = useAppSelector(getUser);
  const isUserLoggerin = useAppSelector(getUserIsLoggedIn);
  const isRequestPending = useAppSelector(getUserIsLoading);
  const requestMessage = useAppSelector(getUserError);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFields>();
  const onSubmit = async ({ email, password }: InputFields) => {
    await dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (user && isUserLoggerin) {
      navigate(resolvePath(RoutesUrl.ACCOUNT));
      reset();
    }
  }, [user, reset, navigate, isUserLoggerin]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {requestMessage && <FormServerMessage>{requestMessage}</FormServerMessage>}
      <FormInputLabel htmlFor="email">Email</FormInputLabel>
      <FormInput
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: emailRegex,
            message: `Looks like email you entered is not valid, 
              please check it, or consider using another one`,
          },
        })}
        id="email"
        type="email"
        placeholder="Your email"
      />
      {errors.email && <ErrorNotification>{errors.email.message}</ErrorNotification>}

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
      {errors.password && <ErrorNotification>{errors.password.message}</ErrorNotification>}

      <ResetLink to={resolvePath(RoutesUrl.RESET)}>Forgot password?</ResetLink>

      <FormSubmitButton isRequestPending={isRequestPending} />
    </Form>
  );
};
