import { ErrorNotification } from "./style";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { firebaseApp } from "../../firebase";
import { emailRegex } from "../../regex";
import { useState } from "react";
import { useNavigate, resolvePath } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { FormSubmitButton } from "../FormSubmitButton";
import { FormInput } from "../FormInput";
import { FormInputLabel } from "../FormInputLabel";
import { Form } from "../Form";

interface InputFields {
  email: string;
}

export const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const [requestError, setRequestError] = useState(null);
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
        navigate(resolvePath(RoutesUrl.REGISTER));
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

      <FormSubmitButton isRequestPending={isRequestPending} />
    </Form>
  );
};
