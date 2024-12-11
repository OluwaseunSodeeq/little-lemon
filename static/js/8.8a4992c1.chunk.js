(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{33:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var i=a(6);const o=i.b`
  position: fixed;
  top: 0;
  background-color: var(--white);
  z-index: 99;
`,r=i.b`
  background-color: var(--pureWhite);
  padding-bottom: 3rem;
  margin-top: 20rem;

  @media (max-width: 450px) {
    margin-top: 10rem;
  }
`,n=i.b`
  position: relative;
  top: 8rem;
  height: auto;
  background-color: var(--deepGreen);
  /* height: 27rem; */

  @media (max-width: 450px) {
    top: 7rem;
  }
`,p=i.b`
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
`,m=i.b`
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    margin-top: 3rem;
  }
`,d=i.b`
  position: relative;
  height: auto;
  top: 10rem;
  background-color: var(--pureWhite);
  padding-bottom: 5rem;

  @media (max-width: 450px) {
    top: 7rem;
  }
`,c=i.b`
  position: relative;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
  }
`,l=i.b`
  position: relative;
  height: auto;
  margin-top: 5rem;
  background-color: var(--pureWhite);
  margin-bottom: 5rem;

  @media (max-width: 450px) {
    margin-top: 4rem;
  }
`,s=i.b`
  position: relative;
  /* top: 8rem; */
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    /* top: 7rem; */
  }
`,u=i.b`
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
`,b=i.b`
  position: relative;
  background-color: var(--pureWhite);
  bottom: 0;
  /* top: 3rem; */
  padding-top: 3rem;
`,h=i.b`
  position: relative;
  bottom: 0;
  /* top: 10rem; */
  background-color: var(--black);
  height: auto;
  padding: 4rem 0;
`,x=i.b`
  position: relative;
  background-color: var(--pureWhite);
`,g=i.c.div`
  width: 100%;

  /* HEADER */
  ${e=>"header"===e.as&&i.b`
      ${o}
    `}
  /* HOMEPAGE */
  ${e=>"section"===e.as&&"homepage"===e.type&&i.b`
      ${n}
    `}

     /* ABOUT */
  ${e=>"section"===e.as&&"about"===e.type&&i.b`
      ${p}
    `}

/* ReservationText */
${e=>"div"===e.as&&"reservationHeading"===e.type&&i.b`
      ${m}
    `}

    /* Make RESERVATION */
    ${e=>"section"===e.as&&"makeReservation"===e.type&&i.b`
      ${d}
    `}


    /* TOP */
    ${e=>"div"===e.as&&"makeReservationTop"===e.type&&i.b`
      ${c}
    `}
/* BOTTOM */
    ${e=>"div"===e.as&&"makeReservationBottom"===e.type&&i.b`
      ${l}
    `}

    /* Confirm RESERVATION */
    ${e=>"section"===e.as&&"confirmReservation"===e.type&&i.b`
      ${s}
    `}

     /* Menu */
     ${e=>"section"===e.as&&"menu"===e.type&&i.b`
      ${u}
    `}

    /* HElper */
    ${e=>"div"===e.as&&"helper"===e.type&&i.b`
      ${b}
    `}
/* WEEK SPECIAL */
    ${e=>"section"===e.as&&"week"===e.type&&i.b`
      ${r}
    `}
/* FOOTER */
    ${e=>"footer"===e.as&&i.b`
      ${h}
    `}

    /* Login */
    ${e=>"section"===e.as&&"login"===e.type&&i.b`
      ${x}
    `}
`},34:function(e,t,a){"use strict";a.d(t,"a",function(){return i});const i=a(6).c.div`
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
`},35:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var i=a(6);const o=i.b`
  text-align: left;
`,r=i.c.h1`
  ${e=>"h1"===e.as&&i.b`
      font-size: 38px;
      color: var(--yellow);
      text-align: center;
      @media (max-width: 450px) {
        font-size: 24px;
      }
    `}

  ${e=>"h2"===e.as&&i.b`
      font-size: 32px;
      color: var(--black);
    `}
  
  ${e=>"h3"===e.as&&i.b`
      font-size: 28px;
      color: var(--pure-white);
      margin-top: -1rem;
    `}

  ${e=>"h4"===e.as&&i.b`
      font-size: 20px;
      color: var(--pureWhite);
      font-weight: var(--bold);
      font-family: var(--karla);
    `} 
    ${e=>"h5"===e.as&&i.b`
      font-size: 24px;
      color: var(--deepGreen);
      font-weight: var(--bold);
      font-family: var(--karla);
    `} 
    ${e=>"h6"===e.as&&i.b`
      font-size: 20px;
      color: var(--yellow);
      font-weight: var(--bold);
      font-style: italic;
    `} 

  ${o}
`},39:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var i=a(6);const o=i.c.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${e=>"flexMenu"===e.type&&i.b`
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
  ${e=>"sb"===e.type&&i.b`
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
  ${e=>"sbt"===e.type&&i.b`
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
  ${e=>"grid"===e.type&&i.b`
      justify-content: space-between;
    `}


  ${e=>"gap"===e.type&&i.b`
      gap: 2rem;
    `}

  ${e=>"doubleGap"===e.type&&i.b`
      gap: 8rem;

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
      }
    `}

  ${e=>"center"===e.type&&i.b`
      justify-content: center;
    `}

  ${e=>"column"===e.type&&i.b`
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    `}
    @media (max-width: 768px) {
    gap: 2rem;
  }
`},59:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),r=a(6),n=a(39),p=a(33),m=a(34),d=a(35);const c=r.c.div`
  @media (max-width: 450px) {
    display: inline-block;
    padding: 0;
  }
`,l=r.c.ul``,s=r.c.li`
  font-size: 1.8rem;
  font-weight: normal;
  font-style: capitalize;
  color: var(--pureWhite);
  letter-spacing: 1.5px;
  font-family: var(--markazi);

  @media (max-width: 450px) {
    margin-left: 1rem;
  }
`;var u=function(e){let{content:t}=e;const{heading:a,contentArray:i}=t;return o.a.createElement(c,null,o.a.createElement(d.a,{as:"h4"},a),o.a.createElement(l,null,i.map(e=>o.a.createElement(s,{key:e},e))))};const b=[{heading:"Doormat Navigation",contentArray:["Home","About","Menu","Reservation","Order Online","Login"]},{heading:"Contact Us",contentArray:["Address","Phone","Email"]},{heading:"Social Media",contentArray:["Facebook","Twitter","Instagram"]}],h=r.c.div`
  width: 25rem;
  img {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 70%;
  }
`,x=r.c.div`
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
`;t.default=function(){return o.a.createElement(p.a,{as:"footer"},o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(n.a,{type:"doubleGap"},o.a.createElement(h,null,o.a.createElement("img",{src:"icons_assets/Logo.svg",alt:"Footer Logo"})),o.a.createElement(x,null,b.map((e,t)=>o.a.createElement(u,{content:e,key:t})))))))}}}]);
//# sourceMappingURL=8.8a4992c1.chunk.js.map