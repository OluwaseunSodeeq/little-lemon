import styled from "styled-components";

import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { LiaGlassCheersSolid } from "react-icons/lia";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 0.4rem;
`;
const CustomButtonStyled = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--pureWhite);
  border-radius: var(--border-radius-md);

  & > *:not(span:nth-child(2)) {
    color: var(--deepGreen);
    font-size: 2.4rem;
    font-weight: var(--bold);

    &:hover {
      color: var(--yellow);
    }
  }
  & > span:nth-child(2) {
    color: var(--deepGreen);
    font-size: 1.6rem;
    font-weight: var(--bold);
    font-family: var(--karla);
  }
`;
const ButtonLabel = styled.label`
  font-size: 1.6rem;
  color: var(--pureWhite);
`;
const CustomButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 5rem;

  width: 45%;
`;
function CustomButton() {
  const content = [
    {
      label: "Date",
      beforeIcon: <CiCalendar />,
      value: "Select Date",
      AfterIcon: <RiArrowDropDownLine />,
    },
    {
      label: "Number of Dinners",
      beforeIcon: <IoPersonOutline />,
      value: "No. of Dinners",
      AfterIcon: <RiArrowDropDownLine />,
    },
    {
      label: "Ocassion",
      beforeIcon: <LiaGlassCheersSolid />,
      value: "Occasion",
      AfterIcon: <RiArrowDropDownLine />,
    },
    {
      label: "Time",
      beforeIcon: <LuAlarmClock />,
      value: "Select Time",
      AfterIcon: <RiArrowDropDownLine />,
    },
  ];

  return (
    <CustomButtonsContainer>
      {content.map((btn) => {
        const { beforeIcon, value, AfterIcon, label } = btn;
        return (
          <ButtonContainer>
            <ButtonLabel>{label}</ButtonLabel>
            <CustomButtonStyled>
              <span>{beforeIcon}</span>
              <span>{value}</span>
              <span>{AfterIcon}</span>
            </CustomButtonStyled>
          </ButtonContainer>
        );
      })}
    </CustomButtonsContainer>
  );
}

export default CustomButton;
