import React from "react";
import CountryCard from "./CountryCard";
import "./CSS/Countries.css";

const CountriesCards = ({ countries }) => {
  return (
    <div className="cards">
      {countries?.map((c) => {
        return (
          <CountryCard
            key={c.id}
            id={c.id}
            name={c.name}
            flag={c.flag}
            continent={c.continent}
          />
        );
      })}
    </div>
  );
};

export default CountriesCards;
