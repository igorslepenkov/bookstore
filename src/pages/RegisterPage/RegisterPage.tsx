import { Page, SignUpForm } from "../../components";
import { Title } from "../../components";

export const RegisterPage = () => {
  return (
    <Page>
      <Title titleGrade={1} text="Register" />
      <SignUpForm />
    </Page>
  );
};
