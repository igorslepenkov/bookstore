import { KeyboardEventHandler, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { Title } from "../../components";
import { UpdateUserForm } from "../../components/UpdateUserForm";
import { persistor, signOut } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { ButtonsWrapper, SignOutButton, StyledArrowLeft } from "./style";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleBackArrowClick: MouseEventHandler<SVGSVGElement> = () => {
    navigate(-1);
  };
  const handleBackArrowKeyDown: KeyboardEventHandler<SVGSVGElement> = (event) => {
    if (event.key === "Enter") {
      navigate(-1);
    }
  };

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = async (event) => {
    if (event) {
      await dispatch(signOut());
      await persistor.purge();
    }
  };

  return (
    <Page>
      <ButtonsWrapper>
        <StyledArrowLeft
          onClick={handleBackArrowClick}
          onKeyDown={handleBackArrowKeyDown}
          tabIndex={1}
        />
        <SignOutButton type="button" onClick={handleSignOut}>
          Sign Out
        </SignOutButton>
      </ButtonsWrapper>
      <Title titleGrade={1} text="Account" />
      <UpdateUserForm />
    </Page>
  );
};
