(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{33:function(e,t,a){"use strict";a.d(t,"a",function(){return v});var o=a(6);const r=o.b`
  position: fixed;
  top: 0;
  background-color: var(--white);
  z-index: 99;
`,i=o.b`
  background-color: var(--pureWhite);
  padding-bottom: 3rem;
  margin-top: 20rem;

  @media (max-width: 450px) {
    margin-top: 10rem;
  }
`,n=o.b`
  position: relative;
  top: 8rem;
  height: auto;
  background-color: var(--deepGreen);
  /* height: 27rem; */

  @media (max-width: 450px) {
    top: 7rem;
  }
`,l=o.b`
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
`,m=o.b`
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    margin-top: 3rem;
  }
`,c=o.b`
  position: relative;
  height: auto;
  top: 10rem;
  background-color: var(--pureWhite);
  padding-bottom: 5rem;

  @media (max-width: 450px) {
    top: 7rem;
  }
`,d=o.b`
  position: relative;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
  }
`,p=o.b`
  position: relative;
  height: auto;
  margin-top: 5rem;
  background-color: var(--pureWhite);
  margin-bottom: 5rem;

  @media (max-width: 450px) {
    margin-top: 4rem;
  }
`,s=o.b`
  position: relative;
  /* top: 8rem; */
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    /* top: 7rem; */
  }
`,g=o.b`
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
`,u=o.b`
  position: relative;
  background-color: var(--pureWhite);
  bottom: 0;
  /* top: 3rem; */
  padding-top: 3rem;
`,b=o.b`
  position: relative;
  bottom: 0;
  /* top: 10rem; */
  background-color: var(--black);
  height: auto;
  padding: 4rem 0;
`,h=o.b`
  position: relative;
  background-color: var(--pureWhite);
`,v=o.c.div`
  width: 100%;

  /* HEADER */
  ${e=>"header"===e.as&&o.b`
      ${r}
    `}
  /* HOMEPAGE */
  ${e=>"section"===e.as&&"homepage"===e.type&&o.b`
      ${n}
    `}

     /* ABOUT */
  ${e=>"section"===e.as&&"about"===e.type&&o.b`
      ${l}
    `}

/* ReservationText */
${e=>"div"===e.as&&"reservationHeading"===e.type&&o.b`
      ${m}
    `}

    /* Make RESERVATION */
    ${e=>"section"===e.as&&"makeReservation"===e.type&&o.b`
      ${c}
    `}


    /* TOP */
    ${e=>"div"===e.as&&"makeReservationTop"===e.type&&o.b`
      ${d}
    `}
/* BOTTOM */
    ${e=>"div"===e.as&&"makeReservationBottom"===e.type&&o.b`
      ${p}
    `}

    /* Confirm RESERVATION */
    ${e=>"section"===e.as&&"confirmReservation"===e.type&&o.b`
      ${s}
    `}

     /* Menu */
     ${e=>"section"===e.as&&"menu"===e.type&&o.b`
      ${g}
    `}

    /* HElper */
    ${e=>"div"===e.as&&"helper"===e.type&&o.b`
      ${u}
    `}
/* WEEK SPECIAL */
    ${e=>"section"===e.as&&"week"===e.type&&o.b`
      ${i}
    `}
/* FOOTER */
    ${e=>"footer"===e.as&&o.b`
      ${b}
    `}

    /* Login */
    ${e=>"section"===e.as&&"login"===e.type&&o.b`
      ${h}
    `}
`},34:function(e,t,a){"use strict";a.d(t,"a",function(){return o});const o=a(6).c.div`
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
`},58:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a.n(o),i=a(6),n=a(33),l=a(34),m=a(10),c=a(11);const d=i.c.div`
  display: inline-block;
`;var p=function(){const{toggleHamburger:e}=Object(c.a)();return r.a.createElement(d,null,r.a.createElement("div",{onClick:e},r.a.createElement(m.b,{to:"/home"},r.a.createElement("img",{src:"icons_assets/Logo.svg",alt:"Logo"}))))};const s=i.c.nav`
  color: var(--deepGreen);
  display: block;
  transition: all 2s;

  @media (max-width: 950px) {
    padding: 3rem 0;
    width: 99%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 90;
    background-color: var(--white);
    transition: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    display: ${e=>{let{$hamburger:t}=e;return t?"block":"none"}};
    top: ${e=>{let{$hamburger:t}=e;return t?"25rem":"0"}};
  }
`,g=Object(i.c)(m.c)`
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
`,u=i.c.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;var b=function(e){let{openHamburger:t,onToggleHamburger:a}=e;const{logoutHandler:o}=Object(c.a)();return r.a.createElement(s,{$hamburger:t},r.a.createElement(u,null,r.a.createElement("li",{onClick:a},r.a.createElement(g,{to:"/home"},"Home")),r.a.createElement("li",{onClick:a},r.a.createElement(g,{to:"/about"},"About")),r.a.createElement("li",{onClick:a},r.a.createElement(g,{to:"/reservations"},"Reservations")),r.a.createElement("li",{onClick:a},r.a.createElement(g,{to:"/orderonline"},"Order Online")),r.a.createElement("li",{onClick:()=>{o(),a()}},r.a.createElement(g,{to:"/login"},"Logout"))))};const h=i.c.div`
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
`,v=i.c.span`
  font-size: 1.8rem;
  cursor: pointer;
`,x=i.c.div`
  position: relative;
  z-index: 90;
  color: var(--deepGreen);
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;t.default=function(){const{open:e,closeHamburger:t,toggleHamburger:a}=Object(c.a)();return r.a.createElement(n.a,{as:"header"},r.a.createElement(l.a,null,r.a.createElement(h,null,r.a.createElement("div",{onClick:t},r.a.createElement(p,null)),r.a.createElement(x,{onClick:a},e?r.a.createElement(v,null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-x",viewBox:"0 0 12 12"},r.a.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"}))):r.a.createElement(v,null,r.a.createElement("svg",{width:"25",height:"25",viewBox:"0 0 35 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z",fill:"currentColor"})))),r.a.createElement(b,{openHamburger:e,onToggleHamburger:a}))))}}}]);
//# sourceMappingURL=10.13e21445.chunk.js.map