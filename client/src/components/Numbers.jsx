import React from "react";
import "./CSS/Countries.css";

const Numbers = ({ countries, paged }) => {
  const pageNumbers = [];
  const pageCount = Math.ceil(countries.length / 10);
  for (let i = 1; i < pageCount + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="numbers">
      {pageNumbers?.map((n) => {
        return (
          <div key={n}>
            <button onClick={() => paged(n)} className="numbtn">
              {n}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Numbers;
