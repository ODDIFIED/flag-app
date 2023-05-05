
import { ContentContainer, ContentFold, FlagImgCon, SingImgCon } from "./styles";

const SingleCard = ({ flag }) => {
  return (
    <ContentFold>
      <div key={flag.name.common} >
        <SingImgCon>
          <img src={flag.flags.svg} alt="single-flag" />
        </SingImgCon>
      </div>
      <div className="single-right">
        <div className="flag-name">
        <h4> {flag.name.common} </h4>
        </div>
    
          <ul className="underline">
            <li>Population: {flag.population}</li>
            <li>Region: {flag.region}</li>
            <li>Sub-region: {flag.subregion}</li>
            <li>Continent: {flag.continents}</li>
            <li>Border: {flag.borders}</li>
          </ul>
        </div>
    </ContentFold>
  );
};
export default SingleCard;
