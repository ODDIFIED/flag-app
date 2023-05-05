import Content from "./Content"
import Navbar from "./Navbar"
import FlagContext from "../Context/FlagContext";
import { useContext } from "react";


 const Home = () =>{
  const {theme} = useContext (FlagContext)
    return(
        < div id={theme} >
         <Navbar />
         <Content />
        </div>
    )
 }
 export default Home