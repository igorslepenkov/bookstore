import { useLocation } from "react-router-dom";
import { ConfirmResetPasswordForm, FormWrapper, Page } from "../../components";
import { getFirebaseParamsFromUrl } from "../../utils";

export const ConfirmPasswordResetPage = () => {
  let { search } = useLocation();
  const firebaseParams = getFirebaseParamsFromUrl(search);
  if (firebaseParams) {
    const { oobCode } = firebaseParams;

    return (
      <Page>
        <FormWrapper>
          <ConfirmResetPasswordForm oobCode={oobCode ? oobCode : "none"} />
        </FormWrapper>
      </Page>
    );
  } else return null;
};
