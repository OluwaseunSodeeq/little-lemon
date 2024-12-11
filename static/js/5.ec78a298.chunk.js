(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{33:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var a=r(6);const o=a.b`
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
`,u=a.b`
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
`,h=a.b`
  position: relative;
  background-color: var(--pureWhite);
  bottom: 0;
  /* top: 3rem; */
  padding-top: 3rem;
`,b=a.b`
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
      ${u}
    `}

    /* HElper */
    ${e=>"div"===e.as&&"helper"===e.type&&a.b`
      ${h}
    `}
/* WEEK SPECIAL */
    ${e=>"section"===e.as&&"week"===e.type&&a.b`
      ${i}
    `}
/* FOOTER */
    ${e=>"footer"===e.as&&a.b`
      ${b}
    `}

    /* Login */
    ${e=>"section"===e.as&&"login"===e.type&&a.b`
      ${g}
    `}
`},34:function(e,t,r){"use strict";r.d(t,"a",function(){return a});const a=r(6).c.div`
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
`},35:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(6);const o=a.b`
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
`},36:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var a=r(6);const o={small:a.b`
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
`;d.defaultProps={color:"pureWhite",fontWeight:"regular",fontSize:"large",fontFamily:"serif"}},37:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var a=r(6);const o={small:a.b`
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
`},65:function(e,t,r){"use strict";r.r(t);var a=r(1),o=r.n(a),i=r(6),n=r(36),l=r(35);const d=i.c.div`
  width: 75%;
  margin: 0 auto;
  height: auto;
  padding: 7rem 0 0;

  @media (max-width: 450px) {
    /* flex-direction: column;
    justify-content: center; */
  }
`,m=i.c.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 450px) {
    display: block;
  }
`,c=i.c.div`
  margin-left: 3%;
  @media (max-width: 450px) {
    margin-left: 0;
  }
`,s=i.c.div`
  width: 70%;
  margin-top: 2rem;

  @media (max-width: 950px) {
    margin-top: 0;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`,p=i.c.div`
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
`;var u=function(){return o.a.createElement(d,null,o.a.createElement(m,null,o.a.createElement(p,null,o.a.createElement("img",{src:"icons_assets/Mario&Adrian.png",alt:"CEOS"})),o.a.createElement(s,null,o.a.createElement(n.a,{color:"deepGreen"},"Hi, I'm Oluwaseun Sodeeq, the proud owner of Little Lemon. Growing up, I watched my parents pour their hearts into this restaurant, and I\u2019m committed to continuing their dedication to quality and hospitality. It brings me great joy to welcome you to Little Lemon, where every meal is a celebration of flavor and tradition."))),o.a.createElement(c,null,o.a.createElement(n.a,{color:"yellow",fontSize:"nameSize"},"Oluwaseun Sodeeq"),o.a.createElement(l.a,{as:"h5"},"CEO")))},h=r(37),b=r(10);const g=i.c.div`
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
`,f=i.c.div`
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
`,v=i.c.div`
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
`,w=i.c.div`
  margin-right: 5%;
`;var x=function(){return o.a.createElement(g,null,o.a.createElement(f,null,o.a.createElement(v,null,"ABOUT US")),o.a.createElement(w,null,o.a.createElement(h.a,null,o.a.createElement(b.b,{to:"/orderonline"}," ORDER ONLINE"))))};const y=i.c.div`
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
`,k=i.c.div`
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
`,E=i.c.div`
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
`,$=i.c.div`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`,z=i.c.div`
  width: 2.5rem;
  height: 0.2rem;
  background-color: var(--yellow);
`,W=i.c.div`
  margin-top: 2rem;
  text-align: center;
`;var G=function(){return o.a.createElement(y,null,o.a.createElement(k,null,o.a.createElement(l.a,{as:"h6"},"Fill the Belly First"),o.a.createElement($,null,o.a.createElement(z,null)," ",o.a.createElement(l.a,{as:"h5"},"EST.1998"),o.a.createElement(z,null)),o.a.createElement(l.a,{as:"h1"},"A Legacy of Great Taste"),o.a.createElement(n.a,{color:"deepGreen"},"Welcome to Little Lemon! Our restaurant has been a beloved part of the community for generations, founded by my parents with a vision to bring people together over delicious, home-cooked meals. Today, I proudly continue their legacy, blending traditional recipes with modern flavors. Little Lemon is the perfect spot for creating memories over flavorful, fresh dishes."),o.a.createElement(W,null),o.a.createElement(l.a,{as:"h6"},"Mission, Values & Specialties"),o.a.createElement(n.a,{color:"deepGreen"},'At Little Lemon, we\'re dedicated to serving freshly prepared, high-quality meals that cater to all tastes. From local delicacies to international favorites, our menu has something for everyone, including our signature dish: "African Food". We value tradition, hospitality, and the joy of sharing great food. Every bite is crafted with care to bring happiness to your table.')),o.a.createElement(E,null,o.a.createElement("img",{src:"icons_assets/restaurantchef.jpg",alt:"Chef"})))},O=r(33),S=r(34);const L=i.c.section`
  position: relative;
  padding: 0;
  padding-bottom: 10rem;
`;t.default=function(){return o.a.createElement(O.a,{as:"section",type:"about"},o.a.createElement(S.a,null,o.a.createElement(L,null,o.a.createElement(x,null),o.a.createElement(G,null),o.a.createElement(u,null))))}}}]);
//# sourceMappingURL=5.ec78a298.chunk.js.map