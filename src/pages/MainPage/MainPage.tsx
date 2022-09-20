import { useEffect } from "react";
import { BooksList } from "../../components";
import { Page } from "../../components";
import { Title } from "../../components";
import { SubscribeToNewsletter } from "../../components/SubscribeToNewsletter";
import { Navigate } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { fetchNewBooks } from "../../store/features/newBooksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getError, getIsLoading, getNewBooks } from "../../store";
import { LoaderWindow } from "../../components/LoaderWindow";

export const MainPage = () => {
  const loading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);
  const newBooks = useAppSelector(getNewBooks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  if (error) {
    return <Navigate to={RoutesUrl.ERROR} replace={false} />;
  }

  if (loading) {
    return <LoaderWindow loading={loading} />;
  }

  return (
    <Page>
      <Title titleGrade={1} text="New Releases Books" />
      <BooksList books={newBooks || []} />
      <SubscribeToNewsletter />
    </Page>
  );
};
