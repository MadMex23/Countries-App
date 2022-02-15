import React from "react";
import "./CSS/Countries.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="nfTitle">Oops...Country Not Found :(</h1>
      <p className="nfDesc">
        <strong>Click on "Clean Search" or type another Country</strong>
      </p>
    </div>
  );
};

export default NotFound;
