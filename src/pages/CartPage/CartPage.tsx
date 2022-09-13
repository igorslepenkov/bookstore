import { Page } from "../../components";
import { Title } from "../../components";
import { CartCard } from "../../components/CartCard/CartCard";
import { getCart } from "../../store";
import { useAppSelector } from "../../store/hooks";
import { CartList, NothingToShow } from "./style";

export const CartPage = () => {
  const cartBooks = useAppSelector(getCart);
  return (
    <Page>
      <Title titleGrade={1} text="Your cart" />
      {cartBooks.length > 0 ? (
        <CartList>
          {cartBooks.map((cartObj) => (
            <CartCard book={cartObj.book} key={cartObj.book.isbn13} />
          ))}
        </CartList>
      ) : (
        <NothingToShow>No books in cart</NothingToShow>
      )}
    </Page>
  );
};
