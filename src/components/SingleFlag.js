import Navbar from "./Navbar";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import SingleCard from "./SingleCard";
import React, { useEffect, useState } from "react";
import { Detailsdiv, NavBack } from "./styles";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import FlagContext from "../Context/FlagContext";

const SingleFlag = () => {
  const {theme} = useContext (FlagContext)
  const {name} = useParams()
  const [SingleFlag, setSingleFlag] = useState([]);

  useEffect(() => {
    const getCountrybyName = async () => {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setSingleFlag(res.data);
    };
    getCountrybyName();
  }, [name]);

  return (
    <div className="singleFlag" id={theme} >
      <Navbar />
      <NavBack>
        <Link to={'/'}>
        <BsFillArrowLeftCircleFill size={'30px'} className="arrow"  />
        </Link>
      </NavBack>
      <Detailsdiv>
        {SingleFlag.map((flag)=>{
          return <SingleCard flag = {flag}   />
        })}
    </Detailsdiv>
      </div>
  );
};
export default SingleFlag;
