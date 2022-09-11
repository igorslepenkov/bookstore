import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
import { FormWrapper, Page, SignInForm, SignUpForm } from "../../components";
import { clearErrors } from "../../store/";
import { useAppDispatch } from "../../store/hooks";
import { FormTab, FormTabsGroup } from "./style";

export const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState<string>("signup");
  const dispatch = useAppDispatch();

  const handleTabClick: MouseEventHandler<HTMLHeadingElement> = ({
    currentTarget,
  }) => {
    if (currentTarget.dataset.tab) {
      const { tab } = currentTarget.dataset;
      dispatch(clearErrors());
      setActiveTab(tab);
    }
  };

  const handleTabKeyDown: KeyboardEventHandler<HTMLHeadingElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      if (event.currentTarget.dataset.tab) {
        const { tab } = event.currentTarget.dataset;
        dispatch(clearErrors());
        setActiveTab(tab);
      }
    }
  };

  return (
    <Page>
      <FormWrapper>
        <FormTabsGroup>
          <FormTab
            isActive={activeTab === "signup" ? true : false}
            data-tab="signup"
            onClick={handleTabClick}
            tabIndex={0}
            onKeyDown={handleTabKeyDown}
          >
            Sign Up
          </FormTab>
          <FormTab
            isActive={activeTab === "signin" ? true : false}
            data-tab="signin"
            onClick={handleTabClick}
            tabIndex={0}
            onKeyDown={handleTabKeyDown}
          >
            Sign In
          </FormTab>
        </FormTabsGroup>
        {activeTab === "signup" ? <SignUpForm /> : <SignInForm />}
      </FormWrapper>
    </Page>
  );
};
