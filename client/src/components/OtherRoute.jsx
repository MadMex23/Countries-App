import React from "react";
import { NavLink } from "react-router-dom";

const OtherRoute = () => {
  return (
    <div className="wrong">
      <h1 className="wrongAlert">Oops...Wrong Route!</h1>
      <NavLink className="wronglink" to="/">
        <h3>Click here to go home</h3>
      </NavLink>
    </div>
  );
};

export default OtherRoute;
