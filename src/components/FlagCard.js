import { Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import { DetailsCon, FlagImgCon } from "./styles";



const FlagCard = ({ flag }) => {
  return (
    <div className="Card-holder" key={flag.name.common}>
      
      <Link to={`/SingleFlag/${flag.name.common}`}>
       
        <FlagImgCon>
          <img src={flag.flags.svg} alt="pic_flag" />
        </FlagImgCon>
      </Link>
        <DetailsCon className='details-Con' >
          <h4> {flag.name.common} </h4>
          <>
            <ul className="underline">
              <li >Population : {flag.population}</li>
              <li>Region : {flag.region}</li>
              <li>Sub-region : {flag.subregion}</li>
            </ul>
          </>
        </DetailsCon>
    </div>
  );
};
export default FlagCard;
