import { Page } from "../../components";
import { Title } from "../../components";

export const SearchPage = () => {
  const searchPattern = "Begginers";
  return (
    <Page>
      <Title titleGrade={1} text={`"${searchPattern}" search result`} />
    </Page>
  );
};
