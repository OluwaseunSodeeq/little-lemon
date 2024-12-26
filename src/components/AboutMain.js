import React from "react";
import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";

const AboutmainContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10rem;

  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;
  }
`;
const AboutmainContent = styled.div`
  width: 50%;
  padding: 0 5%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 950px) {
    padding: 0;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
const AboutmainImageDiv = styled.div`
  width: 45%;
  height: 30rem;

  & > img {
    width: 100%;
  }
  @media (max-width: 950px) {
    height: 23rem;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin-top: 5rem;
  }
`;
const Est = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Dash = styled.div`
  width: 2.5rem;
  height: 0.2rem;
  background-color: var(--yellow);
`;
const MissionDiv = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
function AboutMain() {
  return (
    <>
      <AboutmainContainer>
        <AboutmainContent>
          <Heading as="h6">Fill the Belly First</Heading>
          <Est>
            <Dash /> <Heading as="h5">EST.1998</Heading>
            <Dash />
          </Est>
          <Heading as="h1">A Legacy of Great Taste</Heading>

          <Paragraph color="deepGreen">
            Welcome to Little Lemon! Our restaurant has been a beloved part of
            the community for generations, founded by my parents with a vision
            to bring people together over delicious, home-cooked meals. Today, I
            proudly continue their legacy, blending traditional recipes with
            modern flavors. Little Lemon is the perfect spot for creating
            memories over flavorful, fresh dishes.
          </Paragraph>
        </AboutmainContent>

        <AboutmainImageDiv>
          {/* <img
            src="icons_assets/inside-of-restautant.png"
            alt="Inside of the restaurant "
          /> */}
        <img src="icons_assets/jpeg-optimizer_inside-of-restautant.png" alt="restauranfood" />

        </AboutmainImageDiv>
      </AboutmainContainer>

      <AboutmainContainer>
        <AboutmainImageDiv>
        <img src="images/about-images/jpeg-optimizer_restaurantchef.jpg" alt="Chef" />
          {/* <img src="icons_assets/restaurantchef.jpg" alt="Chef" /> */}
        </AboutmainImageDiv>
        <MissionDiv></MissionDiv>
        <AboutmainContent>
          <Heading as="h6">Mission, Values & Specialties</Heading>
          <Paragraph color="deepGreen">
            At Little Lemon, we're dedicated to serving freshly prepared,
            high-quality meals that cater to all tastes. From local delicacies
            to international favorites, our menu has something for everyone,
            including our signature dish: "African Food". We value tradition,
            hospitality, and the joy of sharing great food. Every bite is
            crafted with care to bring happiness to your table.
          </Paragraph>
        </AboutmainContent>
      </AboutmainContainer>
    </>
  );
}

export default AboutMain;
