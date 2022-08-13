import { Page } from "../Page";
import { Title } from "../Title";

export const BookPage = () => {
  const bookName = "Robots";
  return (
    <Page>
      <Title titleGrade={1} text={bookName} />
    </Page>
  );
};
