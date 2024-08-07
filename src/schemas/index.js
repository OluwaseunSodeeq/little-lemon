import * as yup from "yup";

export const makeReservationSchemas = yup.object().shape({
  date: yup.string().required("Please select a valid date"),
  dinner: yup.string().required("Kindly pick the number of dinners"),
  occasion: yup.string().required("Please select an occasion"),
  seating: yup.string().required("Please select where to seat"),
  time: yup.string().required("Please select a time"),

  firstName: yup.string().min(3).required("First name is required"),
  lastName: yup.string().min(3).required("Last name is required"),
  textArea: yup.string().min(5),
  // textArea: yup.string().min(5).required("Kindly leave a message"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  tel: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be at most 10 digits"),
});
