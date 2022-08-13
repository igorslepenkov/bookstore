import { Page } from "../Page";
import { Title } from "../Title";

export const SearchPage = () => {
  const searchPattern = "Begginers";
  return (
    <Page>
      <Title titleGrade={1} text={`"${searchPattern}" search result`} />
    </Page>
  );
};
