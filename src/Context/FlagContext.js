import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FlagContext = createContext({});
export const FlagProvider = ({ children }) => {
  const [loadFlag, setloadFlag] = useState([]);
  const [theme, setTheme] = useState("light");

  
    const toggletheme = () => {
      if (theme === "light") {
        setTheme("dark");

      } else {
        setTheme("light");

      }
    };


  // setTheme((curr)=>(curr === "light" ? "dark" : "light"))
  useEffect(() => {
    const loadPost = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setloadFlag(res.data);
      console.log(res.data)
    };
    loadPost();
  }, []);

  return (
    <FlagContext.Provider value={{ loadFlag, setloadFlag, theme ,toggletheme  }}>
      {children}
    </FlagContext.Provider>
  );
};

export default FlagContext;
