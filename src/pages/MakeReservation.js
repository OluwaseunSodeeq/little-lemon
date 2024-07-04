import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import useMenusContext from "../Contexts/Menu/useMenusContext";
import { makeReservationSchemas } from "../schemas";

import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import CustomButton from "../components/CustomButton";
import { Button } from "../ui/Button";
import { LeftBackCard, RightBackCard } from "./BackPageOfMakeReservation";
import {
  BackCardLeft,
  BackCardRight,
  FrontCardLeft,
  FrontCardRight,
  ReservationCard,
} from "../components/FlippingCard";

// NOTE for the challenge ofSelect and option tags
/*
NOTE:
The native <option> tag inside a <select> element has limited styling capabilities and cannot be styled the same way as other HTML elements due to browser restrictions. For example, you cannot control the width of the individual <option> elements or apply complex layouts like flexbox to them. This is why creating a custom dropdown component is often necessary to achieve advanced styling and layout requirements.
However, if you still prefer to use the native <select> and <option> elements and try to achieve the layout to some extent, you can make use of custom CSS for the <select> and control its appearance, though it won't be as flexible.
Example Using Native <select> and <option>
You can style the <select> element and wrap it in a container with overflow handling, but keep in mind that individual <option> elements cannot be styled beyond some basic properties like font, color, and padding.

Limitation
Even with the custom styling, individual <option> elements within the <select> cannot be styled to have a custom width, complex layouts, or hover effects as you can with a custom dropdown component.

Alternative Solution
If you need full control over the dropdown's appearance and behavior, creating a custom component using <div> and other HTML elements, as demonstrated in the previous examples, is the recommended approach. This gives you the flexibility to style and position each option as needed, without the limitations of the native <select> and <option> elements.
The purpose of the assessment
The primary purpose of the assessment is to check your knowledge and understanding of the key learning objectives of the course.  The assessment is designed to help you make sure that you can apply what you have learned. Most importantly, the assessment helps you establish which topics you have mastered and which topics require further focus before completing the course.

What to expect from the peer review 
You will combine the skills and knowledge that you applied throughout the course to write code to create a form that handles table bookings for the Little Lemon restaurant.  Your table bookings form will all be assessed in the peer review submission, and you will assess some of your peers' projects too.

What to expect from the final graded quiz 
The quiz only tests the topics you have already covered, so there shouldn't be any surprises. Please review the feedback on your answers and, where necessary, go back and work through the topics that require further attention. 

web app and website:
The key difference between a website, and web application is the level of interactivity, and dynamic content. The easy way to remember this is that a website is more informative and a web application is more interactive.

css
 layout is one of the most important components of designing a good web page because layouts help divide a page into different sections, thus making the page more presentable.
 grid and flexbox: They added more flexibility and dimensionality with better options for fine tuning specific sections of a web page
 
 ui testing:UI testing is a complex area with many techniques and strategies used by developers. The strategies you will use will often be determined by business priority, customer requirements, and project timelines.
 Cross-device testing involves the manual or automated use of different devices to test the layout and behavior of an application. 

 JS
 Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.

 In programming, there is something known as the programming paradigms. You can think of this as a classification, a style or just a general way to write code.
 oop:revolves around the idea of organizing our programs using objects to group related data and functionality.
 This is in contrast to the functional programming approach, where the data used in the app needs to be kept separate from functions that operate on that data.
 REACT
 State is simply all the values of all the variables your app is working with at any given point in time.
 Hooks are functions that were introduced in React version 16.8. They let you hook into React state and lifestyle features from components
 // 

//The Capstone project at the center of this course is based on a scenario involving the restaurant Little Lemon. In particular, the owners of Little Lemon have received negative feedback on the reserve a table function on the Little Lemon website. Users are confused about how to use it and unhappy with how it looks and functions. That's where you come in. In this course, you will learn how to build a responsive web app and demonstrate multiple skills by coding a modern front end application that allows users to reserve a table for the Little Lemon restaurant. You will be guided through the process of building the app, combining all the skills and technologies you've learned throughout this program to solve the problem at hand. Now, you may be wondering how this course is structured. Well, the course consists of four modules: starting the project, project foundations, project functionality, and project assessment. In the first module, starting the project, you'll do exactly that. Get started with the capstone project. This will include a brief recap of and links to content in the React course you have already completed, you'll start by setting up a coding environment, a React project, and a Git repository for the project on GitHub so you are ready to proceed with the development phase of the project. You'll also briefly recap UX and UI linking to content in a previously completed course, principles of UX and UI. You will employ UX, UI methodologies in your project, including preparing the wireframes and applying design fundamentals using Figma. In Module 2, which covers the project foundations, you'll use semantic HTML, meta tags and Open Graph Protocol to create a modern HTML structure for the web app. You will also use CSS grid and other CSS styling to set up a responsive, clear, and inviting website. Not to mention your recap the basics of React. Module 3 is all about the functionality of your project. You'll code the table booking system using React. The importance of UX and form validation will be covered with an exercise where you will validate forms in your app and write unit tests. Plus accessibility and UX, UI usability evaluation will be covered along with an exercise in both to ensure your interface complies with both issues. In the final module, project assessment, you'll have the chance to reflect on all you have learned and your accomplishments. More specifically, you'll have the opportunity to perform a self-review of your project and a peer review of other learners solutions for the little lemon reserve a table web app assessing the projects in terms of usability, accessibility, design, and code. With all of this to look forward to, I'm sure you are eager to begin. Let's get started with your project.

*/
// Container for Reservation Section
const MakeReservationStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 0 3rem;
`;

// Form Container
const Form = styled.form`
  position: relative;
  width: 100%;
  height: auto;
`;

// Radio Buttons Container
// const RadioButtonsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5rem;

//   @media (max-width: 450px) {
//     flex-direction: column;
//     gap: 0rem;
//     margin-bottom: 2rem;
//   }
// `;

// Individual Radio Button
const RadioButton = styled.div`
  /* width: 48%; */
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* padding-left: 1rem; */
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 450px) {
    width: 100%;
    padding-left: 0rem;
    gap: 0rem;
    margin-bottom: 1rem;
  }
`;

// Radio Label
const Radiolabel = styled.label`
  width: 55%;
  position: relative;
  cursor: pointer;
  font-size: 1.8rem;
  color: var(--pureWhite);
  font-family: var(--karla);
  font-weight: var(--bold);
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 450px) {
    width: 100%;
    justify-content: start;
  }
`;

// Radio Input
const RadioInput = styled.input`
  background-color: var(--deepGreen);
  border: 1px solid var(--pureWhite);
  display: none;

  &:checked + ${Radiolabel} > span::after {
    opacity: 1;
  }
`;

// Span for Radio Input Customization
const RadioSpan = styled.span`
  position: absolute;
  background-color: var(--deepGreen);
  border: 2px solid var(--pureWhite);
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  display: inline-block;
  right: 0;
  top: 0.25rem;

  &::after {
    content: "";
    display: block;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--pureWhite);
    opacity: 0;
    transition: opacity 0.2s;

    @media (max-width: 450px) {
      height: 0.8rem;
      width: 0.8rem;
    }
  }

  @media (max-width: 450px) {
    left: 50%;
    height: 1.8rem;
    width: 1.8rem;
  }
`;

// Container for Bottom Section
const BottomContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 5rem;
  padding: 2rem;

  @media (max-width: 450px) {
    padding-left: 4rem;
  }
`;

// Selected Menu Image Styled
const SelectedmenuImageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  & > span {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 2rem;
    top: 2rem;
    background-color: red;
    color: var(--pureWhite);
    border-radius: 50%;
    font-family: var(--karla);

    @media (max-width: 450px) {
      left: 0.5rem;
    }
  }
`;
const SelectedmenuImageContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 23rem;
  height: 23rem;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 0;
  transition: all 0.2s;

  right: ${({ index }) => index * 7}rem;

  &:hover {
    z-index: 20;
    /* transform: scale(1.05) translateY(-0.5rem); */
  }

  @media (max-width: 450px) {
    width: 16rem;
    height: 23rem;
    left: 20%;
    transform: translate(-50%, -50%);
    margin-right: 0%;
    margin-left: ${({ index }) => index * 3}rem;
  }
`;

const MenusContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 25rem;
  width: 100%;
  margin: 0 auto;

  &:hover ${SelectedmenuImageContainer}:not(:hover) {
    z-index: 10;
    //  transform: scale(0.95) translateY(0);
  }
`;

const ButtonContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 3rem;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "date":
      return { ...state, date: action.payload };
    case "dinner":
      return { ...state, dinner: action.payload };
    case "occasion":
      return { ...state, occasion: action.payload };
    case "time":
      return { ...state, time: action.payload };
    case "seating":
      return { ...state, seating: action.payload };
    case "textArea":
      return { ...state, textArea: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

const initialState = {
  date: "",
  dinner: "",
  occasion: "",
  time: "",
  seating: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  textArea: "",
};

const CardLeft = styled.div`
  width: 50%;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
const CardRight = styled.div`
  width: 50%;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
const FlexedCard = styled.div`
  display: flex;
  column-gap: 5rem;

  @media (max-width: 450px) {
    flex-direction: column;
    /* row-gap: 3rem; */
  }
`;

const Headingtext = styled.span`
  margin-top: 3rem;
  border: none;
`;
const HidetheRightRadio = styled.div`
  display: block;

  @media (max-width: 450px) {
    display: none;
  }
`;
const ShowtheRightRadio = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: block;
  }
`;

function MakeReservation() {
  const { menus, selectedMenuHandler } = useMenusContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { date, occasion, dinner, seating, time } = state;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [turn, setTurn] = useState(false);

  const content = [
    {
      currentID: 0,
      label: "Date",
      beforeIcon: <CiCalendar style={{ fontSize: "3rem", color: "inherit" }} />,
      value: date || "Select Date",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "input",
      errorKey: "date",
      placeholder: "Select Date",
    },
    {
      currentID: 3,
      label: "Number of Diners",
      beforeIcon: (
        <IoPersonOutline style={{ fontSize: "3rem", color: "inherit" }} />
      ),
      value: dinner || "No. of Diners",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "select",
      options: [
        "1 Diner",
        "2 Diners",
        "3 Diners",
        "4 Diners",
        "5 Diners",
        "6 Diners",
        "7 Diners",
        "8 Diners",
        "9 Diners",
        "10 Diners",
      ],
      errorKey: "dinner",
      placeholder: "No. of Diners",
    },
    {
      currentID: 1,
      label: "Time",
      beforeIcon: (
        <LuAlarmClock style={{ fontSize: "3rem", color: "inherit" }} />
      ),
      value: time || "Select Time",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "select",
      options: ["Morning", "Afternoon", "Evening", "Night"],
      errorKey: "time",
      placeholder: "Select Time",
    },
    {
      currentID: 2,
      label: "Occasion",
      beforeIcon: (
        <LiaGlassCheersSolid style={{ fontSize: "3rem", color: "inherit" }} />
      ),
      value: occasion || "Occasion",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "select",
      options: ["Birthday", "Anniversary", "Graduation", "Other"],
      errorKey: "occasion",
      placeholder: "Occasion",
    },
  ];
  const dataArr = [
    {
      label: "First Name",
      id: "firstName",
      inputType: "text",
      itemId: 0,
      placeholder: "Oluwaseun",
    },
    {
      label: "Last Name",
      id: "lastName",
      inputType: "text",
      itemId: 1,
      placeholder: "Sodeeq",
    },
    {
      label: "Email",
      id: "email",
      inputType: "email",
      itemId: 2,
      placeholder: "ademolaoluwaseun90@gmail.com",
    },
    {
      label: "Phone Number",
      id: "tel",
      inputType: "tel",
      itemId: 3,
      placeholder: "8149428278",
      selectOptns: [
        { code: +234, countryAbbrev: "NG", country: "Nigeria" },
        { code: +1, countryAbbrev: "US", country: "United State of America" },
        { code: +91, countryAbbrev: "IN", country: "India" },
        { code: +44, countryAbbrev: "GB", country: "Great Britain" },
        { code: +86, countryAbbrev: "CN", country: "China" },
      ],
    },
  ];
  // const [flip, setFlip] = useState(false);
  const err = true;
  // console.log(flip, setFlip);
  const turnHandler = () => {
    console.log("Hello turn");
    setTurn((open) => !open);
  };

  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues: initialState,
      validationSchema: makeReservationSchemas,
      onSubmit: (values) => {
        // handle form submission
        console.log(values);

        if (3 > 2) {
          setTurn(true);
        }
      },
    });

  const handleFieldChange = (e) => {
    handleChange(e);
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const notinIsSelected = 0;
  const makeAnOrderMsg = (
    <Paragraph
      color="deepGreen"
      fontFamily="markazi"
      fontweight="deepBold"
      fontSize="xxxlarge"
    >
      Kindly make an Order!
    </Paragraph>
  );

  const orderArray = menus
    .flatMap((category) => {
      const { generalName, list } = category;
      return list.map((menu) => ({ ...menu, generalName: generalName }));
    })
    .filter((item) => item.selected)
    .map((menu, i) => {
      const { id, generalName, image, name } = menu;
      return (
        <SelectedmenuImageContainer index={i} key={i}>
          <SelectedmenuImageStyled>
            <img src={image} alt={name} />
            <span onClick={() => selectedMenuHandler(id, generalName)}>X</span>
          </SelectedmenuImageStyled>
        </SelectedmenuImageContainer>
      );
    });

  const cardLeftCards = content.filter(
    (customSelect) =>
      customSelect.errorKey === "date" || customSelect.errorKey === "occasion"
  );
  const cardRightCards = content.filter(
    (customSelect) =>
      customSelect.errorKey === "dinner" || customSelect.errorKey === "time"
  );
  console.log(errors.length);
  return (
    <Container as="section" type="makeReservation">
      <Container as="div" type="reservationHeading">
        <Content>
          <Paragraph
            fontSize="extraLarge"
            color="yellow"
            fontWeight="bold"
            fontFamily="karla"
          >
            <Headingtext>Reservations</Headingtext>
          </Paragraph>
        </Content>
      </Container>
      <Form
        onSubmit={(e) => {
          setFormSubmitted(true);
          handleSubmit(e);
        }}
      >
        <Container as="div" type="makeReservationTop">
          <Content>
            <>
              <MakeReservationStyled>
                <FlexedCard>
                  <CardLeft>
                    <ReservationCard turn={turn}>
                      <FrontCardLeft>
                        <ShowtheRightRadio>
                          <RadioButton>
                            <RadioInput
                              type="radio"
                              name="seating"
                              id="outdoor"
                              value="outdoor"
                              onChange={handleFieldChange}
                              checked={seating === "outdoor"}
                              onBlur={handleBlur}
                            />
                            <Radiolabel htmlFor="outdoor">
                              Outdoor seating <RadioSpan />
                            </Radiolabel>
                            {formSubmitted &&
                              errors.seating &&
                              touched.seating && (
                                <Paragraph fontSize="large" color="red">
                                  {errors.seating}
                                </Paragraph>
                              )}
                          </RadioButton>
                        </ShowtheRightRadio>

                        <RadioButton>
                          <RadioInput
                            type="radio"
                            name="seating"
                            id="indoor"
                            value="indoor"
                            onChange={handleFieldChange}
                            checked={seating === "indoor"}
                            onBlur={handleBlur}
                          />
                          <Radiolabel htmlFor="indoor">
                            Indoor seating <RadioSpan />
                          </Radiolabel>
                          {formSubmitted &&
                            errors.seating &&
                            touched.seating && (
                              <Paragraph fontSize="large" color="red">
                                {errors.seating}
                              </Paragraph>
                            )}
                        </RadioButton>
                        <CustomButton
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          date={date}
                          dinner={dinner}
                          occasion={occasion}
                          time={time}
                          errors={formSubmitted ? errors : {}}
                          dispatch={dispatch}
                          content={cardLeftCards}
                        />
                        {/* {cardLeftCards} */}
                      </FrontCardLeft>
                      <BackCardLeft>
                        <LeftBackCard
                          values={values}
                          handleChange={handleChange}
                          errors={errors}
                          touched={touched}
                          turn={turn}
                          dataArr={dataArr}
                        />
                      </BackCardLeft>
                    </ReservationCard>
                  </CardLeft>

                  <CardRight>
                    <ReservationCard turn={turn}>
                      <FrontCardRight>
                        <HidetheRightRadio>
                          <RadioButton>
                            <RadioInput
                              type="radio"
                              name="seating"
                              id="outdoor"
                              value="outdoor"
                              onChange={handleFieldChange}
                              checked={seating === "outdoor"}
                              onBlur={handleBlur}
                            />
                            <Radiolabel htmlFor="outdoor">
                              Outdoor seating <RadioSpan />
                            </Radiolabel>
                            {formSubmitted &&
                              errors.seating &&
                              touched.seating && (
                                <Paragraph fontSize="large" color="red">
                                  {errors.seating}
                                </Paragraph>
                              )}
                          </RadioButton>
                        </HidetheRightRadio>

                        <CustomButton
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          date={date}
                          dinner={dinner}
                          occasion={occasion}
                          time={time}
                          errors={formSubmitted ? errors : {}}
                          dispatch={dispatch}
                          content={cardRightCards}
                        />
                        {/* {cardRightCards} */}
                      </FrontCardRight>
                      <BackCardRight>
                        <RightBackCard
                          values={values}
                          handleChange={handleChange}
                          errors={errors}
                          touched={touched}
                          turn={turn}
                          dataArr={dataArr}
                        />
                      </BackCardRight>
                    </ReservationCard>
                  </CardRight>
                </FlexedCard>
              </MakeReservationStyled>

              {/* <BackPageOfMakeReservation
                values={values}
                handleChange={handleChange}
                dispatch={dispatch}
                errors={errors}
                touched={touched}
                turn={turn}
              /> */}
            </>
            <ButtonContainer>
              {err ? (
                <Button type="button" onClick={turnHandler}>
                  Next &gt;&gt;&gt;
                </Button>
              ) : (
                <Button>Confirm Reservation</Button>
              )}
            </ButtonContainer>
          </Content>
        </Container>

        <Container as="div" type="makeReservationBottom">
          <Content>
            <BottomContainerStyled>
              {orderArray.length > notinIsSelected && (
                <Paragraph
                  color="deepGreen"
                  fontFamily="markazi"
                  fontweight="deepBold"
                  fontSize="xxxlarge"
                >
                  {orderArray.length} items{" "}
                  {orderArray.length === 1 ? "is" : "are"} selected!
                </Paragraph>
              )}
              <MenusContainer>
                {orderArray.length === 0 ? makeAnOrderMsg : orderArray}
              </MenusContainer>
              <ButtonContainer>
                {err ? (
                  <Button type="button" onClick={turnHandler}>
                    Next &gt;&gt;&gt;
                  </Button>
                ) : (
                  //   <Button onClick={() => setFlip((open) => !open)}>
                  //   Next &gt;&gt;&gt;
                  // </Button>
                  <Button>Confirm Reservation</Button>
                )}
              </ButtonContainer>
            </BottomContainerStyled>
          </Content>
        </Container>
      </Form>
    </Container>
  );
}

export default MakeReservation;

// import React, { useReducer, useState } from "react";
// import styled from "styled-components";
// import { Container } from "../ui/Container";
// import { Content } from "../ui/Content";
// import { Paragraph } from "../ui/Paragraph";
// import CustomButton from "../components/CustomButton";
// import { Button } from "../ui/Button";
// import BackPageOfMakeReservation from "./BackPageOfMakeReservation";
// import { useFormik } from "formik";
// import { makeReservationSchemas } from "../schemas";
// import useMenusContext from "../Contexts/Menu/useMenusContext";

// // NOTE for the challenge ofSelect and option tags
// /*
// NOTE:
// The native <option> tag inside a <select> element has limited styling capabilities and cannot be styled the same way as other HTML elements due to browser restrictions. For example, you cannot control the width of the individual <option> elements or apply complex layouts like flexbox to them. This is why creating a custom dropdown component is often necessary to achieve advanced styling and layout requirements.
// However, if you still prefer to use the native <select> and <option> elements and try to achieve the layout to some extent, you can make use of custom CSS for the <select> and control its appearance, though it won't be as flexible.
// Example Using Native <select> and <option>
// You can style the <select> element and wrap it in a container with overflow handling, but keep in mind that individual <option> elements cannot be styled beyond some basic properties like font, color, and padding.

// Limitation
// Even with the custom styling, individual <option> elements within the <select> cannot be styled to have a custom width, complex layouts, or hover effects as you can with a custom dropdown component.

// Alternative Solution
// If you need full control over the dropdown's appearance and behavior, creating a custom component using <div> and other HTML elements, as demonstrated in the previous examples, is the recommended approach. This gives you the flexibility to style and position each option as needed, without the limitations of the native <select> and <option> elements.
// The purpose of the assessment
// The primary purpose of the assessment is to check your knowledge and understanding of the key learning objectives of the course.  The assessment is designed to help you make sure that you can apply what you have learned. Most importantly, the assessment helps you establish which topics you have mastered and which topics require further focus before completing the course.

// What to expect from the peer review
// You will combine the skills and knowledge that you applied throughout the course to write code to create a form that handles table bookings for the Little Lemon restaurant.  Your table bookings form will all be assessed in the peer review submission, and you will assess some of your peers' projects too.

// What to expect from the final graded quiz
// The quiz only tests the topics you have already covered, so there shouldn't be any surprises. Please review the feedback on your answers and, where necessary, go back and work through the topics that require further attention.

// web app and website:
// The key difference between a website, and web application is the level of interactivity, and dynamic content. The easy way to remember this is that a website is more informative and a web application is more interactive.

// css
//  layout is one of the most important components of designing a good web page because layouts help divide a page into different sections, thus making the page more presentable.
//  grid and flexbox: They added more flexibility and dimensionality with better options for fine tuning specific sections of a web page

//  ui testing:UI testing is a complex area with many techniques and strategies used by developers. The strategies you will use will often be determined by business priority, customer requirements, and project timelines.
//  Cross-device testing involves the manual or automated use of different devices to test the layout and behavior of an application.

//  JS
//  Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.

//  In programming, there is something known as the programming paradigms. You can think of this as a classification, a style or just a general way to write code.
//  oop:revolves around the idea of organizing our programs using objects to group related data and functionality.
//  This is in contrast to the functional programming approach, where the data used in the app needs to be kept separate from functions that operate on that data.
//  REACT
//  State is simply all the values of all the variables your app is working with at any given point in time.
//  Hooks are functions that were introduced in React version 16.8. They let you hook into React state and lifestyle features from components
//  //

// The Capstone project at the center of this course is based on a scenario involving the restaurant Little Lemon. In particular, the owners of Little Lemon have received negative feedback on the reserve a table function on the Little Lemon website. Users are confused about how to use it and unhappy with how it looks and functions. That's where you come in. In this course, you will learn how to build a responsive web app and demonstrate multiple skills by coding a modern front end application that allows users to reserve a table for the Little Lemon restaurant. You will be guided through the process of building the app, combining all the skills and technologies you've learned throughout this program to solve the problem at hand. Now, you may be wondering how this course is structured. Well, the course consists of four modules: starting the project, project foundations, project functionality, and project assessment. In the first module, starting the project, you'll do exactly that. Get started with the capstone project. This will include a brief recap of and links to content in the React course you have already completed, you'll start by setting up a coding environment, a React project, and a Git repository for the project on GitHub so you are ready to proceed with the development phase of the project. You'll also briefly recap UX and UI linking to content in a previously completed course, principles of UX and UI. You will employ UX, UI methodologies in your project, including preparing the wireframes and applying design fundamentals using Figma. In Module 2, which covers the project foundations, you'll use semantic HTML, meta tags and Open Graph Protocol to create a modern HTML structure for the web app. You will also use CSS grid and other CSS styling to set up a responsive, clear, and inviting website. Not to mention your recap the basics of React. Module 3 is all about the functionality of your project. You'll code the table booking system using React. The importance of UX and form validation will be covered with an exercise where you will validate forms in your app and write unit tests. Plus accessibility and UX, UI usability evaluation will be covered along with an exercise in both to ensure your interface complies with both issues. In the final module, project assessment, you'll have the chance to reflect on all you have learned and your accomplishments. More specifically, you'll have the opportunity to perform a self-review of your project and a peer review of other learners solutions for the little lemon reserve a table web app assessing the projects in terms of usability, accessibility, design, and code. With all of this to look forward to, I'm sure you are eager to begin. Let's get started with your project.

// */
// // Container for Reservation Section
// const MakeReservationStyled = styled.div`
//   width: 100%;
//   height: auto;
//   padding: 2rem 0 3rem;
//   display: inline-block;
//   /* overflow-y: hidden; */
// `;

// // Form Container
// const Form = styled.form`
//   position: relative;
//   width: 100%;
//   height: auto;
// `;

// // Radio Buttons Container
// const RadioButtonsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5rem;

//   @media (max-width: 450px) {
//     flex-direction: column;
//     gap: 0rem;
//     margin-bottom: 2rem;
//   }
// `;

// // Individual Radio Button
// const RadioButton = styled.div`
//   width: 48%;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
//   padding-left: 1rem;
//   display: flex;
//   justify-content: start;
//   flex-direction: column;
//   gap: 2rem;

//   @media (max-width: 450px) {
//     width: 100%;
//     padding-left: 0rem;
//     gap: 0rem;
//     margin-bottom: 1rem;
//   }
// `;

// // Radio Label
// const Radiolabel = styled.label`
//   width: 55%;
//   position: relative;
//   cursor: pointer;
//   font-size: 1.8rem;
//   color: var(--pureWhite);
//   font-family: var(--karla);
//   font-weight: var(--bold);
//   display: flex;
//   align-items: center;
//   justify-content: start;

//   @media (max-width: 450px) {
//     width: 100%;
//     justify-content: start;
//   }
// `;

// // Radio Input
// const RadioInput = styled.input`
//   background-color: var(--deepGreen);
//   border: 1px solid var(--pureWhite);
//   display: none;

//   &:checked + ${Radiolabel} > span::after {
//     opacity: 1;
//   }
// `;

// // Span for Radio Input Customization
// const RadioSpan = styled.span`
//   position: absolute;
//   background-color: var(--deepGreen);
//   border: 2px solid var(--pureWhite);
//   height: 2.2rem;
//   width: 2.2rem;
//   border-radius: 50%;
//   display: inline-block;
//   right: 0;
//   top: 0.25rem;

//   &::after {
//     content: "";
//     display: block;
//     height: 0.8rem;
//     width: 0.8rem;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: var(--pureWhite);
//     opacity: 0;
//     transition: opacity 0.2s;

//     @media (max-width: 450px) {
//       height: 0.8rem;
//       width: 0.8rem;
//     }
//   }

//   @media (max-width: 450px) {
//     left: 50%;
//     height: 1.8rem;
//     width: 1.8rem;
//   }
// `;

// // Container for Bottom Section
// const BottomContainerStyled = styled.div`
//   position: relative;
//   width: 100%;
//   height: auto;
//   margin: 0 auto;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   column-gap: 5rem;
//   padding: 2rem;

//   @media (max-width: 450px) {
//     padding-left: 4rem;
//   }
// `;

// // Selected Menu Image Styled
// const SelectedmenuImageStyled = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   cursor: pointer;

//   & > img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 1rem;
//   }

//   & > span {
//     width: 2rem;
//     height: 2rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     right: 2rem;
//     top: 2rem;
//     background-color: red;
//     color: var(--pureWhite);
//     border-radius: 50%;
//     font-family: var(--karla);

//     @media (max-width: 450px) {
//       left: 0.5rem;
//     }
//   }
// `;
// const SelectedmenuImageContainer = styled.div`
//   position: absolute;
//   z-index: 10;
//   width: 23rem;
//   height: 23rem;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   padding: 1rem 0;
//   transition: all 0.2s;

//   right: ${({ index }) => index * 7}rem;

//   &:hover {
//     z-index: 20;
//     /* transform: scale(1.05) translateY(-0.5rem); */
//   }

//   @media (max-width: 450px) {
//     width: 16rem;
//     height: 23rem;
//     left: 20%;
//     transform: translate(-50%, -50%);
//     margin-right: 0%;
//     margin-left: ${({ index }) => index * 3}rem;
//   }
// `;

// const MenusContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   height: 25rem;
//   width: 100%;
//   margin: 0 auto;

//   &:hover ${SelectedmenuImageContainer}:not(:hover) {
//     z-index: 10;
//     //  transform: scale(0.95) translateY(0);
//   }
// `;

// const ButtonContainer = styled.div`
//   display: inline-block;
//   text-align: center;
//   margin-top: 3rem;
// `;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "date":
//       return { ...state, date: action.payload };
//     case "dinner":
//       return { ...state, dinner: action.payload };
//     case "occasion":
//       return { ...state, occasion: action.payload };
//     case "time":
//       return { ...state, time: action.payload };
//     case "seating":
//       return { ...state, seating: action.payload };
//     case "textArea":
//       return { ...state, textArea: action.payload };
//     default:
//       throw new Error("Unknown action type");
//   }
// };

// const initialState = {
//   date: "",
//   dinner: "",
//   occasion: "",
//   time: "",
//   seating: "",
//   firstName: "",
//   lastName: "",
//   phoneNumber: "",
//   email: "",
//   textArea: "",
// };

// // // Cards Style
// // const CardFace = styled.css`
// //   position: absolute;
// //   left: 0;
// //   top: 0;
// //   width: 100%;
// //   height: 100%;
// //   -webkit-backface-visibility: hidden;
// //   backface-visibility: hidden;
// //   transition: all 0.8s ease;
// //   overflow: hidden;
// //   border: 2px solid blue;
// // `;
// // const FrontCard = styled.div`
// //   ${CardFace}
// //   background-color: var(--deepGreen);
// //   /* z-index: 30; */
// //   /* transform: ${({ turn }) => (turn ? "rotateY(-180deg)" : "")}; */
// //   /* transform: ${({ turn }) => (turn ? "rotateY(-180deg)" : "")}; */
// // `;
// // const BackCard = styled.div`
// //   ${CardFace}
// //   background-color: var(--deepGreen);
// //   transform: rotateY(180deg);
// //   /* transform: ${({ turn }) =>
// //     turn ? "rotateY(0deg)" : "rotateY(-180deg)"}; */
// // `;

// // const ReservationCard = styled.div`
// //   position: relative;
// //   height: 50rem;
// //   height: auto;

// //   /* perspective: 150rem;
// //   -moz-perspective: 150rem; */

// //   border: 5px solid red;

// //   &:hover ${FrontCard} {
// //     transform: rotateY(-180deg);
// //   }
// //   &:hover ${BackCard} {
// //     transform: rotateY(0deg);
// //   }
// // `;

// const CardFace = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
//   transition: transform 0.8s ease;
//   overflow: hidden;
// `;

// const FrontCard = styled(CardFace)`
//   background-color: var(--deepGreen);
//   transform: rotateY(0deg);
// `;

// const BackCard = styled(CardFace)`
//   background-color: var(--deepGreen);
//   transform: rotateY(180deg);
// `;

// const ReservationCard = styled.div`
//   position: relative;
//   width: 100%;
//   height: 50rem;
//   perspective: 150rem;
//   overflow: "hidden";

//   /* &:hover ${FrontCard} {
//     transform: rotateY(180deg);
//   }

//   &:hover ${BackCard} {
//     transform: rotateY(0deg);
//   } */
// `;

// const Headingtext = styled.span`
//   margin-top: 3rem;
// `;

// function MakeReservation() {
//   const { menus, selectedMenuHandler } = useMenusContext();
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { date, occasion, dinner, seating, time } = state;
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [turn, setTurn] = useState(false);
//   const [flip, setFlip] = useState(false);
//   const err = true;

//   const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
//     useFormik({
//       initialValues: initialState,
//       validationSchema: makeReservationSchemas,
//       onSubmit: (values) => {
//         // handle form submission
//         console.log(values);

//         if (3 > 2) {
//           setTurn(true);
//         }
//       },
//     });

//   const handleFieldChange = (e) => {
//     handleChange(e);
//     dispatch({ type: e.target.name, payload: e.target.value });
//   };

//   const notinIsSelected = 0;
//   const makeAnOrderMsg = (
//     <Paragraph
//       color="deepGreen"
//       fontFamily="markazi"
//       fontweight="deepBold"
//       fontSize="xxxlarge"
//     >
//       Kindly make an Order!
//     </Paragraph>
//   );

//   const orderArray = menus
//     .flatMap((category) => {
//       const { generalName, list } = category;
//       return list.map((menu) => ({ ...menu, generalName: generalName }));
//     })
//     .filter((item) => item.selected)
//     .map((menu, i) => {
//       const { id, generalName, image, name } = menu;
//       return (
//         <SelectedmenuImageContainer index={i} key={i}>
//           <SelectedmenuImageStyled>
//             <img src={image} alt={name} />
//             <span onClick={() => selectedMenuHandler(id, generalName)}>X</span>
//           </SelectedmenuImageStyled>
//         </SelectedmenuImageContainer>
//       );
//     });

//   console.log(errors.length);
//   return (
//     <Container as="section" type="makeReservation">
//       <Container as="div" type="reservationHeading">
//         <Content>
//           <Paragraph
//             fontSize="extraLarge"
//             color="yellow"
//             fontWeight="bold"
//             fontFamily="karla"
//           >
//             <Headingtext>Reservations</Headingtext>
//           </Paragraph>
//         </Content>
//       </Container>
//       <Form
//         onSubmit={(e) => {
//           setFormSubmitted(true);
//           handleSubmit(e);
//         }}
//       >
//         <Container as="div" type="makeReservationTop">
//           <Content>
//             <ReservationCard>
//               <FrontCard>
//                 <MakeReservationStyled>
//                   <>
//                     <RadioButtonsContainer>
//                       <RadioButton>
//                         <RadioInput
//                           type="radio"
//                           name="seating"
//                           id="indoor"
//                           value="indoor"
//                           onChange={handleFieldChange}
//                           checked={seating === "indoor"}
//                           onBlur={handleBlur}
//                         />
//                         <Radiolabel htmlFor="indoor">
//                           Indoor seating <RadioSpan />
//                         </Radiolabel>
//                         {formSubmitted && errors.seating && touched.seating && (
//                           <Paragraph fontSize="large" color="red">
//                             {errors.seating}
//                           </Paragraph>
//                         )}
//                       </RadioButton>
//                       <RadioButton>
//                         <RadioInput
//                           type="radio"
//                           name="seating"
//                           id="outdoor"
//                           value="outdoor"
//                           onChange={handleFieldChange}
//                           checked={seating === "outdoor"}
//                           onBlur={handleBlur}
//                         />
//                         <Radiolabel htmlFor="outdoor">
//                           Outdoor seating <RadioSpan />
//                         </Radiolabel>
//                         {formSubmitted && errors.seating && touched.seating && (
//                           <Paragraph fontSize="large" color="red">
//                             {errors.seating}
//                           </Paragraph>
//                         )}
//                       </RadioButton>
//                     </RadioButtonsContainer>
//                     <CustomButton
//                       handleBlur={handleBlur}
//                       handleChange={handleChange}
//                       date={date}
//                       dinner={dinner}
//                       occasion={occasion}
//                       time={time}
//                       errors={formSubmitted ? errors : {}}
//                       dispatch={dispatch}
//                     />
//                   </>
//                 </MakeReservationStyled>
//                 {/* </Content>
//             </Container> */}
//               </FrontCard>

//               <BackCard turn={turn}>
//                 <BackPageOfMakeReservation
//                   values={values}
//                   handleChange={handleChange}
//                   dispatch={dispatch}
//                   errors={errors}
//                   touched={touched}
//                 />
//               </BackCard>
//             </ReservationCard>
//           </Content>
//         </Container>

//         <Container as="div" type="makeReservationBottom">
//           <Content>
//             <BottomContainerStyled>
//               {orderArray.length > notinIsSelected && (
//                 <Paragraph
//                   color="deepGreen"
//                   fontFamily="markazi"
//                   fontweight="deepBold"
//                   fontSize="xxxlarge"
//                 >
//                   {orderArray.length} items{" "}
//                   {orderArray.length === 1 ? "is" : "are"} selected!
//                 </Paragraph>
//               )}
//               <MenusContainer>
//                 {orderArray.length === 0 ? makeAnOrderMsg : orderArray}
//               </MenusContainer>
//               <ButtonContainer>
//                 {err ? (
//                   <Button onClick={setFlip((open) => !open)}>Next &gt;&gt;&gt; </Button>
//                 ) : (
//                   <Button>Confirm Reservation</Button>
//                 )}
//               </ButtonContainer>
//             </BottomContainerStyled>
//           </Content>
//         </Container>
//       </Form>
//     </Container>
//   );
// }

// export default MakeReservation;
