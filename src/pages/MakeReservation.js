import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { TiShoppingCart } from "react-icons/ti";

import { useFormik } from "formik";
import { makeReservationSchemas } from "../schemas";
import { menuArr } from "../Contexts/Menu/defaultMenusArray";

import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import CustomButton from "../components/CustomButton";
import { Button } from "../ui/Button";
import { LeftBackCard, RightBackCard } from "./BackPageOfMakeReservation";
import {
  BackCardLeft,
  BackCardRight,
  CardLeft,
  CardRight,
  FlexedCard,
  FrontCardLeft,
  FrontCardRight,
  ReservationCard,
} from "../components/FlippingCard";
import { Heading } from "../ui/Heading";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";

// Container for Reservation Section
const MakeReservationStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  /* border: 3px solid red; */
`;

// Form Container
const Form = styled.form`
  position: relative;
  width: 100%;
  height: auto;
`;

// Individual Radio Button
const RadioButton = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
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

// =======================Container for Bottom Section=====================
const BottomContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2rem;
    height: 2rem;
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
  width: 25rem;
  height: 25rem;
  padding: 1rem 0;
  transition: all 0.2s;

  /* First Approach */
  /* position: absolute;
  z-index: 10;
  width: 23rem;
  height: 23rem;
  top: 14rem;
  transform: translate(-50%, -50%);
  padding: 1rem 0;
  transition: all 0.2s;
  right: ${({ index }) => index * 7}rem; */

  /* left: ${({ index }) => index * 5}rem; */

  &:hover {
    z-index: 20;
  }

  @media (max-width: 450px) {
    width: 23rem;
    height: 25rem;

    /* First approach */
    /* width: 16rem;
    height: 23rem;
    left: 20%;
    transform: translate(-50%, -50%);
    margin-right: 0%;
    margin-left: ${({ index }) => index * 3}rem; */
  }
`;
const MenusContainer = styled.div`
  position: relative;
  height: ${({ $empty }) => ($empty ? "auto" : "25rem")};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  padding: 20px 0px 0px;

  @media (max-width: 450px) {
    padding: 10px 0px 0px;
    column-gap: 1rem;
    row-gap: 1rem;
  }
`;

const ButtonContainer = styled.div`
  position: ${({ $next }) => ($next ? "absolute" : "relative")};
  bottom: ${({ $next }) => ($next ? "2rem" : "0")};
  left: ${({ $next }) => ($next ? "50%" : "")};
  transform: ${({ $next }) => ($next ? "translate(-50%,-50%)" : "")};
  z-index: 30;
  display: inline-block;
  text-align: center;

  display: flex;
  justify-content: center;
`;

const Headingtext = styled.div`
  padding-top: 2rem;
`;

const HidetheRightRadio = styled.div`
  display: block;

  @media (max-width: 760px) {
    display: none;
  }
`;

const ShowtheRightRadio = styled.div`
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const BottomBtnsContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;

  @media (max-width: 450px) {
    bottom: 3.5rem;
  }
`;
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid green; */
  margin-top: -8rem;

  @media (max-width: 450px) {
    /* margin-top: 0; */
  }
`;

function MakeReservation() {
  const [turn, setTurn] = useState(false);
  const {
    menus,
    selectedMenuHandler,
    isAnyItemSelected,
    setremount,
    resetHandler,
    setUserBookedData,
    setMenus,

    state,
    dispatch,
    setContent,
    content,
    formSubmitted,
    setFormSubmitted,
  } = useCombinedContexts();

  // const {
  //   state,
  //   dispatch,
  //   resetHandler,
  //   setContent,
  //   content,
  //   formSubmitted,
  //   setFormSubmitted,
  // } = useReservationsContext();

  // const {
  //   menus,
  //   selectedMenuHandler,
  //   isAnyItemSelected,
  //   setremount,
  //   setUserBookedData,
  //   // setUserSelectedItems,
  //   setMenus,
  // } = useMenusContext();
  // console.log(isAnyItemSelected);

  // const { date, occasion, dinner, time } = state;

  //Dynamically update content when state changes

  useEffect(() => {
    setContent((prevContent) =>
      prevContent.map((item) => ({
        ...item,
        value: state[item.name] || item.placeholder,
      }))
    );
    // setremount((change) => !change);
  }, [state, setContent, setremount]);

  const formik = useFormik({
    initialValues: state,
    validationSchema: makeReservationSchemas,
    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values, { setSubmitting }) => {
      const errors = formik.validateForm(values);

      if (Object.keys(errors).length === 0) {
        try {
          toast.success("Orders submitted successfully! 🎉");
          // setUserSelectedItems([]);
          setUserBookedData((prevData) => [...prevData, values]);
          setFormSubmitted(true);
          resetHandler(); // Clear form
          setMenus(menuArr);
          // clearSelectedArray(orderArray);
        } catch (error) {
          console.error("Error during form submission:", error);
          toast.error("Something went wrong. Please try again.");
        }
      } else {
        Object.entries(errors).forEach(([field, message]) =>
          toast.error(`${field}: ${message}`)
        );
        setFormSubmitted(false);
      }

      setSubmitting(false);
    },
  });

  // Destructure required properties
  const { errors, handleBlur, handleSubmit, touched, values, isSubmitting } =
    formik;

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
    formik.handleChange(e);
    setFormSubmitted(false);
  };

  const turnCardHandler = () => {
    setTurn((open) => !open);
  };
  const dataArr = [
    {
      label: "First Name",
      id: "firstName",
      inputType: "text",
      placeholder: "Oluwaseun",
    },
    {
      label: "Last Name",
      id: "lastName",
      inputType: "text",
      placeholder: "Sodeeq",
    },
    {
      label: "Email",
      id: "email",
      inputType: "email",
      placeholder: "ademolaoluwaseun90@gmail.com",
    },
    {
      label: "Phone Number",
      id: "tel",
      inputType: "tel",
      placeholder: "8149428278",
      selectOptns: [
        { code: "+234", countryAbbrev: "NG", country: "Nigeria" },
        {
          code: "+1",
          countryAbbrev: "US",
          country: "United States of America",
        },
        { code: "+91", countryAbbrev: "IN", country: "India" },
        { code: "+44", countryAbbrev: "GB", country: "Great Britain" },
        { code: "+86", countryAbbrev: "CN", country: "China" },
      ],
    },
  ];

  const orderArray =
    menus
      .flatMap((category) => {
        const { generalName, list } = category;
        return list.map((menu) => ({ ...menu, generalName }));
      })
      .filter((item) => item.selected)
      .map((menu, i) => {
        const { id, generalName, image, name } = menu;
        return (
          <SelectedmenuImageContainer index={i} key={id}>
            <SelectedmenuImageStyled>
              <img src={image} alt={name} />
              <span onClick={() => selectedMenuHandler(id, generalName)}>
                X
              </span>
            </SelectedmenuImageStyled>
          </SelectedmenuImageContainer>
        );
      }) || [];

  const cardLeftCards = content.filter(
    (customSelect) =>
      customSelect.name === "date" || customSelect.name === "occasion"
  );

  const cardRightCards = content.filter(
    (customSelect) =>
      customSelect.name === "dinner" || customSelect.name === "time"
  );

  return (
    <Container as="section" type="makeReservation">
      <Container as="div" type="reservationHeading">
        <Content>
          <Headingtext>
            <Heading as="h1">Reservations</Heading>
          </Headingtext>
        </Content>
      </Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          setFormSubmitted(true);

          if (Object.keys(errors).length) {
            Object.keys(errors).forEach((field) => {
              toast.error(errors[field]);
            });
          }
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
                              checked={values.seating === "outdoor"}
                              onChange={handleFieldChange}
                              onBlur={handleBlur}
                            />
                            <Radiolabel htmlFor="outdoor">
                              Outdoor seating <RadioSpan />
                            </Radiolabel>
                            {errors.seating &&
                              touched.seating &&
                              formSubmitted && (
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
                            checked={values.seating === "indoor"}
                            onChange={handleFieldChange}
                            onBlur={handleBlur}
                          />
                          <Radiolabel htmlFor="indoor">
                            Indoor seating <RadioSpan />
                          </Radiolabel>
                          {errors.seating &&
                            touched.seating &&
                            formSubmitted && (
                              <Paragraph fontSize="large" color="red">
                                {errors.seating}
                              </Paragraph>
                            )}
                        </RadioButton>

                        <CustomButton
                          handleBlur={handleBlur}
                          handleChange={handleFieldChange}
                          errors={errors}
                          dispatch={dispatch}
                          content={cardLeftCards}
                          formSubmitted={formSubmitted}
                          values={values}
                        />
                      </FrontCardLeft>
                      <BackCardLeft>
                        <LeftBackCard
                          values={values}
                          handleChange={handleFieldChange}
                          errors={errors}
                          touched={touched}
                          turn={turn}
                          dataArr={dataArr}
                          turnCardHandler={turnCardHandler}
                          formSubmitted={formSubmitted}
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
                              id="Outdoor"
                              value="Outdoor"
                              checked={values.seating === "Outdoor"}
                              onChange={handleFieldChange}
                              onBlur={handleBlur}
                            />
                            <Radiolabel htmlFor="Outdoor">
                              Outdoor seating <RadioSpan />
                            </Radiolabel>
                            {errors.seating &&
                              touched.seating &&
                              formSubmitted && (
                                <Paragraph fontSize="large" color="red">
                                  {errors.seating}
                                </Paragraph>
                              )}
                          </RadioButton>
                        </HidetheRightRadio>

                        <CustomButton
                          handleBlur={handleBlur}
                          handleChange={handleFieldChange}
                          errors={errors}
                          dispatch={dispatch}
                          content={cardRightCards}
                          formSubmitted={formSubmitted}
                          values={values}
                        />
                      </FrontCardRight>
                      <BackCardRight>
                        <RightBackCard
                          values={values}
                          handleChange={handleFieldChange}
                          errors={errors}
                          touched={touched}
                          turn={turn}
                          dataArr={dataArr}
                          handleBlur={handleBlur}
                          formSubmitted={formSubmitted}
                        />
                      </BackCardRight>
                    </ReservationCard>
                  </CardRight>
                </FlexedCard>
              </MakeReservationStyled>
            </>
            <ButtonContainer $next={Boolean(turn)}>
              <Button
                $textColor="deepGreen"
                $backgroundColor="pureWhite"
                type="button"
                onClick={turnCardHandler}
              >
                Next &gt;&gt;&gt;
              </Button>
            </ButtonContainer>
          </Content>
        </Container>

        <Container as="div" type="makeReservationBottom">
          <Content>
            <BottomContainerStyled>
              {orderArray.length > 0 && (
                <Paragraph
                  color="deepGreen"
                  fontFamily="markazi"
                  fontWeight="deepBold"
                  fontSize="xxxlarge"
                >
                  {orderArray.length}{" "}
                  {orderArray.length === 1 ? "item" : "items"}{" "}
                  {orderArray.length === 1 ? "is" : "are"} selected!
                </Paragraph>
              )}
              <MenusContainer $empty={orderArray.length}>
                {orderArray.length === 0 ? (
                  <CartContainer>
                    <TiShoppingCart
                      style={{ fontSize: "5rem", color: "var(--deepGreen)" }}
                    />
                    <Paragraph
                      color="deepGreen"
                      fontFamily="markazi"
                      fontWeight="deepBold"
                      fontSize="xxxlarge"
                    >
                      Kindly make an Order!
                    </Paragraph>
                  </CartContainer>
                ) : (
                  orderArray
                )}
              </MenusContainer>
              <BottomBtnsContainer>
                <ButtonContainer>
                  {isAnyItemSelected.length ? (
                    <Button disabled={isSubmitting} type="submit">
                      Confirm Reservation
                    </Button>
                  ) : (
                    <Link to="/orderonline">
                      <Button disabled={isSubmitting} type="submit">
                        Go to Menu
                      </Button>
                    </Link>
                  )}
                </ButtonContainer>
              </BottomBtnsContainer>
            </BottomContainerStyled>
          </Content>
        </Container>
      </Form>
    </Container>
  );
}

export default MakeReservation;
// NOte:
// 1.
// 1.
// How React.lazy Works
// Normally, when you import a component like this:

// javascript
// Copy code
// import MyComponent from './MyComponent';
// The component is bundled into the main JavaScript file, and it gets loaded when the application starts, even if the component is not immediately visible to the user.

// When you use React.lazy:

// javascript
// Copy code
// const MyComponent = React.lazy(() => import('./MyComponent'));
// React will:

// Split the code for MyComponent into a separate chunk.
// Having multiple nested context providers increases rendering time. Consider combining related contexts or refactoring to avoid deeply nested providers.

// 2. Having multiple nested context providers increases rendering time. Consider combining related contexts or refactoring to avoid deeply nested providers.

// =======================
/*
===========1===============
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

===========2===============
NOTE:
The native <option> tag inside a <select> element has limited styling capabilities and cannot be styled the same way as other HTML elements due to browser restrictions. For example, you cannot control the width of the individual <option> elements or apply complex layouts like flexbox to them. This is why creating a custom dropdown component is often necessary to achieve advanced styling and layout requirements.
However, if you still prefer to use the native <select> and <option> elements and try to achieve the layout to some extent, you can make use of custom CSS for the <select> and control its appearance, though it won't be as flexible.
Example Using Native <select> and <option>
You can style the <select> element and wrap it in a container with overflow handling, but keep in mind that individual <option> elements cannot be styled beyond some basic properties like font, color, and padding.

Limitation
Even with the custom styling, individual <option> elements within the <select> cannot be styled to have a custom width, complex layouts, or hover effects as you can with a custom dropdown component.

Alternative Solution
If you need full control over the dropdown's appearance and behavior, creating a custom component using <div> and other HTML elements, as demonstrated in the previous examples, is the recommended approach. This gives you the flexibility to style and position each option as needed, without the limitations of the native <select> and <option> elements.
*/
// import useReservationsContext from "../Contexts/ReservationsContext/useReservationsContext";

// import { ZERO } from "../ui/Constant";

// NOTE for the challenge of Select and option tags
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
