import Content from "./Content"
import Navbar from "./Navbar"
import FlagHolder from "./FlagHolder"
import FlagContext from "../Context/FlagContext";
import { useContext } from "react";


 const Home = () =>{
  const {theme} = useContext (FlagContext)
    return(
        < div  id={theme} >
         <Navbar />
         <Content />
         <FlagHolder />
        </div>
    )
 }
 export default Home