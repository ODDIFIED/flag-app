import axios from "axios";
import React, { useContext, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import FlagContext from "../Context/FlagContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [regionName, setRegionName] = useState("");
  const { setloadFlag } = useContext(FlagContext);
 

  const searchCountry = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${input}`);
    setloadFlag(res.data);
    
  };searchCountry()




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
        <input
          type={"text"}
          value={input}
          placeholder="Search for a country"
          onChange={(e) => setInput(e.target.value.toLowerCase(""))}
          />

      <form  >
        <select   onClick={SelectHandler} value={regionName} onChange={(e) => setRegionName(e.target.value)}>
          <option value="all">Filter By Region</option>
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
