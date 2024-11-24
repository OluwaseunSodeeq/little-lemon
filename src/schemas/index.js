import * as Yup from "yup";

export const makeReservationSchemas = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  dinner: Yup.string().required("Number of diners is required"),
  time: Yup.string().required("Time is required"),
  occasion: Yup.string()
    .oneOf(
      ["Birthday", "Anniversary", "Graduation", "Other"],
      "Invalid occasion"
    )
    .required("Occasion is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  tel: Yup.string()
    .matches(/^\d+$/, "Phone number must be digits only")
    .required("Phone number is required"),
  countryCode: Yup.string().required("Country code is required"),
  textArea: Yup.string(),
});
//

// export const makeReservationSchemas = Yup.object().shape({
//   date: Yup.date().required("Date is required"),
//   dinner: Yup.string()
//     .required("Number of diners is required")
//     .when("time", {
//       is: (time) => time === "Night", // Conditional rule
//       then: Yup.string().matches(
//         /^[1-10] Diners$/,
//         "Only 1-10 diners allowed at night"
//       ),
//     }),
//   time: Yup.string().required("Time is required"),
//   occasion: Yup.string()
//     .oneOf(
//       ["Birthday", "Anniversary", "Graduation", "Other"],
//       "Invalid occasion"
//     )
//     .required("Occasion is required"),
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   tel: Yup.string()
//     .required("Phone number is required")
//     .matches(/^\d+$/, "Phone number must contain only digits")
//     .min(10, "Phone number must be at least 10 digits")
//     .max(10, "Phone number must be at most 10 digits"),
// });
// .matches(/^[0-9]+$/, "Phone number must be numeric")
// export const makeReservationSchemas = yup.object().shape({
//   date: yup.string().required("Please select a valid date"),
//   dinner: yup.string().required("Kindly pick the number of dinners"),
//   occasion: yup.string().required("Please select an occasion"),
//   seating: yup.string().required("Please select where to seat"),
//   time: yup.string().required("Please select a time"),

//   firstName: yup.string().min(3).required("First name is required"),
//   lastName: yup.string().min(3).required("Last name is required"),
//   textArea: yup.string().min(5),
//   // textArea: yup.string().min(5).required("Kindly leave a message"),

//   email: yup
//     .string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   tel: yup
//     .string()
//     .required("Phone number is required")
//     .matches(/^[0-9]+$/, "Phone number must be numeric")
//     .min(10, "Phone number must be at least 10 digits")
//     .max(10, "Phone number must be at most 10 digits"),
// });
