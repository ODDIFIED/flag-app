import axios from "axios";
import React, { useContext, useState } from "react";
import FlagContext from "../Context/FlagContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [regionName, setRegionName] = useState("");
  const { setloadFlag } = useContext(FlagContext);
 

  const searchCountry = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${input}`);
    setloadFlag(res.data);
    console.log(res.data);
  };

  const submitHandler = (e) =>{
    e.preventDefault()

    searchCountry();
  };



  const getRegion = async() =>{
    const info = await axios.get(`https://restcountries.com/v3.1/region/${regionName}`);
    setloadFlag(info.data)
  };
  const SelectHandler = (e) => {
    e.preventDefault()
    getRegion();
  }

 
  return (
    <div className="search-menu">
      <form onSubmit={submitHandler}>
        <input
          type={"text"}
          value={input}
          required
          placeholder="Search for a country"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <form  >
        <select   onClick={SelectHandler} value={regionName} onChange={(e) => setRegionName(e.target.value)}>
          <option>Filter By Region</option>
          <option value="Africa">Africa</option>
          <option    value="America">America</option>
          <option   value="Asia">Asia</option>
          <option   value="Europe">Europe</option>
          <option   value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};
export default SearchBar;
