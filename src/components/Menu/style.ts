import styled from "styled-components";
import { motion } from "framer-motion";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";
import { SearchLogoIcon as Logo } from "../../assets";
import { Link } from "react-router-dom";

export const StyledMenuWrapper = styled(motion.div)`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const MenuTop = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 10px;
  background-color: ${Color.White};

  ${Media.SM} {
    width: 368px;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${Color.White};

  ${Media.SM} {
    width: 368px;
  }
`;

export const SearchField = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const SearchLogo = styled(Logo)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translate(50%, -50%);
`;

export const MenuLinksList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  ${indentsConstructor.create(Indent.MT, 2)}
`;

export const MenuLink = styled(Link)`
  ${fonts.h1}
  text-decoration: none;
  color: ${Color.Black};
`;

export const Button = styled.button`
  width: 100%;
  ${indentsConstructor.create(Indent.MB, 4)}
  ${indentsConstructor.create(Indent.MT, 4)}
  padding: 15px 0;
  ${fonts.h3}
  color: ${Color.White};
  letter-spacing: 0.05em;
  border: none;
  background-color: ${Color.Black};
  cursor: pointer;
`;
