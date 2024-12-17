import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
import { States } from "./states";

// const Parent = () => {
//   const msg = 10;

//   const callbackFunctionOfParent = () => {
//     return "Callback function from Parent";
//   } 

//   return <Child message={msg} callback={callbackFunctionOfParent} />;
// };

// Parent.propTypes = {
//   callback: PropTypes.func.isRequired,
//   message: PropTypes.string.isRequired,
// };

// const Child = (props) => {
//   const { message, callback } = props;
//   console.log(props);
  

//   return (
//     <div>
//       <h2>{message}</h2>
//       <h2>{callback()}</h2>
//     </div>
//   );
// };

// const ListRendering = () => {
//   const cities = ['surat', 'ahmedabad', 'vadodara', 'rajkot'];

//   return (
//     <ul>
//       {cities.map((city, index) => <li key={index}><h3>{city}</h3></li>)}
//     </ul>
//   );
// }

// const Fragment = () => {
//   return (
//     <>
//       <h2>Fragment Component</h2>
//     </>

//     // <React.Fragment>
//     //   <h2>Fragment Component</h2>
//     // </React.Fragment>
//   );  
// }

const handleClick = (count) => {
  console.log(count);
  
  console.log("Button Clicked");
}

const App = () => {
  return (
    <div>
      {/* <h1>Hello React!</h1> */}
      {/* <Parent />
      <ListRendering />
      <Fragment /> */}

      {/* <button onClick={handleClick} >Click me</button> */}
      {/* <button onClick={() => handleClick(1)} >Click me</button> */}

      <States />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
