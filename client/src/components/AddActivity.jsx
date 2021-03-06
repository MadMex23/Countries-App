import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, createActivity, foundActivities } from "../redux/actions";
import LoadScreen from "./LoadScreen";
import "./CSS/AddActivity.css";

const AddActivity = () => {
  let countries = useSelector((state) => state.countries);
  let dispatch = useDispatch();
  const [loadScreen, setLoadScreen] = React.useState(true);

  const [input, setInput] = React.useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    addCountries: [],
  });

  React.useEffect(() => {
    dispatch(getAllCountries());
    setLoadScreen(false);
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let deletedList = input.addCountries.filter((f) => {
      return f !== e.target.name;
    });
    setInput({
      ...input,
      addCountries: deletedList,
    });
  };

  const handleSubmit = (e) => {
    let regex = /^(?![ .]+$)[a-zA-Z .]*$/gm;
    e.preventDefault();
    if (
      !input.name ||
      !input.difficulty ||
      !input.duration ||
      !input.season ||
      input.addCountries.length === 0
    ) {
      alert("You Have Empty Fields!");
    } else if (regex.test(input.name) === false) {
      alert("Invalid name, letters only");
    }
     else {
      if (input.name.length < 3) {
        return alert("The activity name must have at least three characters");
      }
      dispatch(createActivity(input));
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        addCountries: [],
      });
      alert("Activity Creation Successful!");
    }
  };

  const handleCountries = (e) => {
    const { value } = e.target;
    if (!input.addCountries.includes(value))
      setInput({
        ...input,
        addCountries: [...input.addCountries, value],
      });
  };

  if (loadScreen) return <LoadScreen />;
  return (
    <div className="fullcomp">
      <div className="actLeft">
        <h3 className="titleAct">Add a Tourist Activity</h3>
        {input.addCountries?.map((e) => {
          return (
            <div className="selectedCount" key={e}>
              <h4 className="namesList">{e}</h4>
              <button
                className="exes"
                name={e}
                onClick={(e) => handleDelete(e)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <form className="actRight" onSubmit={handleSubmit}>
        <p className="optionNames">Name:</p>
        <input
          className="inputAct"
          type="text"
          name="name"
          placeholder="Activity..."
          onChange={handleChange}
          value={input.name}
        />
        <p className="optionNames">Difficulty:</p>
        <div>
          <select
            className="selects"
            value={input.difficulty ? input.difficulty : ""}
            name="difficulty"
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select Difficulty
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Very Hard">Very Hard</option>
            <option value="Extreme">Extreme</option>
          </select>
        </div>
        <p className="optionNames">Duration:</p>
        <div>
          <select
            className="selects"
            value={input.duration ? input.duration : ""}
            name="duration"
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select Duration
            </option>
            <option value="One Hour or Less">One Hour or Less</option>
            <option value="Two Hours">Two Hours</option>
            <option value="Three Hours">Three Hours</option>
            <option value="Four Hours">Four Hours</option>
            <option value="Five+ Hours">Five+ Hours</option>
          </select>
        </div>
        <p className="optionNames">Season:</p>
        <div>
          <select
            className="selects"
            value={input.season ? input.season : ""}
            name="season"
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select Season
            </option>
            <option value="All Seasons">All Seasons</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <p className="optionNames">Countries:</p>
        <div>
          <select
            className="selects"
            value={input.addCountries ? "" : ""}
            name="countries"
            placeholder="Select Countries"
            onChange={handleCountries}
          >
            <option value="" disabled hidden>
              Add Countries...
            </option>
            {countries?.map((c) => {
              return (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="buttonsdiv1">
          <Link to="/countries">
            <button className="btnAct2">Back Home</button>
          </Link>
        </div>
        <div className="buttonsdiv2">
          <button className="btnAct1" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddActivity;
