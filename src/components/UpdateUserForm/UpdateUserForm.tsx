import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useToggle } from "../../hooks";
import { emailRegex } from "../../regex";
import { updateUser, getUserError, getUserIsLoading } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Color } from "../../ui";
import { FormInput } from "../FormInput";
import { FormInputLabel } from "../FormInputLabel";
import { FormServerMessage } from "../FormServerMessage";
import { Modal } from "../Modal";
import { ErrorNotification } from "../SignUpForm/style";
import { Title } from "../Title";
import {
  ButtonGroup,
  CancelButton,
  PasswordInputGroup,
  ProfileInputGroup,
  StyledUpdateUserForm,
  SubmitButton,
} from "./style";

type InputFields = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirm: string;
};

export const UpdateUserForm = () => {
  const [isModalOpen, toggleIsModalOpen] = useToggle();
  const isLoading = useAppSelector(getUserIsLoading);
  const requestMessage = useAppSelector(getUserError);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<InputFields>();

  const onSubmit = async ({ name, email, password, newPassword, confirm }: InputFields) => {
    if (newPassword !== confirm) {
      setError("confirm", {
        message: "Passwords do not match",
      });
      return;
    }
    await dispatch(updateUser({ name, email, password, newPassword }));
    toggleIsModalOpen();
    reset();
  };

  const onCancelClick = () => {
    reset();
  };

  return (
    <StyledUpdateUserForm onSubmit={handleSubmit(onSubmit)}>
      {requestMessage && <FormServerMessage>{requestMessage}</FormServerMessage>}
      <ProfileInputGroup>
        <Title titleGrade={2} text="Profile" gridArea="profile" />
        <FormInputLabel htmlFor="update-user-name" gridArea="name">
          Name
        </FormInputLabel>
        <FormInput
          id="update-user-name"
          type="text"
          placeholder="Your name"
          gridArea="name-input"
          {...register("name", {
            pattern: {
              value: /[a-z]+/i,
              message: "Enter your name like 'Igor'",
            },
          })}
        />
        {errors.name && (
          <ErrorNotification gridArea="name-error">{errors.name.message}</ErrorNotification>
        )}

        <FormInputLabel htmlFor="update-user-email" gridArea="email">
          Email
        </FormInputLabel>
        <FormInput
          id="update-user-email"
          type="email"
          placeholder="Your email"
          gridArea="email-input"
          {...register("email", {
            pattern: {
              value: emailRegex,
              message: `Looks like email you entered is not valid, 
               please check it, or consider using another one`,
            },
          })}
        />
        {errors.email && (
          <ErrorNotification gridArea="email-error">{errors.email.message}</ErrorNotification>
        )}
      </ProfileInputGroup>

      <PasswordInputGroup>
        <Title titleGrade={2} text="Password" gridArea="password-title" />
        <FormInputLabel htmlFor="update-user-current-password" gridArea="password">
          Password
        </FormInputLabel>
        <FormInput
          id="update-user-current-password"
          type="password"
          placeholder="Current password"
          gridArea="password-input"
          {...register("password", {
            required: "Please enter your current password",
            min: {
              value: 6,
              message: "Your password must contain at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <ErrorNotification gridArea="password-error">{errors.password.message}</ErrorNotification>
        )}

        <FormInputLabel htmlFor="update-user-new-password" gridArea="new-password">
          New password
        </FormInputLabel>
        <FormInput
          id="update-user-new-password"
          type="password"
          placeholder="Your new password"
          gridArea="new-password-input"
          {...register("newPassword", {
            min: {
              value: 6,
              message: "Your password must contain at least 6 characters",
            },
          })}
        />
        {errors.newPassword && (
          <ErrorNotification gridArea="new-password-error">
            {errors.newPassword.message}
          </ErrorNotification>
        )}

        <FormInputLabel htmlFor="update-user-confirm-password" gridArea="confirm">
          Confirm new password
        </FormInputLabel>
        <FormInput
          id="update-user-confirm-password"
          type="password"
          placeholder="Confirm password"
          gridArea="confirm-input"
          {...register("confirm", {
            min: {
              value: 6,
              message: "Your password must contain at least 6 characters",
            },
          })}
        />
        {errors.confirm && (
          <ErrorNotification gridArea="confirm-error">{errors.confirm.message}</ErrorNotification>
        )}
      </PasswordInputGroup>

      <ButtonGroup>
        <SubmitButton type="submit">
          {isLoading ? <ClipLoader loading={isLoading} color={Color.White} /> : "Submit"}
        </SubmitButton>
        <CancelButton type="button" onClick={onCancelClick}>
          Cancel
        </CancelButton>
      </ButtonGroup>

      <Modal
        isOpen={isModalOpen}
        status={requestMessage ? "error" : "success"}
        message={requestMessage ? requestMessage : "User has been successfully updated!"}
        handler={toggleIsModalOpen}
      />
    </StyledUpdateUserForm>
  );
};
