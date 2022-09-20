import { MouseEventHandler, useState } from "react";
import { authorsLister } from "../../utils";
import { StyledBookDetailsTabs, Tab, TabContent, TabContentText, TabList } from "./style";

interface IProps {
  desc: string;
  authors: string;
}

export const BookDetailsTabs = ({ desc, authors }: IProps) => {
  const [activeTab, setActiveTab] = useState<string>("desc");

  const handleTabChange: MouseEventHandler<HTMLLIElement> = ({ currentTarget }) => {
    if (currentTarget.dataset.tabType) {
      setActiveTab(currentTarget.dataset.tabType);
    }
  };

  return (
    <StyledBookDetailsTabs>
      <TabList>
        <Tab
          active={activeTab === "desc" ? true : false}
          key="desc"
          data-tab-type="desc"
          onClick={handleTabChange}
        >
          Description
        </Tab>
        <Tab
          active={activeTab === "authors" ? true : false}
          key="authors"
          data-tab-type="authors"
          onClick={handleTabChange}
        >
          Authors
        </Tab>
      </TabList>
      <TabContent>
        {activeTab === "desc" && <TabContentText>{desc}</TabContentText>}
        {activeTab === "authors" &&
          authorsLister(authors).map((author, idx) => (
            <TabContentText key={idx}>{author}</TabContentText>
          ))}
      </TabContent>
    </StyledBookDetailsTabs>
  );
};
