import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import useMenusContext from "../Contexts/Menu/useMenusContext";

const BookedSummaryContainer = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  max-width: 50rem;
`;
const ContentContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
`;
const EachUserData = styled.div`
  display: inline-block;
  padding: 1rem;
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
// const MenuDataContainer = styled.div``;
function BookedSummary() {
  const { userSelectedItems, userBookedData } = useMenusContext();

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    seating,
    date,
    time,
    occasion,
    dinner,
    textArea,
  } = userBookedData;
  const name = `${firstName} + " " + ${lastName}`;
  const menuDataArr = userSelectedItems;
  const totalItemsSelected = userSelectedItems.length;

  const totalPrice = userSelectedItems.reduce(
    (acc, eachMenu) => acc + eachMenu.price,
    0
  );
  return (
    <BookedSummaryContainer>
      <Heading as="h1">Booked Summary</Heading>
      <ContentContainer>
        <EachUserData>
          <p>Name</p>: <span>{name}</span>
        </EachUserData>
        <EachUserData>
          <p>Email</p>: <span>{email}</span>
        </EachUserData>
        <EachUserData>
          <p>Phone No</p>: <span>{phoneNumber}</span>
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
        {textArea.length > 0 && (
          <EachUserData>
            <p>Special Request:</p>:<Paragraph>{textArea}</Paragraph>
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
          <p>${totalItemsSelected} items</p>: <span>Agg ${totalPrice}</span>
        </EachUserData>
      </ContentContainer>
    </BookedSummaryContainer>
  );
}

export default BookedSummary;
