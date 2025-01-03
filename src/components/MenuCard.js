import React from "react";
import styled, { css } from "styled-components";
import { FlexedDiv } from "../styles/FlexedDiv";

const constHeight = css`
  height: 30rem;
`;
const constHeightt = css`
  height: 25rem;
`;
const CardTexttContainer = styled.div`
  position: relative;
  ${constHeightt}
  background-color: var(--white);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-lg);
`;

const NameStyled = styled.span`
  font-size: 1.8rem;
  font-weight: var(--semi-bold);
  font-family: var(--karla);
  color: var(--black);
`;
const PriceStyled = styled.span`
  font-size: 1.6rem;
  font-weight: var(--semi-bold);
  font-family: var(--karla);
  color: var(--yellow);
`;
const DescriptionStyled = styled.p`
  font-size: 1.6rem;
  font-weight: var(--medium);
  font-family: var(--karla);
  color: var(--black);
  margin-top: 1.5rem;
  font-style:italic;
`;
const IconContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--black);

  cursor: pointer;
  &:hover {
    background-color: var(--yellow);
    color: var(--pureWhite);
    border-radius: var(--border-radius-lg);
    padding: 0.5rem 1rem;
  }
`;
const IconText = styled.span`
  font-weight: var(--semi-bold);
  font-family: var(--karla);
`;
const Icon = styled.span`
  font-weight: var(--bold);
  font-size: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
`;

const ImageStyled = styled.div`
  ${constHeight}
`;
const CardContainer = styled.div`
  cursor: pointer;
`;
function MenuCard({ card }) {
  const { list } = card;
  const { name, description, price, image } = list[0];

  return (
    <CardContainer>
      <ImageStyled>
        <img src={image} alt={name} />
      </ImageStyled>
      <CardTexttContainer>
        <FlexedDiv type="grid">
          <NameStyled>{name}</NameStyled>
          <PriceStyled>${price}</PriceStyled>
        </FlexedDiv>
        <DescriptionStyled>{description}</DescriptionStyled>
        <IconContainer>
          <IconText>Order delivery</IconText>
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9662 5.73305L5.42372 12.7479V20.3189C5.42372 20.5149 5.50182 20.7029 5.64085 20.8415C5.77987 20.9801 5.96844 21.058 6.16505 21.058L11.3572 21.0446C11.5531 21.0436 11.7407 20.9653 11.879 20.8268C12.0172 20.6883 12.0948 20.5009 12.0948 20.3055V15.8841C12.0948 15.6881 12.1729 15.5001 12.3119 15.3614C12.4509 15.2228 12.6395 15.145 12.8361 15.145H15.8015C15.9981 15.145 16.1866 15.2228 16.3257 15.3614C16.4647 15.5001 16.5428 15.6881 16.5428 15.8841V20.3022C16.5425 20.3995 16.5614 20.4959 16.5986 20.5858C16.6357 20.6757 16.6902 20.7575 16.7591 20.8264C16.828 20.8953 16.9098 20.9499 16.9999 20.9872C17.09 21.0245 17.1866 21.0437 17.2841 21.0437L22.4744 21.058C22.671 21.058 22.8596 20.9801 22.9986 20.8415C23.1376 20.7029 23.2157 20.5149 23.2157 20.3189V12.7428L14.6751 5.73305C14.5747 5.65236 14.4496 5.60836 14.3206 5.60836C14.1917 5.60836 14.0666 5.65236 13.9662 5.73305ZM27.4599 10.5009L23.5864 7.31756V0.919002C23.5864 0.77198 23.5278 0.63098 23.4235 0.527019C23.3193 0.423059 23.1778 0.364655 23.0304 0.364655H20.4357C20.2883 0.364655 20.1468 0.423059 20.0426 0.527019C19.9383 0.63098 19.8797 0.77198 19.8797 0.919002V4.27327L15.7315 0.870497C15.3334 0.543884 14.8339 0.365307 14.3183 0.365307C13.8028 0.365307 13.3032 0.543884 12.9052 0.870497L1.1768 10.5009C1.1205 10.5473 1.07392 10.6043 1.03972 10.6687C1.00553 10.733 0.984381 10.8034 0.977497 10.8759C0.970612 10.9484 0.978123 11.0216 0.999601 11.0912C1.02108 11.1608 1.0561 11.2255 1.10267 11.2816L2.28417 12.7137C2.33061 12.77 2.38773 12.8166 2.45227 12.8509C2.5168 12.8851 2.58748 12.9064 2.66025 12.9134C2.73303 12.9203 2.80647 12.913 2.87638 12.8916C2.94629 12.8703 3.01129 12.8354 3.06767 12.789L13.9662 3.83903C14.0666 3.75834 14.1917 3.71433 14.3206 3.71433C14.4496 3.71433 14.5747 3.75834 14.6751 3.83903L25.5741 12.789C25.6304 12.8354 25.6953 12.8703 25.7651 12.8917C25.8349 12.9132 25.9082 12.9206 25.981 12.9138C26.0537 12.9069 26.1243 12.8858 26.1889 12.8517C26.2534 12.8176 26.3106 12.7712 26.3571 12.7151L27.5386 11.283C27.5851 11.2266 27.62 11.1615 27.6412 11.0916C27.6625 11.0217 27.6696 10.9483 27.6623 10.8756C27.655 10.8029 27.6333 10.7324 27.5986 10.6681C27.5638 10.6038 27.5167 10.547 27.4599 10.5009Z"
                fill="currentColor"
              />
            </svg>
          </Icon>
        </IconContainer>
      </CardTexttContainer>
    </CardContainer>
  );
}

export default MenuCard;
