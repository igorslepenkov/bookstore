import { useTotal } from "../../hooks/useTotal";
import { FormSubmitButton } from "../FormSubmitButton";
import { Title } from "../Title";
import { CartTotalInfo, StyledCartTotal, TitleItem, TotalValue, Value } from "./style";

export const CartTotal = () => {
  const { sum, vat, total } = useTotal();
  return (
    <StyledCartTotal>
      <CartTotalInfo>
        <TitleItem>Sum total</TitleItem>
        <Value>{sum.toFixed(2)} $</Value>
        <TitleItem>VAT</TitleItem>
        <Value>{vat.toFixed(2)} $</Value>
        <Title titleGrade={2} text="Total" />
        <TotalValue>{total.toFixed(2)} $</TotalValue>
      </CartTotalInfo>
      <FormSubmitButton isRequestPending={false} />
    </StyledCartTotal>
  );
};
