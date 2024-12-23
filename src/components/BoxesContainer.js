import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 2px solid blue;
  width: 100%;
`;

const ItemsContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  border: 2px solid red;
`;

const Item = styled.div`
  width: 150px;
  height: 150px;
  margin-right: -100px;
  transition: transform 0.3s ease, z-index 0.3s ease, margin 0.3s ease;
  position: relative;
  z-index: ${({ index }) => 10 - index}; /* Higher index appears on top */
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Enlarges the hovered item */
    z-index: 20; /* Brings the item on top of others */
    margin-left: 0; /* Removes overlap when hovered */
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: red;
  border: none;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  &:hover {
    background: darkred;
  }
`;

// React Component
const BoxesContainer = ({ menuArray }) => {
  console.log(menuArray);
  const [items, setItems] = useState(menuArray);
  //   const [items, setItems] = useState([
  //     { id: 1, img: "images/menuImages/special_pasta.jpg" },
  //     { id: 2, img: "images/menuImages/special_pasta.jpg" },
  //     { id: 3, img: "images/menuImages/special_pasta.jpg" },
  //     { id: 4, img: "images/menuImages/special_pasta.jpg" },
  //     { id: 5, img: "images/menuImages/special_pasta.jpg" },
  //   ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <h2>{items.length} items are selected!</h2>
      <ItemsContainer>
        {items.map((item, index) => (
          <Item key={item.id} index={index}>
            <img src={item.image} alt={`Item ${item.id}`} />
            <CloseButton onClick={() => removeItem(item.id)}>X</CloseButton>
          </Item>
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default BoxesContainer;
