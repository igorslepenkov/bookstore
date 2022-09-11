import { Title } from "../../components";
import { StyledNotFoundPage } from "./style";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Title
        titleGrade={1}
        text="Sorry, path that you entered is deprecated or does not exist"
      />
    </StyledNotFoundPage>
  );
};
