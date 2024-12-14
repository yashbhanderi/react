import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';

const Parent = () => {
  const msg = 10;

  const callbackFunctionOfParent = () => {
    return "Callback function from Parent";
  } 

  return <Child message={msg} callback={callbackFunctionOfParent} />;
};

Parent.propTypes = {
  callback: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

const Child = (props) => {
  const { message, callback } = props;
  console.log(props);
  

  return (
    <div>
      <h2>{message}</h2>
      <h2>{callback()}</h2>
    </div>
  );
};

const ListRendering = () => {
  const cities = ['surat', 'ahmedabad', 'vadodara', 'rajkot'];

  return (
    <ul>
      {cities.map((city, index) => <li key={index}><h3>{city}</h3></li>)}
    </ul>
  );
}

const Fragment = () => {
  return (
    <>
      <h2>Fragment Component</h2>
    </>

    // <React.Fragment>
    //   <h2>Fragment Component</h2>
    // </React.Fragment>
  );  
}

const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <Parent />
      <ListRendering />
      <Fragment />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
