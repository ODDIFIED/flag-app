import { useContext } from "react"
import FlagContext from "../Context/FlagContext"
import FlagCard from "./FlagCard"
import { FlagContainer } from "./styles"


const FlagHolder = () =>{
    const  { loadFlag } = useContext(FlagContext)
    return(
    
      <FlagContainer>
        {loadFlag.map((flag) => {
          return <FlagCard flag={flag} key={flag.name.common} />
        })}
      </FlagContainer>
    )
}
export default FlagHolder