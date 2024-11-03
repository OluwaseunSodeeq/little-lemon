import React from "react";
import styled from "styled-components";
import { Heading } from "../ui/Heading";

const FooterCon = styled.div`
  @media (max-width: 450px) {
    display: inline-block;
    padding: 0;
  }
`;
const FooterUl = styled.ul``;
const Footeritems = styled.li`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: capitalize;
  color: var(--pureWhite);
  letter-spacing: 1.5px;
  font-family: var(--markazi);

  @media (max-width: 450px) {
    margin-left: 1rem;
  }
`;
function FooterContent({ content }) {
  const { heading, contentArray } = content;
  return (
    <FooterCon>
      <Heading as="h4">{heading}</Heading>
      <FooterUl>
        {contentArray.map((item) => (
          <Footeritems key={item}>{item}</Footeritems>
        ))}
      </FooterUl>
    </FooterCon>
  );
}

export default FooterContent;
