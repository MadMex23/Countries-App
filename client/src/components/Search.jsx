import React from "react";
import { useDispatch } from "react-redux";
import { foundCountries } from "../redux/actions";
import "./CSS/Search.css";

const FilterCountries = () => {
  const dispatch = useDispatch();

  let [input, setInput] = React.useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Type a Country");
      return false
    }
    dispatch(foundCountries(input));
    setInput("");
    e.target.reset();
  };

  return (
    <div className="wrap">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="searchinput"
          type="text"
          placeholder="Country..."
          value={input}
          onChange={handleChange}
        />
        <button className="searchbtn" type="submit">
          <img
            className="icon"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png"
            alt="icon"
          />
        </button>
      </form>
    </div>
  );
};

export default FilterCountries;
