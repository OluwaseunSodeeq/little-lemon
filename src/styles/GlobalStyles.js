import { createGlobalStyle } from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
const GlobalStyles = createGlobalStyle`

:root {
    --deepGreen: #495E57;
    --ash: #D9D9D9;
    --lightGreen: #48742C;
    --yellow: #F4CE14;
    --black: #333333;
    --white: #edefee;
    --pureWhite: #ffffff;
    --cream: #fbdabb;
    --orange-liked: #ee9972; 

    /* Font Family */
    --karla: "Karla", serif; 
    --markazi: "Markazi Text", sans-serif; 
    
    /* Font weight */
    --regular: 400;
    --medium: 500;
    --semi-bold: 600;
    --bold: 700;
    --deepBold: 900;

    /* backdrop-color */
    --backdrop-color: rgba(255, 255, 255, 0.1);

    /* shadow */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    /* border-radius */
    --border-radius-tiny: 3px;
    --border-radius-sm: 6px;
    --border-radius-md: 8px;
    --border-radius-lg: 10px;
    --border-radius-xlg: 50px;
}

/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* transition: all .3s linear ; */
}

html {
  font-size: 62.5%;
}

body {
  width: 100%;
  height: auto;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  width: 100%;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  /* outline: 2px solid var(--color-brand-600); */
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  width: 100%;
  height: 100%;
  object-fit:cover;
  border-radius: var(--border-radius-lg);

}
`;

export default GlobalStyles;
