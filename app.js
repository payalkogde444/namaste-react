// const heading=React.createElement('h1',{id:"heading"},"Hello world from react!");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// import React, { createElement } from "react"
// import ReactDOM, { createRoot } from "react-dom/client"

/**
 * Header
 * -logo
 * -Nav Items
 * Body
 *  -search
 *  -RestraurantContainer
 * -RestraurantCard
 *   -Img
 *    -Name of Res,Star Rating,cuisine,delery tie
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";



const ele= <span>"I am using JSX composition"</span>

const Heading = () => {
  return(
  
  <h1>Namaste react using Jsx</h1>

  
  );
   
};

const number=1589;
const Title = () => {
  return (
    <div>
       {/* <Heading /> */}
     {  Heading()}
       <h2>{3444+1000}</h2>
       <h2>{console.log("Hey! I am Payal hear")}</h2>
      <h1>Here I am learning JavaScript</h1>
     {ele}
    </div>
  );
};                             
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Title());















// const Header=()=>{
//   return(
//   <div className="heading">
//     <div>
//       <img   
//        className="logo "
//         src="https://img.freepik.com/premium-vector/burger-logo-template_441059-18.jpg"
//       />
//     </div>
//     <div className="nav_item">
//        <ul>
//         <li>HOME</li>
//         <li>ABOUT US</li>
//         <li>CONTACT US</li>
//         <li>CARD</li>
//        </ul>
//     </div>
//   </div>
//   );
// };

// const RestraurantCard = () => {
//   return (
//     <div className="res_card">
//       <img className="cardimg"alt="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cvo1djhbwrgfqd64k0tl" />
//       <h3>Meghna Foods</h3>  
//      <h4>Biryani ,North Indian ,Asian</h4>
//      <h4>4.3 stars</h4>
//      <h4>38 minutes </h4>
//     </div>
//   );
// };
// const Body=()=>{
//    return(
//     <div className="body">
//        <div className="searchbar"> 
//         Search
//        </div>
//        <div className="box"> </div>
//        <div className="res_container"> 
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        <RestraurantCard/>
//        </div>
      
//     </div> 
//    );
// }

// const AppLayout=()=>{
//   return (
//     <div className="app">
//     <Header/>
//     <Body/>
//     </div>
//   );
// };
  
// const root=createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);