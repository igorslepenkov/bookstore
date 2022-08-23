import { Page } from "../../components/Page";
import { Title } from "../../components/Title";

export const SearchPage = () => {
  const searchPattern = "Begginers";
  return (
    <Page>
      <Title titleGrade={1} text={`"${searchPattern}" search result`} />
    </Page>
  );
};
