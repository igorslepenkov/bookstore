import { ErrorNotification } from "./style";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import { firebaseApp } from "../../firebase";
import { emailRegex } from "../../regex";
import { useState } from "react";
import { Modal } from "../Modal";
import { useToggle } from "../../hooks";
import { FormSubmitButton } from "../FormSubmitButton";
import { FormInput } from "../FormInput";
import { FormInputLabel } from "../FormInputLabel";
import { Form } from "../Form";
import { AUTH_ERROR_CODES } from "../../errors";

interface InputFields {
  email: string;
  password: string;
  confirm: string;
}

export const SignUpForm = () => {
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const [requestMessage, setRequestMessage] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<
    "success" | "error" | null
  >(null);
  const [isModalOpen, toggleIsModalOpen] = useToggle();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<InputFields>();
  const auth = getAuth(firebaseApp);

  const onSubmit = ({ email, password, confirm }: InputFields) => {
    if (password !== confirm) {
      setError("confirm", {
        message: "Passwords do not match",
      });
      return;
    }

    setIsRequestPending(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setRequestStatus("success");
      })
      .catch((err) => {
        console.log(err);
        if (err.code === AUTH_ERROR_CODES.EMAIL_ALLREADY_EXISTS) {
          setRequestStatus("error");
          setRequestMessage(
            "This email is already occupied. PLease sign in or use another email address"
          );
        }
      })
      .finally(() => {
        toggleIsModalOpen();
        setIsRequestPending(false);
      });

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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

      <Modal
        isOpen={isModalOpen}
        status={requestStatus === "error" ? "error" : "success"}
        message={
          requestStatus === "error"
            ? requestMessage
            : "User has been successfully registered! Please sign in to continue"
        }
        handler={toggleIsModalOpen}
      />
    </Form>
  );
};
