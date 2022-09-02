import { useEffect } from "react";
import { BooksList } from "../../components";
import { Page } from "../../components";
import { Title } from "../../components";
import ClipLoader from "react-spinners/ClipLoader";
import { SubscribeToNewsletter } from "../../components/SubscribeToNewsletter";
import { Navigate } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { fetchNewBooks } from "../../store/features/newBooksSlice";
import { useAppDispatch } from "../../store/hooks";
import { getError, getIsLoading, getNewBooks } from "../../store";

export const MainPage = () => {
  const loading = getIsLoading();
  const error = getError();
  const newBooks = getNewBooks();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  if (error) {
    return <Navigate to={RoutesUrl.ERROR} replace={false} />;
  }

  if (loading) {
    return <ClipLoader loading={loading} />;
  }

  return (
    <Page>
      <Title titleGrade={1} text="New Releases Books" />
      <BooksList books={newBooks || []} />
      <SubscribeToNewsletter />
    </Page>
  );
};
