import { useParams } from "react-router-dom";
import { BookListPagination, BooksList, Page } from "../../components";
import { Title } from "../../components";
import { useGetSearchBooks } from "../../store";

export const SearchPage = () => {
  const params = useParams();
  const books = useGetSearchBooks();
  return (
    <Page>
      <Title titleGrade={1} text={`"${params.pattern}" search result`} />
      <BooksList books={books || []} />
      <BookListPagination />
    </Page>
  );
};
