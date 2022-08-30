import { ClipLoader } from "react-spinners";
import { Color } from "../../ui";
import { SubmitButton } from "./style";

interface IProps {
  isRequestPending: boolean;
}

export const FormSubmitButton = ({ isRequestPending }: IProps) => {
  return (
    <SubmitButton type="submit">
      {isRequestPending ? (
        <ClipLoader loading={isRequestPending} color={Color.White} />
      ) : (
        "Submit"
      )}
    </SubmitButton>
  );
};
