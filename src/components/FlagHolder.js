import { useContext, useState } from "react";
import FlagContext from "../Context/FlagContext";
import FlagCard from "./FlagCard";
import { FlagContainer } from "./styles";
import ReactPaginate from "react-paginate";

const FlagHolder = () => {
  const { loadFlag } = useContext(FlagContext);

  const [pageNumber, setPageNumber] = useState(0);
  // Number Flags images to be displayed on per page
  const FlagsPerPage = 12;
  // variable that stores the pages we have visited
  const FlagDisplayed = pageNumber * FlagsPerPage;
  // the function that helps map through our api to display the flags
  const displayFlags = loadFlag
    .slice(FlagDisplayed, FlagDisplayed + FlagsPerPage)
    .map((flag) => {
      return <FlagCard flag={flag} key={flag.name.common} />;
    });

    // works with the button that display the flag on each page
    const pageCount = Math.ceil(loadFlag.length / FlagsPerPage)
    // its the onChange funct when each pagination bttn is click
    const changeFlag = ({selected}) => {
      setPageNumber(selected)
    }

  return (
    <div>
    <FlagContainer>
      {/* call the funtion that map through */}
      {displayFlags}
    </FlagContainer>
    <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changeFlag}
        containerClassName={"paginationBttn"}
        previousLinkClassName={"previousbutton"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

    </div>
  );
};
export default FlagHolder;
