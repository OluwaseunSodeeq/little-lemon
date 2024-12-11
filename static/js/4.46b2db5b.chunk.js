(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{33:function(e,r,t){"use strict";t.d(r,"a",function(){return f});var a=t(6);const o=a.b`
  position: fixed;
  top: 0;
  background-color: var(--white);
  z-index: 99;
`,i=a.b`
  background-color: var(--pureWhite);
  padding-bottom: 3rem;
  margin-top: 20rem;

  @media (max-width: 450px) {
    margin-top: 10rem;
  }
`,n=a.b`
  position: relative;
  top: 8rem;
  height: auto;
  background-color: var(--deepGreen);
  /* height: 27rem; */

  @media (max-width: 450px) {
    top: 7rem;
  }
`,l=a.b`
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
`,d=a.b`
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    margin-top: 3rem;
  }
`,m=a.b`
  position: relative;
  height: auto;
  top: 10rem;
  background-color: var(--pureWhite);
  padding-bottom: 5rem;

  @media (max-width: 450px) {
    top: 7rem;
  }
`,c=a.b`
  position: relative;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
  }
`,s=a.b`
  position: relative;
  height: auto;
  margin-top: 5rem;
  background-color: var(--pureWhite);
  margin-bottom: 5rem;

  @media (max-width: 450px) {
    margin-top: 4rem;
  }
`,p=a.b`
  position: relative;
  /* top: 8rem; */
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    /* top: 7rem; */
  }
`,b=a.b`
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
`,u=a.b`
  position: relative;
  background-color: var(--pureWhite);
  bottom: 0;
  /* top: 3rem; */
  padding-top: 3rem;
`,h=a.b`
  position: relative;
  bottom: 0;
  /* top: 10rem; */
  background-color: var(--black);
  height: auto;
  padding: 4rem 0;
`,g=a.b`
  position: relative;
  background-color: var(--pureWhite);
`,f=a.c.div`
  width: 100%;

  /* HEADER */
  ${e=>"header"===e.as&&a.b`
      ${o}
    `}
  /* HOMEPAGE */
  ${e=>"section"===e.as&&"homepage"===e.type&&a.b`
      ${n}
    `}

     /* ABOUT */
  ${e=>"section"===e.as&&"about"===e.type&&a.b`
      ${l}
    `}

/* ReservationText */
${e=>"div"===e.as&&"reservationHeading"===e.type&&a.b`
      ${d}
    `}

    /* Make RESERVATION */
    ${e=>"section"===e.as&&"makeReservation"===e.type&&a.b`
      ${m}
    `}


    /* TOP */
    ${e=>"div"===e.as&&"makeReservationTop"===e.type&&a.b`
      ${c}
    `}
/* BOTTOM */
    ${e=>"div"===e.as&&"makeReservationBottom"===e.type&&a.b`
      ${s}
    `}

    /* Confirm RESERVATION */
    ${e=>"section"===e.as&&"confirmReservation"===e.type&&a.b`
      ${p}
    `}

     /* Menu */
     ${e=>"section"===e.as&&"menu"===e.type&&a.b`
      ${b}
    `}

    /* HElper */
    ${e=>"div"===e.as&&"helper"===e.type&&a.b`
      ${u}
    `}
/* WEEK SPECIAL */
    ${e=>"section"===e.as&&"week"===e.type&&a.b`
      ${i}
    `}
/* FOOTER */
    ${e=>"footer"===e.as&&a.b`
      ${h}
    `}

    /* Login */
    ${e=>"section"===e.as&&"login"===e.type&&a.b`
      ${g}
    `}
`},34:function(e,r,t){"use strict";t.d(r,"a",function(){return a});const a=t(6).c.div`
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
`},35:function(e,r,t){"use strict";t.d(r,"a",function(){return i});var a=t(6);const o=a.b`
  text-align: left;
`,i=a.c.h1`
  ${e=>"h1"===e.as&&a.b`
      font-size: 38px;
      color: var(--yellow);
      text-align: center;
      @media (max-width: 450px) {
        font-size: 24px;
      }
    `}

  ${e=>"h2"===e.as&&a.b`
      font-size: 32px;
      color: var(--black);
    `}
  
  ${e=>"h3"===e.as&&a.b`
      font-size: 28px;
      color: var(--pure-white);
      margin-top: -1rem;
    `}

  ${e=>"h4"===e.as&&a.b`
      font-size: 20px;
      color: var(--pureWhite);
      font-weight: var(--bold);
      font-family: var(--karla);
    `} 
    ${e=>"h5"===e.as&&a.b`
      font-size: 24px;
      color: var(--deepGreen);
      font-weight: var(--bold);
      font-family: var(--karla);
    `} 
    ${e=>"h6"===e.as&&a.b`
      font-size: 20px;
      color: var(--yellow);
      font-weight: var(--bold);
      font-style: italic;
    `} 

  ${o}
`},36:function(e,r,t){"use strict";t.d(r,"a",function(){return d});var a=t(6);const o={small:a.b`
    font-size: 1.2rem;
  `,medium:a.b`
    font-size: 1.4rem;
  `,large:a.b`
    font-size: 1.6rem;
  `,xlarge:a.b`
    font-size: 1.8rem;
    /* font-style: italic; */
  `,xxlarge:a.b`
    font-size: 2rem;
  `,xxxlarge:a.b`
    font-size: 2.8rem;
    font-style: italic;
    text-align: center;
  `,nameSize:a.b`
    font-size: 2.8rem;
    font-style: italic;
  `,extraLarge:a.b`
    font-size: 4rem;

    @media (max-width: 450px) {
      font-size: 3.5rem;
      white-space: nowrap;
    }
  `},i={regular:a.b`
    font-weight: var(--regular);
  `,medium:a.b`
    font-weight: var(--medium);
  `,bold:a.b`
    font-weight: var(--bold);
  `,deepBold:a.b`
    font-weight: var(--deepBold);
  `},n={karla:a.b`
    font-family: var(--karla);
  `,karlaText:a.b`
    font-family: var(--karla);
  `,sanSerif:a.b`
    font-family: "sans-serif";
  `,serif:a.b`
    font-family: "serif";
  `,markazi:a.b`
    font-family: var(--markazi);
  `},l={black:a.b`
    color: var(--black);
  `,red:a.b`
    color: red;
  `,deepGreen:a.b`
    color: var(--deepGreen);
  `,yellow:a.b`
    color: var(--yellow);
  `,pureWhite:a.b`
    color: var(--pureWhite);
  `},d=a.c.p.withConfig({shouldForwardProp:e=>!["fontSize","fontWeight","color","fontFamily"].includes(e)})`
  ${e=>o[e.fontSize]}
  ${e=>i[e.fontWeight]}
  ${e=>l[e.color]}
  ${e=>n[e.fontFamily]}
`;d.defaultProps={color:"pureWhite",fontWeight:"regular",fontSize:"large",fontFamily:"serif"}},37:function(e,r,t){"use strict";t.d(r,"a",function(){return d});var a=t(6);const o={small:a.b`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  `,medium:a.b`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
  `,large:a.b`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
  `,xlarge:a.b`
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem;
  `},i={regular:a.b`
    font-weight: var(--regular);
  `,medium:a.b`
    font-weight: var(--medium);
  `,bold:a.b`
    font-weight: var(--bold);
  `,deepBold:a.b`
    font-weight: var(--deepBold);
  `},n={black:a.b`
    color: var(--black);
    &:hover {
      color: var(--pureWhite);
    }
  `,deepGreen:a.b`
    color: var(--deepGreen);
  `,yellow:a.b`
    color: var(--yellow);
  `,pureWhite:a.b`
    color: var(--pureWhite);
  `},l={black:a.b`
    background-color: var(--black);
  `,deepGreen:a.b`
    background-color: var(--deepGreen);
  `,yellow:a.b`
    background-color: var(--yellow);
    &:hover {
      background-color: var(--deepGreen);
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
  `,pureWhite:a.b`
    background-color: var(--pureWhite);
  `},d=a.c.button`
  position: relative;
  font-family: var(--markazi);
  border-radius: var(--border-radius-md);
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;

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

  ${e=>o[e.$fontSize||"xlarge"]}
  ${e=>i[e.$fontWeight||"bold"]}
  ${e=>n[e.$textColor||"black"]}
  ${e=>l[e.$backgroundColor||"yellow"]}
  
  @media (max-width: 450px) {
    border-radius: var(--border-radius-xlg);
  }
`},39:function(e,r,t){"use strict";t.d(r,"a",function(){return o});var a=t(6);const o=a.c.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${e=>"flexMenu"===e.type&&a.b`
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
  ${e=>"sb"===e.type&&a.b`
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
  ${e=>"sbt"===e.type&&a.b`
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
  ${e=>"grid"===e.type&&a.b`
      justify-content: space-between;
    `}


  ${e=>"gap"===e.type&&a.b`
      gap: 2rem;
    `}

  ${e=>"doubleGap"===e.type&&a.b`
      gap: 8rem;

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
      }
    `}

  ${e=>"center"===e.type&&a.b`
      justify-content: center;
    `}

  ${e=>"column"===e.type&&a.b`
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    `}
    @media (max-width: 768px) {
    gap: 2rem;
  }
`},64:function(e,r,t){"use strict";t.r(r);var a=t(1),o=t.n(a),i=t(6),n=t(33),l=t(34),d=t(35),m=t(36),c=t(37),s=t(10);const p=i.c.div`
  width: 100%;
  position: relative;
  top: 2rem;
  padding: 0px;
  font-family: var(--karla);

  @media (max-width: 450px) {
    /* width: 100%; */
  }
`,b=i.c.div`
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
`,u=i.c.div`
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
`,h=i.c.div`
  padding-top: 2rem;
`;var g=function(){return o.a.createElement(p,null,o.a.createElement(b,null,o.a.createElement(d.a,{as:"h1"},"Little Lemon"),o.a.createElement(d.a,{as:"h3"},"Chicago"),o.a.createElement(m.a,{fontSize:"xlarge"},"We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Come experience the warmth of our hospitality and the vibrant flavors of the Mediterranean, crafted with love and served with a modern twist."),o.a.createElement(h,null,o.a.createElement(c.a,null,o.a.createElement(s.b,{to:"/reservations"}," Reserved Table ")))),o.a.createElement(u,null,o.a.createElement("img",{src:"icons_assets/restauranfood.jpg",alt:"restauranfood"})))};var f=function(){return o.a.createElement(n.a,{as:"section",type:"homepage"},o.a.createElement(l.a,null,o.a.createElement(g,null)))},v=t(39);const w=i.b`
  height: 30rem;
`,x=i.b`
  height: 25rem;
`,y=i.c.div`
  position: relative;
  ${x}
  background-color: var(--white);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-lg);
`,k=i.c.span`
  font-size: 1.8rem;
  font-weight: var(--semi-bold);
  font-family: var(--karla);
  color: var(--black);
`,$=i.c.span`
  font-size: 1.6rem;
  font-weight: var(--semi-bold);
  font-family: var(--karla);
  color: var(--yellow);
`,E=i.c.p`
  font-size: 1.6rem;
  font-weight: var(--regular);
  font-family: var(--karla);
  color: var(--black);
  margin-top: 1.5rem;
`,C=i.c.div`
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
`,z=i.c.span`
  font-weight: var(--semi-bold);
  font-family: var(--karla);
`,W=i.c.span`
  /* color: var(--black); */
  font-weight: var(--bold);
  font-size: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
`,G=i.c.div`
  ${w}
`,L=i.c.div`
  cursor: pointer;
`;var T=function(e){let{card:r}=e;const{name:t,description:a,price:i,image:n}=r;return o.a.createElement(L,null,o.a.createElement(G,null,o.a.createElement("img",{src:n,alt:t})),o.a.createElement(y,null,o.a.createElement(v.a,{type:"grid"},o.a.createElement(k,null,t),o.a.createElement($,null,"$",i)),o.a.createElement(E,null,a),o.a.createElement(C,null,o.a.createElement(z,null,"Order delivery"),o.a.createElement(W,null,o.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 28 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M13.9662 5.73305L5.42372 12.7479V20.3189C5.42372 20.5149 5.50182 20.7029 5.64085 20.8415C5.77987 20.9801 5.96844 21.058 6.16505 21.058L11.3572 21.0446C11.5531 21.0436 11.7407 20.9653 11.879 20.8268C12.0172 20.6883 12.0948 20.5009 12.0948 20.3055V15.8841C12.0948 15.6881 12.1729 15.5001 12.3119 15.3614C12.4509 15.2228 12.6395 15.145 12.8361 15.145H15.8015C15.9981 15.145 16.1866 15.2228 16.3257 15.3614C16.4647 15.5001 16.5428 15.6881 16.5428 15.8841V20.3022C16.5425 20.3995 16.5614 20.4959 16.5986 20.5858C16.6357 20.6757 16.6902 20.7575 16.7591 20.8264C16.828 20.8953 16.9098 20.9499 16.9999 20.9872C17.09 21.0245 17.1866 21.0437 17.2841 21.0437L22.4744 21.058C22.671 21.058 22.8596 20.9801 22.9986 20.8415C23.1376 20.7029 23.2157 20.5149 23.2157 20.3189V12.7428L14.6751 5.73305C14.5747 5.65236 14.4496 5.60836 14.3206 5.60836C14.1917 5.60836 14.0666 5.65236 13.9662 5.73305ZM27.4599 10.5009L23.5864 7.31756V0.919002C23.5864 0.77198 23.5278 0.63098 23.4235 0.527019C23.3193 0.423059 23.1778 0.364655 23.0304 0.364655H20.4357C20.2883 0.364655 20.1468 0.423059 20.0426 0.527019C19.9383 0.63098 19.8797 0.77198 19.8797 0.919002V4.27327L15.7315 0.870497C15.3334 0.543884 14.8339 0.365307 14.3183 0.365307C13.8028 0.365307 13.3032 0.543884 12.9052 0.870497L1.1768 10.5009C1.1205 10.5473 1.07392 10.6043 1.03972 10.6687C1.00553 10.733 0.984381 10.8034 0.977497 10.8759C0.970612 10.9484 0.978123 11.0216 0.999601 11.0912C1.02108 11.1608 1.0561 11.2255 1.10267 11.2816L2.28417 12.7137C2.33061 12.77 2.38773 12.8166 2.45227 12.8509C2.5168 12.8851 2.58748 12.9064 2.66025 12.9134C2.73303 12.9203 2.80647 12.913 2.87638 12.8916C2.94629 12.8703 3.01129 12.8354 3.06767 12.789L13.9662 3.83903C14.0666 3.75834 14.1917 3.71433 14.3206 3.71433C14.4496 3.71433 14.5747 3.75834 14.6751 3.83903L25.5741 12.789C25.6304 12.8354 25.6953 12.8703 25.7651 12.8917C25.8349 12.9132 25.9082 12.9206 25.981 12.9138C26.0537 12.9069 26.1243 12.8858 26.1889 12.8517C26.2534 12.8176 26.3106 12.7712 26.3571 12.7151L27.5386 11.283C27.5851 11.2266 27.62 11.1615 27.6412 11.0916C27.6625 11.0217 27.6696 10.9483 27.6623 10.8756C27.655 10.8029 27.6333 10.7324 27.5986 10.6681C27.5638 10.6038 27.5167 10.547 27.4599 10.5009Z",fill:"currentColor"}))))))};const j=i.c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,O=[{image:"icons_assets/greek salad.jpg",price:"12.99",name:"Greek Salad",description:"The famous Greek salad of srispy lettuce, peppers,olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons."},{image:"icons_assets/bruchetta.svg",price:"5.99",name:"Bruchetta",description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"},{image:"icons_assets/lemon dessert.jpg",price:"8.00",name:"Lemon Dessert",description:"This comes straight from gradma's recipe book, evry last ingrdient has been sourced and is as authentic as can be imagined."}],R=i.c.div`
  margin-top: 2rem;
`;var S=function(){return o.a.createElement(n.a,{as:"section",type:"week"},o.a.createElement(l.a,null,o.a.createElement(v.a,{type:"sbt"},o.a.createElement(m.a,{fontSize:"extraLarge",color:"black",fontWeight:"bold"},"This week specials!"),o.a.createElement(c.a,null,o.a.createElement(s.b,{to:"/orderonline"},"Online Menu"))),o.a.createElement(R,null,o.a.createElement(j,null,O.map((e,r)=>o.a.createElement(T,{card:e,key:r}))))))};const B=i.c.section`
  position: relative;
  padding: 0;
`;r.default=function(){return o.a.createElement(B,null,o.a.createElement(f,null),o.a.createElement(S,null))}}}]);
//# sourceMappingURL=4.46b2db5b.chunk.js.map