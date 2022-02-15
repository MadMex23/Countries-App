import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { foundActivities, getAllCountries } from "../redux/actions";
import Search from "./Search";
import "./CSS/NavBar.css";

const NavBar = ({ handlerOrder, handlerContinent, handlerActivity }) => {
  const selector = useSelector((state) => state.activity);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(foundActivities());
  }, [dispatch]);

  const handleClear = () => {
    dispatch(getAllCountries());
  };

  return (
    <div className="nav">
      <NavLink to="/" className="title">
        <h2>Countries App</h2>
      </NavLink>
      <Search />
      <br />
      <button className="buttons" onClick={handleClear}>
        Clean Search
      </button>
      <select
        className="selection"
        defaultValue=""
        onChange={(e) => handlerOrder(e)}
      >
        <option className="option" value="">
          Order By...
        </option>
        <option className="option" value="AtoZ">
          A to Z
        </option>
        <option className="option" value="ZtoA">
          Z to A
        </option>
        <option className="option" value="PopHigh">
          High Population
        </option>
        <option className="option" value="PopLow">
          Low Population
        </option>
      </select>
      <select
        className="selection"
        defaultValue=""
        onChange={(e) => handlerContinent(e)}
      >
        <option className="option" value="">
          Choose Continent
        </option>
        <option className="option" value="North America">
          North America
        </option>
        <option className="option" value="South America">
          South America
        </option>
        <option className="option" value="Europe">
          Europe
        </option>
        <option className="option" value="Asia">
          Asia
        </option>
        <option className="option" value="Africa">
          Africa
        </option>
        <option className="option" value="Oceania">
          Oceania
        </option>
        <option className="option" value="Antarctica">
          Antartica
        </option>
      </select>
      <select
        className="selection"
        defaultValue=""
        onChange={(e) => handlerActivity(e)}
      >
        <option className="option" value="">
          Choose Activity
        </option>
        {selector?.map((e) => {
          return (
            <option className="option" key={e.id} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
      <NavLink to="/activity">
        <button className="buttons">Add Activity</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
