(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(26),o=a.n(i),l=a(2);var c=l.a`

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
  /* width: 100%; */
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
`,d=a(6),m=a(3);const s=[{generalName:"Paste",list:[{id:"00",selected:!1,name:"Special Pasta",price:"10",image:"images/menuImages/special_pasta.jpg"},{id:"01",selected:!1,name:"Small Pasta",price:"3",image:"images/menuImages/small_pasta.jpg"},{id:"02",selected:!1,name:"Medium Pasta",price:"5",image:"images/menuImages/medium_pasta.jpg"},{id:"03",selected:!1,name:"Big Pasta",price:"8",image:"images/menuImages/big_pasta.jpg"}]},{generalName:"Burger",list:[{id:"04",selected:!1,name:"Special Burger",price:"10",image:"images/menuImages/special-burger.jpg"},{id:"05",selected:!1,name:"Small Burger",price:"3",image:"images/menuImages/small_burger.jpg"},{id:"06",selected:!1,name:"Medium Burger",price:"5",image:"images/menuImages/medium_burger.jpg"},{id:"07",selected:!1,name:"Big Burger",price:"8",image:"images/menuImages/big_burger.webp"}]},{generalName:"Pizza",list:[{id:"08",selected:!1,name:"Special Pizza",price:"10",image:"images/menuImages/special_pizza1.jpg"},{id:"09",selected:!1,name:"Small Pizza",price:"3",image:"images/menuImages/small-pizza1.jpg"},{id:"10",selected:!1,name:"Medium Pizza",price:"5",image:"images/menuImages/medium_pizza.jpg"},{id:"11",selected:!1,name:"Big Pizza",price:"8",image:"images/menuImages/big-pizza.jpg"}]},{selected:!1,generalName:"OTHER FOOD MENU",list:[{id:"12",selected:!1,name:"Fried Rice",price:"5",image:"images/menuImages/fried_rice.jpg"},{id:"13",selected:!1,name:"Jollof Rice",price:"7",image:"images/menuImages/joolof_rice.png"},{id:"14",selected:!1,name:"Eba & Egusi",price:"2",image:"images/menuImages/eba.jpg"},{id:"15",selected:!1,name:"Amala & Gbegiri",price:"10",image:"images/menuImages/amala.png"},{id:"16",selected:!1,name:"Agoyin Beans",price:"12",image:"images/menuImages/agoyin_beans.jpg"},{id:"17",selected:!1,name:"Yellow Rice",price:"2",image:"images/menuImages/yellow_rice.jpg"},{id:"18",selected:!1,name:"Hausa Tuwo",price:"2",image:"images/menuImages/tuwo.jpg"},{id:"19",selected:!1,name:"Semovita & Egusi",price:"7",image:"images/menuImages/semo.jpg"}]}],u=Object(r.createContext)();function p(e){let{children:t}=e;const[a,i]=Object(r.useState)(s);Object(r.useState)();const[o,l]=Object(r.useState)([]),[c,d]=Object(r.useState)([]),m=a.flatMap(e=>e.list).filter(e=>!0===e.selected);return console.log(o),n.a.createElement(u.Provider,{value:{menus:a,setMenus:i,selectedMenuHandler:(e,t)=>{const r=a.map(a=>{const{generalName:r,list:n}=a;if(r===t){const a=n.map(t=>t.id===e?{...t,selected:!t.selected}:t);return{...r,list:a,generalName:t}}return a});i(r)},setUserBookedData:l,userSelectedItems:c,setUserSelectedItems:d,isAnyItemSelected:m}},t)}const g=Object(r.createContext)();function h(e){let{children:t}=e;const[a,i]=Object(r.useState)(!1);return n.a.createElement(g.Provider,{value:{open:a,toggleHamburger:()=>i(e=>!e)}},t)}const b=Object(r.createContext)();function f(e){let{children:t}=e;const[a,i]=Object(r.useState)(""),[o,l]=Object(r.useState)("user2024"),[c,d]=Object(r.useState)(!1);return n.a.createElement(b.Provider,{value:{auth:c,userPassword:o,userName:a,setUserName:i,setUserPassword:l,defaultPassword:"user2024",loginHandler:()=>{a.trim()&&o.trim()&&(""!==a&&"user2024"===o?d(!0):console.error("Invalid username or password"))},logoutHandler:()=>{d(!1),i(""),l("user2024")}}},t)}const v=l.b`
  text-align: left;
`,x=l.c.h1`
  ${e=>"h1"===e.as&&l.b`
      font-size: 38px;
      color: var(--yellow);
      @media (max-width: 450px) {
        font-size: 24px;
      }
    `}

  ${e=>"h2"===e.as&&l.b`
      font-size: 32px;
      color: var(--black);
    `}
  
  ${e=>"h3"===e.as&&l.b`
      font-size: 28px;
      color: var(--pure-white);
      margin-top: -1rem;
    `}

  ${e=>"h4"===e.as&&l.b`
      font-size: 20px;
      color: var(--pureWhite);
      font-weight: var(--bold);
      font-family: var(--karla);
    `} 
    ${e=>"h5"===e.as&&l.b`
      font-size: 24px;
      color: var(--deepGreen);
      font-weight: var(--bold);
      font-family: var(--karla);
    `} 
    ${e=>"h6"===e.as&&l.b`
      font-size: 20px;
      color: var(--yellow);
      font-weight: var(--bold);
      font-style: italic;
    `} 

  ${v}
`,w=l.c.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,E=l.c.div`
  /* box */
  background-color: var(--pureWhite);
  border: 1px solid var(--deepGreen);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;var y=function(){const e=function(){const e=Object(m.n)();return()=>e(-1)}();return n.a.createElement(w,null,n.a.createElement(E,null,n.a.createElement(x,{as:"h1"},n.a.createElement("span",{role:"img","aria-label":"description of emoji"},"\ud83d\ude22")),n.a.createElement("button",{onClick:e,size:"large"},"\u2190 Go back")))};const k=l.b`
  position: fixed;
  top: 0;
  background-color: var(--white);
  z-index: 99;
`,C=l.b`
  background-color: var(--pureWhite);
  padding-bottom: 3rem;
  margin-top: 20rem;

  @media (max-width: 450px) {
    margin-top: 10rem;
  }
`,z=l.b`
  position: relative;
  top: 8rem;
  height: auto;
  background-color: var(--deepGreen);
  /* height: 27rem; */

  @media (max-width: 450px) {
    top: 7rem;
  }
`,S=l.b`
  position: relative;
  width: 100%;
  top: 10rem;
  background-color: var(--pureWhite);
  @media (max-width: 950px) {
    top: 8rem;
  }

  @media (max-width: 450px) {
    top: 7rem;
  }
`,j=l.b`
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    margin-top: 3rem;
  }
`,O=l.b`
  position: relative;
  height: auto;
  top: 10rem;
  background-color: var(--pureWhite);
  padding-bottom: 5rem;

  @media (max-width: 450px) {
    top: 7rem;
  }
`,$=l.b`
  position: relative;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
  }
`,I=l.b`
  position: relative;
  height: auto;
  margin-top: 5rem;
  background-color: var(--pureWhite);
  margin-bottom: 5rem;

  @media (max-width: 450px) {
    margin-top: 4rem;
  }
`,N=l.b`
  position: relative;
  /* top: 8rem; */
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    /* top: 7rem; */
  }
`,G=l.b`
  position: relative;
  top: 8rem;
  padding-top: 4rem;
  height: auto;
  background-color: var(--deepGreen);
  padding-bottom: 10rem;

  @media (max-width: 450px) {
    top: 10rem;
    padding-bottom: 10rem;
  }
`,B=l.b`
  position: relative;
  background-color: var(--pureWhite);
  bottom: 0;
  /* top: 3rem; */
  padding-top: 3rem;
`,W=l.b`
  position: relative;
  bottom: 0;
  /* top: 10rem; */
  background-color: var(--black);
  height: auto;
  padding: 4rem 0;
`,T=l.b`
  position: relative;
  background-color: var(--pureWhite);
`,A=l.c.div`
  width: 100%;

  /* HEADER */
  ${e=>"header"===e.as&&l.b`
      ${k}
    `}
  /* HOMEPAGE */
  ${e=>"section"===e.as&&"homepage"===e.type&&l.b`
      ${z}
    `}

     /* ABOUT */
  ${e=>"section"===e.as&&"about"===e.type&&l.b`
      ${S}
    `}

/* ReservationText */
${e=>"div"===e.as&&"reservationHeading"===e.type&&l.b`
      ${j}
    `}

    /* Make RESERVATION */
    ${e=>"section"===e.as&&"makeReservation"===e.type&&l.b`
      ${O}
    `}


    /* TOP */
    ${e=>"div"===e.as&&"makeReservationTop"===e.type&&l.b`
      ${$}
    `}
/* BOTTOM */
    ${e=>"div"===e.as&&"makeReservationBottom"===e.type&&l.b`
      ${I}
    `}

    /* Confirm RESERVATION */
    ${e=>"section"===e.as&&"confirmReservation"===e.type&&l.b`
      ${N}
    `}

     /* Menu */
     ${e=>"section"===e.as&&"menu"===e.type&&l.b`
      ${G}
    `}

    /* HElper */
    ${e=>"div"===e.as&&"helper"===e.type&&l.b`
      ${B}
    `}
/* WEEK SPECIAL */
    ${e=>"section"===e.as&&"week"===e.type&&l.b`
      ${C}
    `}
/* FOOTER */
    ${e=>"footer"===e.as&&l.b`
      ${W}
    `}

    /* Login */
    ${e=>"section"===e.as&&"login"===e.type&&l.b`
      ${T}
    `}
`,D=l.c.div`
  position: relative;
  max-width: 120rem;
  height: auto;
  padding: 0 10.4rem 2rem;
  margin: 0 auto;
  @media (max-width: 950px) {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 4rem;
  }
  @media (max-width: 450px) {
    padding: 2rem 2rem;
    border: none;
  }
`,R=l.c.div`
  display: inline-block;
`;var F=function(){return n.a.createElement(R,null,n.a.createElement(d.b,{to:"/home"},n.a.createElement("img",{src:"icons_assets/Logo.svg",alt:"Logo"})))};var H=function(){const e=Object(r.useContext)(b);if(void 0===e)throw new Error("Auth context was used outside open context provider");return e};const L=l.c.nav`
  color: var(--deepGreen);
  display: block;
  transition: all 2s;

  .active::before {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    color: var(--pureWhite);

    left: 0;
    width: 1px;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.2s;
  }

  @media (max-width: 950px) {
    padding: 3rem 0;
    width: 99%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 90;
    display: ${e=>{let{hamburger:t}=e;return t?"block":"none"}};
    transition: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    top: ${e=>{let{hamburger:t}=e;return t?"25rem":"0"}};
    background-color: var(--white);

    /* width: 90%; */
    /* background-color: rgba(255, 255, 255, 0.3); */
  }
`,M=Object(l.c)(d.c)`
  color: inherit;
  text-decoration: none;
  padding: 0.5rem;

  &.active {
    /* color: var(--yellow); */
    color: var(--pureWhite);
    background-color: var(--deepGreen);
    border-radius: 5px;
    font-weight: 500;
  }
`,P=l.c.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;var q=function(e){let{openHamburger:t,onToggleHamburger:a}=e;const{logoutHandler:r}=H();return n.a.createElement(L,{hamburger:t},n.a.createElement(P,null,n.a.createElement("li",{onClick:a},n.a.createElement(M,{to:"/home"},"Home")),n.a.createElement("li",{onClick:a},n.a.createElement(M,{to:"/about"},"About")),n.a.createElement("li",{onClick:a},n.a.createElement(M,{to:"/reservations"},"Reservations")),n.a.createElement("li",{onClick:a},n.a.createElement(M,{to:"/orderonline"},"Order Online")),n.a.createElement("li",{onClick:()=>{r(),a()}},n.a.createElement(M,{to:"/login"},"Logout"))))};var _=function(){const e=Object(r.useContext)(g);if(void 0===e)throw new Error("Toggle context was used outside open context provider");return e};const U=l.c.div`
  /* height: 8rem; */
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--backdrop-color);
  margin-top: 2rem;

  @media (max-width: 450px) {
    margin-top: 0;
  }
`,Y=l.c.span`
  font-size: 1.8rem;
  cursor: pointer;
`,V=l.c.div`
  position: relative;
  z-index: 90;
  color: var(--deepGreen);
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;var J=function(){const{open:e,toggleHamburger:t}=_();return n.a.createElement(A,{as:"header"},n.a.createElement(D,null,n.a.createElement(U,null,n.a.createElement(F,null),n.a.createElement(V,{onClick:t},e?n.a.createElement(Y,null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 12 12"},n.a.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"}))):n.a.createElement(Y,null,n.a.createElement("svg",{width:"25",height:"25",viewBox:"0 0 35 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z",fill:"currentColor"})))),n.a.createElement(q,{openHamburger:e,onToggleHamburger:t}))))};const Z=l.c.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${e=>"flexMenu"===e.type&&l.b`
      justify-content: space-between;

      @media (max-width: 950px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 10%;
      }

      @media (max-width: 450px) {
      }
    `}
  ${e=>"sb"===e.type&&l.b`
      justify-content: space-between;

      @media (max-width: 950px) {
        flex-wrap: wrap;
      }

      @media (max-width: 450px) {
        /* flex-direction: column; */
        justify-content: start;
        /* border: 2px solid blue; */
      }
    `}
  ${e=>"sbt"===e.type&&l.b`
      justify-content: space-between;

      @media (max-width: 950px) {
        flex-wrap: wrap;
      }

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;

        /* border: 2px solid blue; */
      }
    `}
  ${e=>"grid"===e.type&&l.b`
      justify-content: space-between;
    `}


  ${e=>"gap"===e.type&&l.b`
      gap: 2rem;
    `}

  ${e=>"doubleGap"===e.type&&l.b`
      gap: 8rem;

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
      }
    `}

  ${e=>"center"===e.type&&l.b`
      justify-content: center;
    `}

  ${e=>"column"===e.type&&l.b`
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    `}
    @media (max-width: 768px) {
    gap: 2rem;
  }
`,K=l.c.div`
  @media (max-width: 450px) {
    display: inline-block;
    padding: 0;
  }
`,X=l.c.ul``,Q=l.c.li`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: capitalize;
  color: var(--pureWhite);
  letter-spacing: 1.5px;
  font-family: var(--markazi);

  @media (max-width: 450px) {
    margin-left: 1rem;
  }
`;var ee=function(e){let{content:t}=e;const{heading:a,contentArray:r}=t;return n.a.createElement(K,null,n.a.createElement(x,{as:"h4"},a),n.a.createElement(X,null,r.map(e=>n.a.createElement(Q,{key:e},e))))};const te=[{heading:"Doormat Navigation",contentArray:["Home","About","Menu","Reservation","Order Online","Login"]},{heading:"Contact Us",contentArray:["Address","Phone","Email"]},{heading:"Social Media",contentArray:["Facebook","Twitter","Instagram"]}],ae=l.c.div`
  width: 25rem;
  img {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 70%;
  }
`,re=l.c.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  /*  */
  @media (max-width: 450px) {
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    /* flex-wrap: wrap; */
    column-gap: 4rem;
  }
`;var ne=function(){return n.a.createElement(A,{as:"footer"},n.a.createElement(D,null,n.a.createElement("div",null,n.a.createElement(Z,{type:"doubleGap"},n.a.createElement(ae,null,n.a.createElement("img",{src:"icons_assets/logo.svg",alt:"FooterLogo"})),n.a.createElement(re,null,te.map((e,t)=>n.a.createElement(ee,{content:e,key:t})))))))};const ie=l.c.section`
  /* position: relative;
  padding: 0;
  display: flex;
  flex-direction: column; */
`,oe=l.c.main`
  padding: 0;
`;var le=function(){const e="/login"===Object(m.k)().pathname;return n.a.createElement(ie,null,!e&&n.a.createElement(J,null),n.a.createElement(oe,null,n.a.createElement(m.b,null)),!e&&n.a.createElement(ne,null))};const ce={small:l.b`
    font-size: 1.2rem;
  `,medium:l.b`
    font-size: 1.4rem;
  `,large:l.b`
    font-size: 1.6rem;
  `,xlarge:l.b`
    font-size: 1.8rem;
    /* font-style: italic; */
  `,xxlarge:l.b`
    font-size: 2rem;
  `,xxxlarge:l.b`
    font-size: 2.8rem;
    font-style: italic;
    text-align: center;
  `,nameSize:l.b`
    font-size: 2.8rem;
    font-style: italic;
  `,extraLarge:l.b`
    font-size: 4rem;

    @media (max-width: 450px) {
      font-size: 3.5rem;
    }
  `},de={regular:l.b`
    font-weight: var(--regular);
  `,medium:l.b`
    font-weight: var(--medium);
  `,bold:l.b`
    font-weight: var(--bold);
  `,deepBold:l.b`
    font-weight: var(--deepBold);
  `},me={karla:l.b`
    font-family: var(--karla);
  `,karlaText:l.b`
    font-family: var(--karla);
  `,sanSerif:l.b`
    font-family: "sans-serif";
  `,serif:l.b`
    font-family: "serif";
  `,markazi:l.b`
    font-family: var(--markazi);
  `},se={black:l.b`
    color: var(--black);
  `,red:l.b`
    color: red;
  `,deepGreen:l.b`
    color: var(--deepGreen);
  `,yellow:l.b`
    color: var(--yellow);
  `,pureWhite:l.b`
    color: var(--pureWhite);
  `},ue=l.c.p`
  ${e=>ce[e.fontSize]}
  ${e=>de[e.fontWeight]}
  ${e=>se[e.color]}
  ${e=>me[e.fontFamily]}
`;ue.defaultProps={color:"pureWhite",fontWeight:"regular",fontSize:"large",fontFamily:"serif"};const pe={small:l.b`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  `,medium:l.b`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
  `,large:l.b`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
  `,xlarge:l.b`
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem;
  `},ge={regular:l.b`
    font-weight: var(--regular);
  `,medium:l.b`
    font-weight: var(--medium);
  `,bold:l.b`
    font-weight: var(--bold);
  `,deepBold:l.b`
    font-weight: var(--deepBold);
  `},he={black:l.b`
    color: var(--black);
    &:hover {
      color: var(--pureWhite);
    }
  `,deepGreen:l.b`
    color: var(--deepGreen);
  `,yellow:l.b`
    color: var(--yellow);
  `,pureWhite:l.b`
    color: var(--pureWhite);
  `},be={black:l.b`
    background-color: var(--black);
  `,deepGreen:l.b`
    background-color: var(--deepGreen);
  `,yellow:l.b`
    background-color: var(--yellow);
    &:hover {
      background-color: var(--deepGreen);
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
  `,pureWhite:l.b`
    background-color: var(--pureWhite);
  `},fe=l.c.button`
  position: relative;
  font-family: var(--markazi);
  border-radius: var(--border-radius-md);
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  display: inline-block;

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius-md);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    /* border: 1px solid var(--deepGreen); */
  }

  ${e=>pe[e.$fontSize||"xlarge"]}
  ${e=>ge[e.$fontWeight||"bold"]}
  ${e=>he[e.$textColor||"black"]}
  ${e=>be[e.$backgroundColor||"yellow"]}
  
  @media (max-width: 450px) {
    border-radius: var(--border-radius-xlg);
  }
`,ve=l.c.div`
  width: 100%;
  position: relative;
  top: 2rem;
  padding: 0px;
  font-family: var(--karla);

  @media (max-width: 450px) {
    /* width: 100%; */
  }
`,xe=l.c.div`
  position: relative;
  left: 0;
  padding: 2rem 0 2rem 0;
  width: 40rem;

  @media (max-width: 950px) {
    width: 30rem;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 90%;
    padding: 3rem 0 3rem 0;
  }
`,we=l.c.div`
  position: absolute;
  /* right: 1.5rem; */
  right: 0%;
  top: 5rem;
  /* z-index: 10; */
  /* padding: 2rem 0 0; */
  width: 32rem;
  height: 35rem;
  /* border: 2px solid red; */
  border-radius: var(--border-radius-lg);
  @media (max-width: 950px) {
    top: 7rem;
  }
  @media (max-width: 760px) {
    display: none;
  }
`,Ee=l.c.div`
  padding-top: 2rem;
`;var ye=function(){return n.a.createElement(ve,null,n.a.createElement(xe,null,n.a.createElement(x,{as:"h1"},"Little Lemon"),n.a.createElement(x,{as:"h3"},"Chicago"),n.a.createElement(ue,{fontSize:"xlarge"},"We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Come experience the warmth of our hospitality and the vibrant flavors of the Mediterranean, crafted with love and served with a modern twist."),n.a.createElement(Ee,null,n.a.createElement(fe,null,n.a.createElement(d.b,{to:"/reservations"}," Reserved Table ")))),n.a.createElement(we,null,n.a.createElement("img",{src:"icons_assets/restauranfood.jpg",alt:"restauranfood"})))};var ke=function(){return n.a.createElement(A,{as:"section",type:"homepage"},n.a.createElement(D,null,n.a.createElement(ye,null)))};const Ce=l.b`
  height: 30rem;
`,ze=l.b`
  height: 25rem;
`,Se=l.c.div`
  position: relative;
  ${ze}
  background-color: var(--white);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-lg);
`,je=l.c.span`
  font-size: 1.8rem;
  font-weight: var(--semi-bold);
  font-family: var(--karla);
  color: var(--black);
`,Oe=l.c.span`
  font-size: 1.6rem;
  font-weight: var(--semi-bold);
  font-family: var(--karla);
  color: var(--yellow);
`,$e=l.c.p`
  font-size: 1.6rem;
  font-weight: var(--regular);
  font-family: var(--karla);
  color: var(--black);
  margin-top: 1.5rem;
`,Ie=l.c.div`
  position: absolute;
  bottom: 1rem;
  /* margin-top: 50px; */
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--black);

  cursor: pointer;
  &:hover {
    background-color: var(--yellow);
    color: var(--pureWhite);
    border-radius: var(--border-radius-lg);
    padding: 0.5rem 1rem;
  }
`,Ne=l.c.span`
  font-weight: var(--semi-bold);
  font-family: var(--karla);
`,Ge=l.c.span`
  /* color: var(--black); */
  font-weight: var(--bold);
  font-size: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
`,Be=l.c.div`
  ${Ce}
`;var We=function(e){let{card:t}=e;const{name:a,description:r,price:i,image:o}=t;return n.a.createElement("div",null,n.a.createElement(Be,null,n.a.createElement("img",{src:o,alt:a})),n.a.createElement(Se,null,n.a.createElement(Z,{type:"grid"},n.a.createElement(je,null,a),n.a.createElement(Oe,null,"$",i)),n.a.createElement($e,null,r),n.a.createElement(Ie,null,n.a.createElement(Ne,null,"Order delivery"),n.a.createElement(Ge,null,n.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 28 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M13.9662 5.73305L5.42372 12.7479V20.3189C5.42372 20.5149 5.50182 20.7029 5.64085 20.8415C5.77987 20.9801 5.96844 21.058 6.16505 21.058L11.3572 21.0446C11.5531 21.0436 11.7407 20.9653 11.879 20.8268C12.0172 20.6883 12.0948 20.5009 12.0948 20.3055V15.8841C12.0948 15.6881 12.1729 15.5001 12.3119 15.3614C12.4509 15.2228 12.6395 15.145 12.8361 15.145H15.8015C15.9981 15.145 16.1866 15.2228 16.3257 15.3614C16.4647 15.5001 16.5428 15.6881 16.5428 15.8841V20.3022C16.5425 20.3995 16.5614 20.4959 16.5986 20.5858C16.6357 20.6757 16.6902 20.7575 16.7591 20.8264C16.828 20.8953 16.9098 20.9499 16.9999 20.9872C17.09 21.0245 17.1866 21.0437 17.2841 21.0437L22.4744 21.058C22.671 21.058 22.8596 20.9801 22.9986 20.8415C23.1376 20.7029 23.2157 20.5149 23.2157 20.3189V12.7428L14.6751 5.73305C14.5747 5.65236 14.4496 5.60836 14.3206 5.60836C14.1917 5.60836 14.0666 5.65236 13.9662 5.73305ZM27.4599 10.5009L23.5864 7.31756V0.919002C23.5864 0.77198 23.5278 0.63098 23.4235 0.527019C23.3193 0.423059 23.1778 0.364655 23.0304 0.364655H20.4357C20.2883 0.364655 20.1468 0.423059 20.0426 0.527019C19.9383 0.63098 19.8797 0.77198 19.8797 0.919002V4.27327L15.7315 0.870497C15.3334 0.543884 14.8339 0.365307 14.3183 0.365307C13.8028 0.365307 13.3032 0.543884 12.9052 0.870497L1.1768 10.5009C1.1205 10.5473 1.07392 10.6043 1.03972 10.6687C1.00553 10.733 0.984381 10.8034 0.977497 10.8759C0.970612 10.9484 0.978123 11.0216 0.999601 11.0912C1.02108 11.1608 1.0561 11.2255 1.10267 11.2816L2.28417 12.7137C2.33061 12.77 2.38773 12.8166 2.45227 12.8509C2.5168 12.8851 2.58748 12.9064 2.66025 12.9134C2.73303 12.9203 2.80647 12.913 2.87638 12.8916C2.94629 12.8703 3.01129 12.8354 3.06767 12.789L13.9662 3.83903C14.0666 3.75834 14.1917 3.71433 14.3206 3.71433C14.4496 3.71433 14.5747 3.75834 14.6751 3.83903L25.5741 12.789C25.6304 12.8354 25.6953 12.8703 25.7651 12.8917C25.8349 12.9132 25.9082 12.9206 25.981 12.9138C26.0537 12.9069 26.1243 12.8858 26.1889 12.8517C26.2534 12.8176 26.3106 12.7712 26.3571 12.7151L27.5386 11.283C27.5851 11.2266 27.62 11.1615 27.6412 11.0916C27.6625 11.0217 27.6696 10.9483 27.6623 10.8756C27.655 10.8029 27.6333 10.7324 27.5986 10.6681C27.5638 10.6038 27.5167 10.547 27.4599 10.5009Z",fill:"currentColor"}))))))};const Te=l.c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ae=[{image:"icons_assets/greek salad.jpg",price:"12.99",name:"Greek Salad",description:"The famous Greek salad of srispy lettuce, peppers,olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons."},{image:"icons_assets/bruchetta.svg",price:"5.99",name:"Bruchetta",description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"},{image:"icons_assets/lemon dessert.jpg",price:"8.00",name:"Lemon Dessert",description:"This comes straight from gradma's recipe book, evry last ingrdient has been sourced and is as authentic as can be imagined."}],De=l.c.div`
  margin-top: 2rem;
`;var Re=function(){return n.a.createElement(A,{as:"section",type:"week"},n.a.createElement(D,null,n.a.createElement(Z,{type:"sbt"},n.a.createElement(ue,{fontSize:"extraLarge",color:"black",fontWeight:"bold"},"This week specials!"),n.a.createElement(fe,null,n.a.createElement(d.b,{to:"/orderonline"},"Online Menu"))),n.a.createElement(De,null,n.a.createElement(Te,null,Ae.map((e,t)=>n.a.createElement(We,{card:e,key:t}))))))};const Fe=l.c.section`
  position: relative;
  padding: 0;
`;var He=function(){return n.a.createElement(Fe,null,n.a.createElement(ke,null),n.a.createElement(Re,null))};const Le=l.c.div`
  width: 75%;
  margin: 0 auto;
  height: auto;
  padding: 7rem 0 0;

  @media (max-width: 450px) {
    /* flex-direction: column;
    justify-content: center; */
  }
`,Me=l.c.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 450px) {
    display: block;
  }
`,Pe=l.c.div`
  margin-left: 3%;
  @media (max-width: 450px) {
    margin-left: 0;
  }
`,qe=l.c.div`
  width: 70%;
  margin-top: 2rem;

  @media (max-width: 950px) {
    margin-top: 0;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`,_e=l.c.div`
  width: 15rem;
  height: 15rem;

  /* border-radius: 50%; */

  & > img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 950px) {
    width: 10rem;
    height: 10rem;
  }
  @media (max-width: 450px) {
    width: 9rem;
    height: 9rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    float: left;
  }
`;var Ue=function(){return n.a.createElement(Le,null,n.a.createElement(Me,null,n.a.createElement(_e,null,n.a.createElement("img",{src:"icons_assets/Mario&Adrian.png",alt:"CEOS"})),n.a.createElement(qe,null,n.a.createElement(ue,{color:"deepGreen"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam esse nihil mollitia, excepturi, qui sed fuga in minus quis obcaecati, illo est laborum iusto et.excepturi, qui sed fuga in minus quis obcaecati, illo est laborum iusto et."))),n.a.createElement(Pe,null,n.a.createElement(ue,{color:"yellow",fontSize:"nameSize"},"Oluwaseun Sodeeq"),n.a.createElement(x,{as:"h5"},"SIGNED!")))};const Ye=l.c.div`
  position: relative;
  height: 25rem;
  background-image: url("icons_assets/restaurant.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    display: none;
  }
`,Ve=l.c.div`
  background-color: var(--pureWhite);
  padding: 0;
  display: inline-block;
  margin-left: 5%;
  border-radius: var(--border-radius-md);

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`,Je=l.c.div`
  background-color: var(--pureWhite);

  color: var(--pureWhite);
  font-weight: bold;
  text-transform: uppercase;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url("icons_assets/restaurant.jpg");
  background-size: cover;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--deepGreen);

  font-size: 3.4rem;
  padding: 0.5rem;

  /* &:span {
  } */
`,Ze=l.c.div`
  margin-right: 5%;
`;var Ke=function(){return n.a.createElement(Ye,null,n.a.createElement(Ve,null,n.a.createElement(Je,null,"ABOUT US")),n.a.createElement(Ze,null,n.a.createElement(fe,null,n.a.createElement(d.b,{to:"/orderonline"}," ORDER ONLINE"))))};const Xe=l.c.div`
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
`,Qe=l.c.div`
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
`,et=l.c.div`
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
`,tt=l.c.div`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`,at=l.c.div`
  width: 2.5rem;
  height: 0.2rem;
  background-color: var(--yellow);
`;var rt=function(){return n.a.createElement(Xe,null,n.a.createElement(Qe,null,n.a.createElement(x,{as:"h6"},"Fill the Belly First"),n.a.createElement(tt,null,n.a.createElement(at,null)," ",n.a.createElement(x,{as:"h5"},"EST.1998"),n.a.createElement(at,null)),n.a.createElement(x,{as:"h1"},"Best Meal in Town"),n.a.createElement(ue,{color:"deepGreen"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos porro? Voluptate et facilis eos explicabo illum omnis numquam quaerat facere exercitationem blanditiis? Officiis aut unde voluptatem")),n.a.createElement(et,null,n.a.createElement("img",{src:"icons_assets/restaurantchef.jpg",alt:"Chef"})))};const nt=l.c.section`
  position: relative;
  padding: 0;
  padding-bottom: 10rem;
`;var it=function(){return n.a.createElement(A,{as:"section",type:"about"},n.a.createElement(D,null,n.a.createElement(nt,null,n.a.createElement(Ke,null),n.a.createElement(rt,null),n.a.createElement(Ue,null))))},ot=a(36),lt=a(35);var ct=function(){const e=Object(r.useContext)(u);if(void 0===e)throw new Error("menus context was used outside open context provider");return e},dt=a(8);const mt=dt.a().shape({date:dt.b().required("Date is required"),dinner:dt.b().required("Number of diners is required"),time:dt.b().required("Time is required"),occasion:dt.b().oneOf(["Birthday","Anniversary","Graduation","Other"],"Invalid occasion").required("Occasion is required"),firstName:dt.b().required("First name is required"),lastName:dt.b().required("Last name is required"),email:dt.b().email("Invalid email").required("Email is required"),tel:dt.b().matches(/^\d+$/,"Phone number must be digits only").required("Phone number is required"),countryCode:dt.b().required("Country code is required"),textArea:dt.b()}),st=l.c.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
`,ut=l.c.select`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-md);
  border: none;
  cursor: pointer;
  background-color: transparent;
  appearance: none;
  z-index: 10;
`,pt=l.c.div`
  position: absolute;
  width: 100%;
  height: auto;
  top: 100%;
  left: 0;
  background-color: var(--deepGreen);

  /*  */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  z-index: 80;
`,gt=l.c.option`
  width: 48%;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    background-color: #e0e0e0;
  }
`;var ht=function(e){let{value:t,options:a,toggleOptions:i,showOptions:o,currentID:l,dispatch:c,ind:d,handleChange:m}=e;const s=Object(r.useRef)(null),u=["date","time","occasion","dinner"],p=e=>{const t=u[l];m(e),c({type:t,payload:e.target.value}),i()};return n.a.createElement(st,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(ut,{ref:s,onChange:p,value:t,onClick:i,name:u[l],showOptions:o}),o&&n.a.createElement(pt,null,a.map((e,t)=>n.a.createElement(gt,{key:`${u[d]}${t}`,onClick:()=>p({target:{name:u[l],value:e}})},e)))))};const bt=3,ft=l.c.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 7rem;
  width: 100%;
  height: auto;

  @media (max-width: 450px) {
    width: 100%;
    margin-top: 4rem;
  }
`,vt=l.c.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 0.4rem;
  height: auto;

  @media (max-width: 450px) {
    width: 100%;
  }
`,xt=l.c.div`
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0;
  background-color: ${e=>{let{value:t}=e;return t?"var(--deepGreen)":"var(--pureWhite)"}};
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  /* error */
  border: ${e=>{let{errors:t}=e;return t?"2px solid red":""}};
  /* selected */
  box-shadow: ${e=>{let{value:t}=e;return t?"\nexport const ZERO = 0;\n0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n0 12.5px 10px rgba(0, 0, 0, 0.06),\n0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n0 100px 80px rgba(0, 0, 0, 0.12)\n":""}};

  /*  */
`,wt=l.c.label`
  font-size: 1.6rem;
  color: var(--pureWhite);
`,Et=l.c.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 1rem 2rem;
  /* z-index: 10; */
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${e=>{let{value:t}=e;return t?"var(--pureWhite)":"var(--deepGreen)"}};
`,yt=l.c.input`
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  border-radius: var(--border-radius-md);
  color: transparent;
  text-shadow: 0 0 0 0;
  background-color: transparent;
  opacity: 0;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`,kt=l.c.span`
  color: inherit;
  font-weight: var(--deepBold);
  font-size: 1.8rem;
  font-family: var(--karla);
`,Ct=l.c.span`
  transition: transform 0.3s ease-in-out;

  transform: ${e=>{let{value:t}=e;return t?"rotate(180deg)":""}};
  margin-top: ${e=>{let{value:t}=e;return t?"-1rem":""}};
  /* margin-top: -1rem; */
`;var zt=e=>{let{handleBlur:t,handleChange:a,errors:i,dispatch:o,content:l,formSubmitted:c,values:d}=e;const[m,s]=Object(r.useState)(!1),[u,p]=Object(r.useState)(null),g=Object(r.useRef)(null),h=()=>{g.current.showPicker()},b=e=>{const t=new Date(e.target.value).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});a(e),o({type:"date",payload:t})},f=e=>{p(e),s(t=>u!==e||!t)};return n.a.createElement(ft,null,l.map((e,r)=>{const{beforeIcon:l,value:s,afterIcon:p,label:v,inputType:x,options:w,currentID:E,name:y,placeholder:k}=e;return n.a.createElement(vt,{key:r},n.a.createElement(wt,null,v),n.a.createElement(xt,{errors:i[y]&&c,value:""!==d[e.name]},"input"===x?n.a.createElement(yt,{type:"date",name:"date",placeholder:k,ref:g,onClick:h,value:d[e.name],onChange:b,onBlur:t}):n.a.createElement(ht,{ind:r,options:w,value:d[e.name],currentID:E,showOptions:m&&u===E,toggleOptions:()=>f(E),dispatch:o,handleChange:a}),n.a.createElement(Et,{value:s!==k,onClick:f},n.a.createElement("span",null,l),n.a.createElement(kt,null,s),n.a.createElement(Ct,{value:d[e.name]},p))),i[y]&&c&&n.a.createElement(ue,{color:"red",fontSize:"large"},i[y]))}))},St=a(31),jt=a(30),Ot=a(16),$t=a(18),It=a(17);const Nt=l.c.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
`,Gt=l.c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Bt=l.c.label`
  font-family: var(--karla);
  color: var(--pureWhite);
  font-size: 1.6rem;
`,Wt=l.c.div`
  width: 100%;
  padding: 0px;
  position: relative;
  height: 4.5rem;
  overflow: hidden;
  background-color: var(--pureWhite);
  border-radius: var(--border-radius-md);
  border: ${e=>{let{error:t}=e;return t?"2px solid red":""}};
`,Tt=l.c.input`
  height: 100%;
  position: relative;
  padding: ${e=>{let{space:t}=e;return t?"0.5rem 2rem;":"0.5rem 1rem;"}};
  border-radius: var(--border-radius-md);
  border: none;
  outline: var(--deepGreen);
  font-weight: var(--bold);
  color: var(--deepGreen);
  /*  */
  width: ${e=>{let{itemId:t}=e;return t===bt?"80%":"100%"}};
  margin-left: ${e=>{let{itemId:t}=e;return t===bt?"20%":""}};
  &:focus {
    height: 100%;
    padding: 0 2.5rem;
  }
  &::placeholder {
    color: var(--deepGreen);
    font-style: italic;
    font-size: 1.6rem;
  }
`,At=l.c.select`
  font-family: var(--karla);
  color: var(--deepGreen);
  border-radius: var(--border-radius-md);
  height: 100%;
  position: absolute;
  top: -0.1rem;
  left: 0;
  width: 23%;
  z-index: 20;
  font-size: 1.6rem;
  font-weight: var(--regular);
  border: none;
  outline: none;
  padding: 0 1rem;
`,Dt=l.c.option`
  font-weight: var(--bold);
  font-size: 1.4rem;
  padding: 0 1rem;
  color: var(deepGreen);
  z-index: 10;
`,Rt=l.c.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`,Ft=l.c.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
`,Ht=l.c.div`
  width: 45%;
  color: var(--pureWhite);
  display: flex;
  justify-content: space-between;
  /* gap: 2rem; */
  align-items: center;
  padding-right: 1.5rem;
  border-radius: var(--border-radius-sm);
  border: ${e=>{let{error:t}=e;return t?"2px solid red":""}};
  cursor: pointer;
`,Lt=l.c.span`
  & > * {
    font-size: 3rem;
    color: var(--pureWhite);
  }
`,Mt=l.c.span`
  font-size: 1.4rem;
  font-weight: 600;
`,Pt=l.c.div`
  font-weight: var(--Bold);
  color: var(--pureWhite);
  font-size: 2rem;
  margin-top: 2rem;
`,qt=l.c.div`
  width: 100%;
  margin-top: 2rem;
`,_t=l.c.textarea`
  width: 100%;
  height: 13rem;
  border-radius: var(--border-radius-md);
  padding: 2rem;
`;function Ut(e){let{values:t,handleChange:a,errors:r,touched:i,dataArr:o,turnCardHandler:l,formSubmitted:c}=e;const d=o.filter(e=>"firstName"===e.id||"email"===e.id),m=[{icon:n.a.createElement(jt.a,{style:{fontSize:"2.4rem",color:"inherit"}}),text:t.date||"Select Date",id:"date",name:"date"},{icon:n.a.createElement(Ot.a,{style:{fontSize:"2.4rem",color:"inherit"}}),text:t.dinner||"No. of diners",id:"dinner",name:"dinner"},{icon:n.a.createElement(It.a,{style:{fontSize:"2.4rem",color:"inherit"}}),text:t.time||"Select Time",id:"time",name:"time"},{icon:n.a.createElement($t.a,{style:{fontSize:"2.4rem",color:"inherit"}}),text:t.occasion||"Occasion",id:"occasion",name:"occasion"}];return n.a.createElement("div",null,n.a.createElement(Jt,{arr:d,errors:r,touched:i,values:t,handleChange:a,formSubmitted:c}),n.a.createElement(Vt,{makeReservationArr:m,values:t,errors:r,turnCardHandler:l,formSubmitted:c}))}function Yt(e){let{values:t,handleChange:a,errors:r,touched:i,dataArr:o,handleBlur:l,formSubmitted:c}=e;const d=o.filter(e=>"firstName"!==e.id&&"email"!==e.id);return n.a.createElement("div",null,n.a.createElement(Jt,{arr:d,errors:r,touched:i,values:t,handleChange:a,handleBlur:l,formSubmitted:c}),n.a.createElement(qt,null,n.a.createElement(Bt,null,"Special Requests"),n.a.createElement(_t,{id:"textArea",name:"textArea",onChange:a,value:t.textArea,onBlur:l}),n.a.createElement("div",null)))}function Vt(e){let{turnCardHandler:t,makeReservationArr:a,values:r,errors:i,formSubmitted:o}=e;return n.a.createElement(Rt,null,n.a.createElement(Ft,null,a.map(e=>{const{icon:a,text:r,id:l,name:c}=e;return n.a.createElement(Ht,{key:l,error:i[c]&&o,onClick:t},n.a.createElement(Lt,null,a),n.a.createElement(Mt,null,r))})),n.a.createElement(Pt,null,`${r.seating} seating`))}function Jt(e){let{arr:t,errors:a,touched:r,values:i,handleChange:o,formSubmitted:l}=e;return n.a.createElement(Nt,null,t.map((e,t)=>{const{id:c,inputType:d,label:m,itemId:s,selectOptns:u,placeholder:p}=e;return n.a.createElement(Gt,{key:t},n.a.createElement(Bt,{htmlFor:c},n.a.createElement(St.a,{style:{fontSize:"1.2rem",color:"var(--pureWhite)"}}),m),n.a.createElement(Wt,{error:a[c]&&r[c]},s===bt&&n.a.createElement(At,{id:"countryCode",value:i.countryCode,onChange:o},u.map(e=>{const{countryAbbrev:t,country:a,code:r}=e;return n.a.createElement(Dt,{value:r,key:a},t)})),n.a.createElement(Tt,{type:d,itemId:s,id:c,name:c,placeholder:p,value:i[c],onChange:o,space:s===bt})),a[c]&&r[c]&&l&&n.a.createElement(ue,{color:"red",fontSize:"large"},a[c]))}))}const Zt=l.c.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.8s ease;
  overflow: hidden;
`,Kt=Object(l.c)(Zt)``,Xt=Object(l.c)(Zt)`
  /* border: 2px solid red; */
`,Qt=Object(l.c)(Zt)``,ea=Object(l.c)(Zt)``,ta=l.c.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 45rem;
  perspective: 150rem;
  overflow: "hidden";

  & ${Kt} {
    transform: ${e=>{let{turn:t}=e;return t?" rotateY(180deg)":" rotateY(0deg);"}};
  }
  & ${Xt} {
    transform: ${e=>{let{turn:t}=e;return t?" rotateY(-180deg)":" rotateY(0deg);"}};
  }

  & ${Qt} {
    transform: ${e=>{let{turn:t}=e;return t?" rotateY(0deg)":"rotateY(180deg);"}};
  }
  & ${ea} {
    transform: ${e=>{let{turn:t}=e;return t?" rotateY(0deg)":"rotateY(-180deg);"}};
  }
`,aa=l.c.div`
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`,ra=l.c.div`
  width: 50%;

  @media (max-width: 760px) {
    width: 100%;
  }
`,na=l.c.div`
  display: flex;
  column-gap: 5rem;

  @media (max-width: 760px) {
    flex-direction: column;
    /* row-gap: 3rem; */
  }
`;var ia=a(13),oa=a.n(ia),la=a(32),ca=a(15);const da={date:"",dinner:"",occasion:"",time:"",seating:"",firstName:"",lastName:"",tel:"",email:"",textArea:"",countryCode:"NG"},ma=(e,t)=>{switch(t.type){case"date":return{...e,date:t.payload};case"dinner":return{...e,dinner:t.payload};case"occasion":return{...e,occasion:t.payload};case"time":return{...e,time:t.payload};case"seating":return{...e,seating:t.payload};case"firstName":return{...e,firstName:t.payload};case"lastName":return{...e,lastName:t.payload};case"email":return{...e,email:t.payload};case"tel":return{...e,tel:t.payload};case"countryCode":return{...e,countryCode:t.payload};case"textArea":return{...e,textArea:t.payload};case"reset":return{...da};default:throw new Error("Unknown action type")}},sa=Object(r.createContext)();function ua(e){let{children:t,remount:a,setremount:i}=e;const[o,l]=Object(r.useState)(!1),c=JSON.parse(localStorage.getItem("reservationState"))||da,[d,m]=Object(r.useReducer)(ma,c);Object(r.useEffect)(()=>{localStorage.setItem("reservationState",JSON.stringify(d))},[d]);const{date:s,time:u,dinner:p,occasion:g}=d,h=[{currentID:0,label:"Date",beforeIcon:n.a.createElement(la.a,{style:{fontSize:"3rem",color:"inherit"}}),value:s||"Select Date",afterIcon:n.a.createElement(ca.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"input",name:"date",id:"date",placeholder:"Select Date"},{currentID:3,label:"Number of Diners",beforeIcon:n.a.createElement(Ot.a,{style:{fontSize:"3rem",color:"inherit"}}),value:p||"No. of Diners",afterIcon:n.a.createElement(ca.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"select",options:["1 Diner","2 Diners","3 Diners","4 Diners","5 Diners","6 Diners","7 Diners","8 Diners","9 Diners","10 Diners"],name:"dinner",id:"dinner",placeholder:"No. of Diners"},{currentID:1,label:"Time",beforeIcon:n.a.createElement(It.a,{style:{fontSize:"3rem",color:"inherit"}}),value:u||"Select Time",afterIcon:n.a.createElement(ca.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"select",options:["Morning","Afternoon","Evening","Night"],name:"time",id:"time",placeholder:"Select Time"},{currentID:2,label:"Occasion",beforeIcon:n.a.createElement($t.a,{style:{fontSize:"3rem",color:"inherit"}}),value:g||"Occasion",afterIcon:n.a.createElement(ca.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"select",options:["Birthday","Anniversary","Graduation","Other"],name:"occasion",id:"occasion",placeholder:"Occasion"}],[b,f]=Object(r.useState)(h);return n.a.createElement(sa.Provider,{key:a,value:{dispatch:m,state:d,initialState:da,resetHandler:()=>{localStorage.removeItem("reservationState"),m({type:"reset"}),i(e=>e+1),localStorage.setItem("reservationState",JSON.stringify(d))},formSubmitted:o,setFormSubmitted:l,initialContent:h,setContent:f,content:b,setremount:i}},t)}var pa=function(){const e=Object(r.useContext)(sa);if(void 0===e)throw new Error("Reservation context was used outside open context provider");return e};const ga=l.c.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  /* border: 3px solid red; */
`,ha=l.c.form`
  position: relative;
  width: 100%;
  height: auto;
`,ba=l.c.div`
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
`,fa=l.c.label`
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
`,va=l.c.input`
  background-color: var(--deepGreen);
  border: 1px solid var(--pureWhite);
  display: none;

  &:checked + ${fa} > span::after {
    opacity: 1;
  }
`,xa=l.c.span`
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
`,wa=l.c.div`
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
`,Ea=l.c.div`
  width: 100%;
  height: 100%;

  /* position: relative; */
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
`,ya=l.c.div`
  position: absolute;
  z-index: 10;
  width: 23rem;
  height: 23rem;
  padding: 1rem 0;
  transition: all 0.2s;

  /* Centralizing the element */
  /* top: 50%; */
  /* left: 50%; */
  top: 14rem;
  right: ${e=>{let{index:t}=e;return 7*t}}rem;
  transform: translate(-50%, -50%);

  /* left: ${e=>{let{index:t}=e;return 1*t}}rem; */

  &:hover {
    z-index: 20;
  }

  @media (max-width: 450px) {
    width: 16rem;
    height: 23rem;
    transform: translate(-50%, -50%);
    margin-right: 0%;
    margin-left: ${e=>{let{index:t}=e;return 3*t}}rem;
  }
`,ka=l.c.div`
  position: relative;
  height: ${e=>{let{empty:t}=e;return t?"37rem":"23rem"}};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${ya}:not(:hover) {
    z-index: 10;
    //  transform: scale(0.95) translateY(0);
  }
`,Ca=l.c.div`
  position: ${e=>{let{next:t}=e;return t?"absolute":"relative"}};
  bottom: ${e=>{let{next:t}=e;return t?"2rem":"0"}};
  left: ${e=>{let{next:t}=e;return t?"50%":""}};
  transform: ${e=>{let{next:t}=e;return t?"translate(-50%,-50%)":""}};
  z-index: 30;
  display: inline-block;
  text-align: center;

  display: flex;
  justify-content: center;
`,za=l.c.h1`
  padding-top: 2rem;
`,Sa=l.c.div`
  display: block;

  @media (max-width: 760px) {
    display: none;
  }
`,ja=l.c.div`
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`,Oa=l.c.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 450px) {
    bottom: -2rem;
  }
`,$a=l.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;

  @media (max-width: 450px) {
    margin-top: 0;
  }
`;var Ia=function(){const[e,t]=Object(r.useState)(!1),{state:a,dispatch:i,resetHandler:o,setContent:l,content:c,formSubmitted:m,setFormSubmitted:u}=pa(),{menus:p,selectedMenuHandler:g,isAnyItemSelected:h,setremount:b,setUserBookedData:f,setMenus:v}=ct();Object(r.useEffect)(()=>{l(e=>e.map(e=>({...e,value:a[e.name]||e.placeholder})))},[a,l,b]);const w=Object(ot.a)({initialValues:a,validationSchema:mt,validateOnBlur:!0,validateOnChange:!0,onSubmit:async(e,t)=>{let{setSubmitting:a}=t;const r=w.validateForm(e);if(0===Object.keys(r).length)try{console.log("Form submitted successfully:",e),oa.a.success("Form submitted successfully! \ud83c\udf89"),f(t=>[...t,e]),u(!0),o(),v(s)}catch(n){console.error("Error during form submission:",n),oa.a.error("Something went wrong. Please try again.")}else Object.entries(r).forEach(e=>{let[t,a]=e;return oa.a.error(`${t}: ${a}`)}),u(!1);a(!1)}}),{errors:E,handleBlur:y,handleSubmit:k,touched:C,values:z,isSubmitting:S}=w,j=e=>{const{name:t,value:a}=e.target;i({type:t,payload:a}),w.handleChange(e),u(!1)},O=()=>{t(e=>!e)},$=[{label:"First Name",id:"firstName",inputType:"text",placeholder:"Oluwaseun"},{label:"Last Name",id:"lastName",inputType:"text",placeholder:"Sodeeq"},{label:"Email",id:"email",inputType:"email",placeholder:"ademolaoluwaseun90@gmail.com"},{label:"Phone Number",id:"tel",inputType:"tel",placeholder:"8149428278",selectOptns:[{code:"+234",countryAbbrev:"NG",country:"Nigeria"},{code:"+1",countryAbbrev:"US",country:"United States of America"},{code:"+91",countryAbbrev:"IN",country:"India"},{code:"+44",countryAbbrev:"GB",country:"Great Britain"},{code:"+86",countryAbbrev:"CN",country:"China"}]}],I=p.flatMap(e=>{const{generalName:t,list:a}=e;return a.map(e=>({...e,generalName:t}))}).filter(e=>e.selected).map((e,t)=>{const{id:a,generalName:r,image:i,name:o}=e;return n.a.createElement(ya,{index:t,key:a},n.a.createElement(Ea,null,n.a.createElement("img",{src:i,alt:o}),n.a.createElement("span",{onClick:()=>g(a,r)},"X")))}),N=c.filter(e=>"date"===e.name||"occasion"===e.name),G=c.filter(e=>"dinner"===e.name||"time"===e.name);return n.a.createElement(A,{as:"section",type:"makeReservation"},n.a.createElement(A,{as:"div",type:"reservationHeading"},n.a.createElement(D,null,n.a.createElement(za,null,n.a.createElement(x,{as:"h1"},"Reservations")))),n.a.createElement(ha,{onSubmit:e=>{e.preventDefault(),k(e),u(!0),Object.keys(E).length&&Object.keys(E).forEach(e=>{oa.a.error(E[e])})}},n.a.createElement(A,{as:"div",type:"makeReservationTop"},n.a.createElement(D,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(ga,null,n.a.createElement(na,null,n.a.createElement(aa,{errors:E},n.a.createElement(ta,{turn:e},n.a.createElement(Kt,null,n.a.createElement(ja,null,n.a.createElement(ba,null,n.a.createElement(va,{type:"radio",name:"seating",id:"outdoor",value:"outdoor",checked:"outdoor"===z.seating,onChange:j,onBlur:y}),n.a.createElement(fa,{htmlFor:"outdoor"},"Outdoor seating ",n.a.createElement(xa,null)),E.seating&&C.seating&&m&&n.a.createElement(ue,{fontSize:"large",color:"red"},E.seating))),n.a.createElement(ba,null,n.a.createElement(va,{type:"radio",name:"seating",id:"indoor",value:"indoor",checked:"indoor"===z.seating,onChange:j,onBlur:y}),n.a.createElement(fa,{htmlFor:"indoor"},"Indoor seating ",n.a.createElement(xa,null)),E.seating&&C.seating&&m&&n.a.createElement(ue,{fontSize:"large",color:"red"},E.seating)),n.a.createElement(zt,{handleBlur:y,handleChange:j,errors:E,dispatch:i,content:N,formSubmitted:m,values:z})),n.a.createElement(Qt,null,n.a.createElement(Ut,{values:z,handleChange:j,errors:E,touched:C,turn:e,dataArr:$,turnCardHandler:O,formSubmitted:m})))),n.a.createElement(ra,null,n.a.createElement(ta,{turn:e},n.a.createElement(Xt,null,n.a.createElement(Sa,null,n.a.createElement(ba,null,n.a.createElement(va,{type:"radio",name:"seating",id:"Outdoor",value:"Outdoor",checked:"Outdoor"===z.seating,onChange:j,onBlur:y}),n.a.createElement(fa,{htmlFor:"Outdoor"},"Outdoor seating ",n.a.createElement(xa,null)),E.seating&&C.seating&&m&&n.a.createElement(ue,{fontSize:"large",color:"red"},E.seating))),n.a.createElement(zt,{handleBlur:y,handleChange:j,errors:E,dispatch:i,content:G,formSubmitted:m,values:z})),n.a.createElement(ea,null,n.a.createElement(Yt,{values:z,handleChange:j,errors:E,touched:C,turn:e,dataArr:$,handleBlur:y,formSubmitted:m}))))))),n.a.createElement(Ca,{next:"next"},n.a.createElement(fe,{$textColor:"deepGreen",$backgroundColor:"pureWhite",type:"button",onClick:O},"Next >>>")))),n.a.createElement(A,{as:"div",type:"makeReservationBottom"},n.a.createElement(D,null,n.a.createElement(wa,null,I.length>0&&n.a.createElement(ue,{color:"deepGreen",fontFamily:"markazi",fontweight:"deepBold",fontSize:"xxxlarge"},I.length," items"," ",1===I.length?"is":"are"," selected!"),n.a.createElement(ka,{empty:I.length},0===I.length?n.a.createElement($a,null,n.a.createElement(lt.a,{style:{fontSize:"5rem",color:"var(--deepGreen)"}}),n.a.createElement(ue,{color:"deepGreen",fontFamily:"markazi",fontweight:"deepBold",fontSize:"xxxlarge"},"Kindly make an Order!")):n.a.createElement("div",null,I)),n.a.createElement(Oa,null,n.a.createElement(Ca,null,h.length?n.a.createElement(fe,{disabled:S,type:"submit"},"Confirm Reservation"):n.a.createElement(d.b,{to:"/orderonline"},n.a.createElement(fe,{disabled:S,type:"submit"},"Go to Menu")))))))))};const Na=l.c.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 80%;
  }
`,Ga=l.c.div`
  width: 90%;
  padding: 1.5rem 0px;

  @media (max-width: 450px) {
    width: 100%;
    margin: 0 auto;
  }
`,Ba=l.c.label`
  font-size: 1.8rem;
  color: var(--pureWhite);
  font-weight: var(--bold);
`,Wa=l.c.input`
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  margin-top: 1rem;
  border-radius: var(--border-radius-md);
  color: var(--deepGreen);
  background-color: var(--pureWhite);
  border: none;
  outline: none;
  border-bottom: 5px solid transparent;
  transition: border-color 0.3s ease;

  &:focus {
    border-bottom-color: var(--yellow);
  }
`,Ta=l.c.p`
  font-size: 1.6rem;
  color: red;
`;var Aa=function(e){let{auth:t}=e;const a=Object(m.n)(),{userPassword:i,userName:o,setUserName:l,setUserPassword:c,defaultPassword:d,loginHandler:s}=H(),[u,p]=Object(r.useState)({name:"",password:""});return n.a.createElement(Na,{onSubmit:function(e){e.preventDefault(),o.trim()&&i.trim()&&i===d?(a("/home"),s()):p({name:o.trim()?"":"Please enter your name",password:i!==d?"Incorrect password":""})}},n.a.createElement(Ga,null,n.a.createElement(Ba,{htmlFor:"username"},"Your Name"),n.a.createElement(Wa,{type:"text",id:"username",placeholder:"Your Name",value:o,onChange:e=>l(e.target.value)}),u.name&&n.a.createElement(Ta,null,u.name)),n.a.createElement(Ga,null,n.a.createElement(Ba,{htmlFor:"password"},"Your Password"),n.a.createElement(Wa,{type:"password",id:"password",value:i,onChange:e=>c(e.target.value)}),u.password&&n.a.createElement(Ta,null,u.password)),n.a.createElement(Ga,null,n.a.createElement(fe,{$textColor:"black",$backgroundColor:"yellow",type:"submit"},"Log in")))};const Da=l.c.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`,Ra=l.c.div`
  background-color: var(--deepGreen);
  border-radius: var(--border-radius-md);
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45rem;
  margin: 0 auto;

  @media (max-width: 450px) {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
  }
`,Fa=l.c.div`
  width: 25rem;
  padding: 0 2rem;
  margin: 0 auto;

  & > img {
    /* width: 100%; */
    object-fit: contain;
  }
`;var Ha=function(){const{auth:e}=H();return n.a.createElement(A,{as:"section",type:"login"},n.a.createElement(D,null,n.a.createElement(Da,null,n.a.createElement(Fa,null,n.a.createElement("img",{src:"icons_assets/Logo.svg",alt:"Logo"})),n.a.createElement(Ra,null,n.a.createElement(x,{as:"h1"},"Log into your account"),n.a.createElement(Aa,{auth:e})))))};const La=l.c.div`
  position: relative;
  width: 100%;
  height: auto;
  /* padding: 2rem 0 2rem 0; */
  /* padding: 2rem 0 2rem 0; */
  /* border: 5px solid blueviolet; */
  /* border: 2px solid blue; */
`,Ma=l.c.div`
  padding: 5rem 0;
`,Pa=l.c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`,qa=l.c.div`
  width: 30%;
  @media (max-width: 950px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,_a=l.c.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: var(--border-radius-lg);
  padding: 0 1rem;
  background-color: ${e=>{let{selected:t}=e;return t?"rgba(255, 255, 255, 0.3)":""}};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,Ua=l.c.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1998px;
  border: 2px solid var(--pureWhite);

  & > img {
    width: 100%;
    border-radius: 1998px;
  }
`,Ya=l.c.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 1rem;
`,Va=l.c.div`
  width: 100%;
`,Ja=l.c.div`
  position: relative;
  text-align: center;
  /* border: 5px solid red; */
`;var Za=function(){const{menus:e,selectedMenuHandler:t}=ct(),a=e.filter(e=>"OTHER FOOD MENU"!==e.generalName).map((e,a)=>{const{list:r,generalName:i}=e;return n.a.createElement(qa,{key:a},n.a.createElement(ue,{fontFamily:" markazi",fontweight:"deepBold",fontSize:"xxxlarge"},i),n.a.createElement(Pa,null,r.map((e,a)=>{const{name:r,price:o,image:l,id:c,selected:d}=e;return n.a.createElement(_a,{selected:d,onClick:()=>{t(c,i)},key:a},n.a.createElement(Ua,null,n.a.createElement("img",{src:l,alt:r})),n.a.createElement(ue,{fontFamily:"karlaText",fontSize:"xlarge"},r),n.a.createElement(ue,{fontFamily:"karlaText",fontweight:"bold",color:"yellow",fontSize:"xxlarge"},"$",o))})))}),r=e.filter(e=>"OTHER FOOD MENU"===e.generalName).map((e,a)=>{const{list:r,generalName:i}=e;return n.a.createElement(Va,{key:a},n.a.createElement(ue,{fontFamily:" markazi",fontweight:"deepBold",fontSize:"xxxlarge"},i),n.a.createElement(Ya,null,r.map((e,a)=>{const{name:r,price:o,image:l,id:c,selected:d}=e;return n.a.createElement(qa,{key:a},n.a.createElement(_a,{onClick:()=>t(c,i),selected:d},n.a.createElement(Ua,null,n.a.createElement("img",{src:l,alt:r})),n.a.createElement(ue,{fontFamily:"karlaText",fontSize:"xlarge"},r),n.a.createElement(ue,{fontFamily:"karlaText",fontweight:"bold",color:"yellow",fontSize:"xxlarge"},"$",o)))})))}),i=e.flatMap(e=>{const{generalName:t,list:a}=e;return a.map(e=>({...e,generalName:t}))}).filter(e=>e.selected),o=i.length>0;return console.log(i.length),n.a.createElement("div",null,n.a.createElement(A,{as:"section",type:"menu"},n.a.createElement(D,null,n.a.createElement(La,null,n.a.createElement(Pa,null,n.a.createElement(Z,{type:"flexMenu"},a)),n.a.createElement(Ma,null,r),n.a.createElement(Ja,null,o&&n.a.createElement(d.b,{to:"/reservations"},n.a.createElement(fe,null,"Continue")))))))};var Ka=function(e){let{children:t}=e;const a=Object(m.n)(),{auth:n}=H();if(Object(r.useEffect)(function(){n||a("/login")},[n,a]),n)return t};var Xa=function(){const[e,t]=Object(r.useState)(0);return n.a.createElement("section",null,n.a.createElement("div",null,n.a.createElement(c,null),n.a.createElement(f,null,n.a.createElement(h,null,n.a.createElement(p,null,n.a.createElement(ua,{remount:e,setremount:t},n.a.createElement(d.a,null,n.a.createElement(m.e,null,n.a.createElement(m.c,{element:n.a.createElement(Ka,null,n.a.createElement(le,null))},n.a.createElement(m.c,{index:!0,element:n.a.createElement(m.a,{replace:!0,to:"/home"})}),n.a.createElement(m.c,{path:"/home",element:n.a.createElement(He,null)}),n.a.createElement(m.c,{path:"/about",element:n.a.createElement(it,null)}),n.a.createElement(m.c,{path:"/reservations",element:n.a.createElement(Ia,null)}),n.a.createElement(m.c,{path:"/orderonline",element:n.a.createElement(Za,null)})),n.a.createElement(m.c,{path:"/login",element:n.a.createElement(Ha,null)}),n.a.createElement(m.c,{path:"*",element:n.a.createElement(y,null)})))))))),n.a.createElement(ia.Toaster,{position:"top center",guttter:12,containerStyles:{margin:"50px"},toastOptions:{success:{duration:3e3},error:{duration:5e3},style:{fontSize:"16px",maxWidth:"500px",padding:"8px 12px",backgroundColor:"#495E57",color:"#ffffff"}}}))};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Xa,null)))}},[[38,1,2]]]);
//# sourceMappingURL=main.6262dd2c.chunk.js.map