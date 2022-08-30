import { ErrorNotification } from "./style";
import {
  getAuth,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { firebaseApp } from "../../firebase";
import { useState } from "react";
import { useNavigate, resolvePath } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { FormSubmitButton } from "../FormSubmitButton";
import { FormInput } from "../FormInput";
import { FormInputLabel } from "../FormInputLabel";
import { Form } from "../Form";

interface IProps {
  oobCode: string;
}

interface InputFields {
  password: string;
  confirm: string;
}

export const ConfirmResetPasswordForm = ({ oobCode }: IProps) => {
  const navigate = useNavigate();
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<InputFields>();
  const auth = getAuth(firebaseApp);

  const onSubmit = ({ password, confirm }: InputFields) => {
    setIsRequestPending(true);

    if (password !== confirm) {
      setError("confirm", {
        message: "Passwords do not match",
      });
      return;
    }

    verifyPasswordResetCode(auth, oobCode)
      .then(() => {
        confirmPasswordReset(auth, oobCode, password);
        navigate(resolvePath(RoutesUrl.REGISTER));
        alert("Your password has been successfully reset!");
      })
      .finally(() => {
        setIsRequestPending(false);
      });

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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

      <FormInputLabel htmlFor="confirm">Confirm new password</FormInputLabel>
      <FormInput
        {...register("confirm", {
          required: "Please confirm your password",
        })}
        id="confirm"
        type="password"
        placeholder="Confirm your password"
      />
      {errors.confirm && (
        <ErrorNotification>{errors.confirm.message}</ErrorNotification>
      )}

      <FormSubmitButton isRequestPending={isRequestPending} />
    </Form>
  );
};
