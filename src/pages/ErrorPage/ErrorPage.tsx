import { Page } from "../../components";
import { Title } from "../../components";

export const ErrorPage = () => {
  return (
    <Page>
      <Title
        titleGrade={1}
        text="Sorry some error occured on the server side, please try again laiter"
      />
    </Page>
  );
};
