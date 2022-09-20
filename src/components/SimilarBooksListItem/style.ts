import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, indentsConstructor, Indent, Media } from "../../ui";
import { fonts } from "../../ui";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledBookListItem = styled(motion.li)`
  min-width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Media.MD} {
    min-width: 328px;
  }

  ${Media.LG} {
    min-width: 352px;
  }
`;

export const BookImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
  background-color: ${Color.Blue};
  ${indentsConstructor.create(Indent.MB, 6)}
`;

export const StyledTitle = styled.h3`
  flex-grow: 1;
  margin: 0;
  ${fonts.h3}
  color: ${Color.Black};
  text-align: center;
`;

export const BookImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const BookAuthorsAndPublisher = styled.p`
  ${indentsConstructor.create(Indent.MB, 3)}
  ${indentsConstructor.create(Indent.MT, 8)}
  ${fonts.bodyRegular}
  color: ${Color.Grey};
`;
