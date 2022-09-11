import { KeyboardEventHandler, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { Title } from "../../components";
import { UpdateUserForm } from "../../components/UpdateUserForm";
import { StyledArrowLeft } from "./style";

export const AccountPage = () => {
  const navigate = useNavigate();
  const handleBackArrowClick: MouseEventHandler<SVGSVGElement> = () => {
    navigate(-1);
  };
  const handleBackArrowKeyDown: KeyboardEventHandler<SVGSVGElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      navigate(-1);
    }
  };
  return (
    <Page>
      <StyledArrowLeft
        onClick={handleBackArrowClick}
        onKeyDown={handleBackArrowKeyDown}
        tabIndex={1}
      />
      <Title titleGrade={1} text="Account" />
      <UpdateUserForm />
    </Page>
  );
};
