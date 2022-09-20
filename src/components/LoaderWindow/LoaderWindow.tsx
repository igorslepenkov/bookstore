import { ClipLoader } from "react-spinners";
import { StyledLoaderWindow } from "./style";

interface IProps {
  loading: boolean;
}

export const LoaderWindow = ({ loading }: IProps) => {
  return (
    <StyledLoaderWindow>
      <ClipLoader loading={loading} />
    </StyledLoaderWindow>
  );
};
