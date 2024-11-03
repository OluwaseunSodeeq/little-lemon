import React from "react";
import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import useMenusContext from "../Contexts/Menu/useMenusContext";
import { Button } from "../ui/Button";

const BookedSummaryContainer = styled.div`
  /* display: inline-block; */
  padding: 1rem 2rem;
  max-width: 50rem;
  position: relative;
  border: 2px solid red;
  margin: 0 auto;
`;
const ContentContainer = styled.div`
  padding: ${({ top }) => (top ? "2rem 0" : "")};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;
const EachUserData = styled.div`
  display: inline-block;
  padding: 0 1rem;
  color: var(--deepGreen);

  & > p {
    display: inline;
    font-weight: var(--bold);
    font-size: 1.8rem;

    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
  & > span {
    font-style: italic;
    font-weight: var(--medium);
    font-size: 1.8rem;

    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
`;
const CloseBtn = styled.span`
  color: red;
  font-size: 1.8rem;
  font-weight: var(--bold);
  position: absolute;
  right: 3rem;
  top: 3rem;
  cursor: pointer;
`;
// const MenuDataContainer = styled.div``;
function BookedSummary({ onClose }) {
  const { userSelectedItems } = useMenusContext();
  const userBookedData = {
    countryCode: "+44",
    date: "2024-07-10",
    dinner: "9 Diners",
    email: "ademolaoluwaseun90@gmail.com",
    firstName: "Oluwaseun",
    lastName: "Sodeeq",
    occasion: "Birthday",
    seating: "indoor",
    tel: "1234567890",
    textArea: "I love to read.",
    time: "Morning",
  };

  const {
    firstName,
    lastName,
    email,
    tel: phoneNumber,
    seating,
    date,
    time,
    occasion,
    dinner,
    textArea,
    countryCode,
  } = userBookedData;
  const name = `${firstName} ${" "} ${lastName}`;
  const menuDataArr = userSelectedItems;
  const totalItemsSelected = userSelectedItems?.length;

  const totalPrice = userSelectedItems?.reduce(
    (acc, eachMenu) => acc + eachMenu.price,
    0
  );

  return (
    <BookedSummaryContainer>
      <CloseBtn onClick={onClose}>X</CloseBtn>
      <Heading as="h1">Booked Summary</Heading>
      <ContentContainer top="top">
        <EachUserData>
          <p>Name</p>: <span>{name}</span>
        </EachUserData>
        <EachUserData>
          <p>Email</p>: <span>{email}</span>
        </EachUserData>
        <EachUserData>
          <p>Phone No</p>:{" "}
          <span>
            {countryCode}
            {phoneNumber}
          </span>
        </EachUserData>
        <EachUserData>
          <p>Date</p>: <span>{date}</span>
        </EachUserData>
        <EachUserData>
          <p>Time</p>: <span>{time}</span>
        </EachUserData>
        <EachUserData>
          <p>No. of Diners</p>: <span>{dinner}</span>
        </EachUserData>
        <EachUserData>
          <p>Occasion</p>: <span>{occasion}</span>
        </EachUserData>
        <EachUserData>
          <p>Seating</p>: <span>{seating}</span>
        </EachUserData>
        {textArea?.length > 0 && (
          <EachUserData>
            <p>Special Request:</p>:<span>{textArea}</span>
          </EachUserData>
        )}
      </ContentContainer>
      <ContentContainer>
        {menuDataArr.map((each) => {
          const { name, price } = each;
          return (
            <EachUserData>
              <p>{name}</p>: <span>{price}</span>
            </EachUserData>
          );
        })}
        <EachUserData>
          <p>{totalItemsSelected} items</p>: <span>Agg {totalPrice}</span>
        </EachUserData>
      </ContentContainer>
      <Paragraph color="deepGreen">
        {firstName}, Kindly confirm your Reservation
      </Paragraph>
      <Button>Confirm!</Button>
    </BookedSummaryContainer>
  );
}

export default BookedSummary;
