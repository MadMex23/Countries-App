import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetail from "./components/CountryDetail";
import AddActivity from "./components/AddActivity";
import Landing from "./components/Landing";
import OtherRoute from "./components/OtherRoute"
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/countries" element={<Countries />} />
        <Route exact path="/countries/:id" element={<CountryDetail />} />
        <Route exact path="/activity" element={<AddActivity />} />
        <Route path="*" element={<OtherRoute />} />
      </Routes>
    </div>
  );
}

export default App;
