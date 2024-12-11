(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){"use strict";var r=a(1),n=a(9);t.a=function(){const e=Object(r.useContext)(n.a);if(void 0===e)throw new Error(" context was used outside open context provider");return e}},14:function(e,t,a){"use strict";a.d(t,"a",function(){return r});const r=[{generalName:"Paste",list:[{id:"00",selected:!1,name:"Special Pasta",price:"10",image:"images/menuImages/special_pasta.jpg"},{id:"01",selected:!1,name:"Small Pasta",price:"3",image:"images/menuImages/small_pasta.jpg"},{id:"02",selected:!1,name:"Medium Pasta",price:"5",image:"images/menuImages/medium_pasta.jpg"},{id:"03",selected:!1,name:"Big Pasta",price:"8",image:"images/menuImages/big_pasta.jpg"}]},{generalName:"Burger",list:[{id:"04",selected:!1,name:"Special Burger",price:"10",image:"images/menuImages/special-burger.jpg"},{id:"05",selected:!1,name:"Small Burger",price:"3",image:"images/menuImages/small_burger.jpg"},{id:"06",selected:!1,name:"Medium Burger",price:"5",image:"images/menuImages/medium_burger.jpg"},{id:"07",selected:!1,name:"Big Burger",price:"8",image:"images/menuImages/big_burger.webp"}]},{generalName:"Pizza",list:[{id:"08",selected:!1,name:"Special Pizza",price:"10",image:"images/menuImages/special_pizza1.jpg"},{id:"09",selected:!1,name:"Small Pizza",price:"3",image:"images/menuImages/small-pizza1.jpg"},{id:"10",selected:!1,name:"Medium Pizza",price:"5",image:"images/menuImages/medium_pizza.jpg"},{id:"11",selected:!1,name:"Big Pizza",price:"8",image:"images/menuImages/big-pizza.jpg"}]},{selected:!1,generalName:"OTHER FOOD MENU",list:[{id:"12",selected:!1,name:"Fried Rice",price:"5",image:"images/menuImages/fried_rice.jpg"},{id:"13",selected:!1,name:"Jollof Rice",price:"7",image:"images/menuImages/joolof_rice.png"},{id:"14",selected:!1,name:"Eba & Egusi",price:"2",image:"images/menuImages/eba.jpg"},{id:"15",selected:!1,name:"Amala & Gbegiri",price:"10",image:"images/menuImages/amala.png"},{id:"16",selected:!1,name:"Agoyin Beans",price:"12",image:"images/menuImages/agoyin_beans.jpg"},{id:"17",selected:!1,name:"Yellow Rice",price:"2",image:"images/menuImages/yellow_rice.jpg"},{id:"18",selected:!1,name:"Hausa Tuwo",price:"2",image:"images/menuImages/tuwo.jpg"},{id:"19",selected:!1,name:"Semovita & Egusi",price:"7",image:"images/menuImages/semo.jpg"}]}]},24:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(19),l=a.n(i),s=a(6);var o=s.a`

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
`,c=a(10),m=a(2),u=a(11);var d=function(e){let{children:t}=e;const a=Object(m.n)(),{auth:n}=Object(u.a)();if(Object(r.useEffect)(function(){n||a("/login")},[n,a]),n)return t},g=a(18);const p=s.d`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,b=s.c.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=s.c.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: transparent;
  border: 0.5rem dashed
    ${e=>{let{theme:t}=e;return t.contentColor||"var(--deepGreen)"}};
  animation: ${p} 5s linear infinite;
`;var h=function(){return n.a.createElement(b,null,n.a.createElement(f,null))},y=a(9);const E=n.a.lazy(()=>a.e(12).then(a.bind(null,60))),S=n.a.lazy(()=>a.e(4).then(a.bind(null,64))),I=n.a.lazy(()=>a.e(5).then(a.bind(null,65))),z=n.a.lazy(()=>Promise.all([a.e(3),a.e(6)]).then(a.bind(null,63))),j=n.a.lazy(()=>a.e(9).then(a.bind(null,66))),v=n.a.lazy(()=>a.e(7).then(a.bind(null,61))),w=n.a.lazy(()=>a.e(11).then(a.bind(null,62)));var x=function(){const[e,t]=Object(r.useState)(0);return n.a.createElement("section",null,n.a.createElement(o,null),n.a.createElement(y.b,{remount:e,setremount:t},n.a.createElement(c.a,null,n.a.createElement(r.Suspense,{fallback:n.a.createElement(h,null)},n.a.createElement(m.e,null,n.a.createElement(m.c,{element:n.a.createElement(d,null,n.a.createElement(E,null))},n.a.createElement(m.c,{index:!0,element:n.a.createElement(m.a,{replace:!0,to:"/home"})}),n.a.createElement(m.c,{path:"/home",element:n.a.createElement(S,null)}),n.a.createElement(m.c,{path:"/about",element:n.a.createElement(I,null)}),n.a.createElement(m.c,{path:"/reservations",element:n.a.createElement(z,null)}),n.a.createElement(m.c,{path:"/orderonline",element:n.a.createElement(v,null)})),n.a.createElement(m.c,{path:"/login",element:n.a.createElement(j,null)}),n.a.createElement(m.c,{path:"*",element:n.a.createElement(w,null)}))))),n.a.createElement(g.Toaster,{position:"top center",guttter:12,containerStyles:{margin:"50px"},toastOptions:{success:{duration:3e3},error:{duration:5e3},style:{fontSize:"16px",maxWidth:"500px",padding:"8px 12px",backgroundColor:"#495E57",color:"#ffffff"}}}))};l.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)))},9:function(e,t,a){"use strict";a.d(t,"a",function(){return g}),a.d(t,"b",function(){return p});var r=a(1),n=a.n(r),i=a(14),l=a(22),s=a(15),o=a(17),c=a(16),m=a(8);const u={date:"",dinner:"",occasion:"",time:"",seating:"",firstName:"",lastName:"",tel:"",email:"",textArea:"",countryCode:"NG"},d=(e,t)=>{switch(t.type){case"date":return{...e,date:t.payload};case"dinner":return{...e,dinner:t.payload};case"occasion":return{...e,occasion:t.payload};case"time":return{...e,time:t.payload};case"seating":return{...e,seating:t.payload};case"firstName":return{...e,firstName:t.payload};case"lastName":return{...e,lastName:t.payload};case"email":return{...e,email:t.payload};case"tel":return{...e,tel:t.payload};case"countryCode":return{...e,countryCode:t.payload};case"textArea":return{...e,textArea:t.payload};case"reset":return{...u};default:throw new Error("Unknown action type")}},g=Object(r.createContext)();function p(e){let{children:t,remount:a,setremount:p}=e;const[b,f]=Object(r.useState)(""),[h,y]=Object(r.useState)("user2024"),[E,S]=Object(r.useState)(!1),[I,z]=Object(r.useState)(!1),[j,v]=Object(r.useState)(i.a),[w,x]=Object(r.useState)([]),[O,D]=Object(r.useState)([]),N=j.flatMap(e=>e.list).filter(e=>!0===e.selected);console.log(w);const[k,P]=Object(r.useState)(!1),B=JSON.parse(localStorage.getItem("reservationState"))||u,[_,C]=Object(r.useReducer)(d,B);Object(r.useEffect)(()=>{localStorage.setItem("reservationState",JSON.stringify(_))},[_]);const{date:T,time:M,dinner:A,occasion:H}=_,F=[{currentID:3,label:"Number of Diners",beforeIcon:n.a.createElement(s.a,{style:{fontSize:"3rem",color:"inherit"}}),value:A||"No. of Diners",afterIcon:n.a.createElement(m.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"select",options:["1 Diner","2 Diners","3 Diners","4 Diners","5 Diners","6 Diners","7 Diners","8 Diners","9 Diners","10 Diners"],name:"dinner",id:"dinner",placeholder:"No. of Diners"},{currentID:1,label:"Time",beforeIcon:n.a.createElement(c.a,{style:{fontSize:"3rem",color:"inherit"}}),value:M||"Select Time",afterIcon:n.a.createElement(m.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"select",options:["Morning","Afternoon","Evening","Night"],name:"time",id:"time",placeholder:"Select Time"},{currentID:2,label:"Occasion",beforeIcon:n.a.createElement(o.a,{style:{fontSize:"3rem",color:"inherit"}}),value:H||"Occasion",afterIcon:n.a.createElement(m.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"select",options:["Birthday","Anniversary","Graduation","Other"],name:"occasion",id:"occasion",placeholder:"Occasion"},{currentID:0,label:"Date",beforeIcon:n.a.createElement(l.a,{style:{fontSize:"3rem",color:"inherit"}}),value:T||"Select Date",afterIcon:n.a.createElement(m.a,{style:{fontSize:"3.4rem",color:"inherit"}}),inputType:"input",name:"date",id:"date",placeholder:"Select Date"}],[R,G]=Object(r.useState)(F);return n.a.createElement(g.Provider,{key:a,value:{auth:E,userPassword:h,userName:b,setUserName:f,setUserPassword:y,defaultPassword:"user2024",loginHandler:()=>{b.trim()&&h.trim()&&(""!==b&&"user2024"===h?S(!0):console.error("Invalid username or password"))},logoutHandler:()=>{S(!1),f(""),y("user2024")},menus:j,setMenus:v,selectedMenuHandler:(e,t)=>{const a=j.map(a=>{const{generalName:r,list:n}=a;if(r===t){const a=n.map(t=>t.id===e?{...t,selected:!t.selected}:t);return{...r,list:a,generalName:t}}return a});v(a)},setUserBookedData:x,userSelectedItems:O,setUserSelectedItems:D,isAnyItemSelected:N,open:I,toggleHamburger:()=>z(e=>!e),closeHamburger:()=>z(!1),dispatch:C,state:_,initialState:u,resetHandler:()=>{localStorage.removeItem("reservationState"),C({type:"reset"}),p(e=>e+1),localStorage.setItem("reservationState",JSON.stringify(_))},formSubmitted:k,setFormSubmitted:P,initialContent:F,setContent:G,content:R,setremount:p}},t)}}},[[24,1,2]]]);
//# sourceMappingURL=main.c1d10a98.chunk.js.map