import styled from "styled-components";

export const NavContainer = styled.div`
  border: 2px solid ghostwhite;
  width: 100%;
  max-width: 1200px;
  margin: 5px auto;
  padding: 15px 70px;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);

  .dark-mode {
    display: flex;
    justify-content: space-around;
    gap: 3px;
    align-items: center;
  }
  button {
    font-weight: 500;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    margin: 5px auto;
    padding: 15px 40px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 10px;

  .search-menu {
    display: flex;
    justify-content: space-between;
  }

  input,
  select {
    padding: 7px 70px;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 0px;
    text-align: left;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 900px) {
    max-width: 800px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 500px;
    margin: 5px auto;
    padding: 5px;

    .search-menu {
      flex-direction: column;
    }
    input{
      margin-bottom: 20px;
    }
  }
 
`;

export const FlagContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  .Card-holder {
    border: 1px solid ghostwhite;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 40vh;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;

    .Card-holder {
      height: 40vh;
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    .Card-holder {
      height: 37vh;
      margin-bottom: 10px;
    }
  }
`;
export const FlagImgCon = styled.div`
  height: 50%;
  img {
    width: 100%;
    height: 18vh;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
    object-fit: contain;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 10%;
    object-fit: cover;
  }
`;
export const SingImgCon = styled.div`
  height: 50%;
  img {
    width: 80%;
    height: 40vh;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    object-fit: cover;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 100%;
      height: 40vh;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 600px) {
    img {
      width: 100%;
      height: 20vh;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      object-fit: cover;
    }
  }
`;
export const DetailsCon = styled.div`
  height: 50%;
  text-align: left;
  padding: 5px 10px;
  h4 {
    padding-bottom: 10px;
  }
  li {
    text-decoration: none;
    list-style: none;
  }
  ul {
    font-size: 15px;
    list-style: none;
  }

  #light h3,
  h4,
  li {
    color: black;
  }

  @media screen and (max-width: 900px) {
    padding: 5px 8px;
    margin-top: 90px;
    h4 {
      padding-bottom: 5px;
      font-size: 25px;
    }

    li {
      padding-top: 5px;
      font-size: 22px;
      list-style: none;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 13px 8px;
    margin-top: 5px;
    h4 {
      padding-bottom: 2px;
      font-size: 20px;
    }

    li {
      padding-top: 5px;
      font-size: 16px;
      list-style: none;
    }
  }
  @media screen and (max-width: 400px) {
    padding: 3px 5px;
    margin-top: 110px;
    h4 {
      padding-bottom: 1px;
      font-size: 16px;
    }

    li {
      padding-top: 2px;
      font-size: 16px;
      list-style: none;
    }
  }
  @media screen and (max-width: 330px) {
    padding: 3px 5px;
    margin-top: 75px;
    h4 {
      padding-bottom: 1px;
      font-size: 16px;
    }

    li {
      padding-top: 2px;
      font-size: 13px;
      list-style: none;
    }
  }
`;
export const Detailsdiv = styled.div`
  // border: 1px solid blue;
  width: 100%;
  margin: 80px auto;
  height: 100vh;
`;

export const NavBack = styled.div`
  width: 5%;
  margin-top: 20px;
  margin-left: 40px;
`;

export const ContentFold = styled.div`
  width: 50%;
  margin: auto;
  padding: 10px 50px;
  display: flex;
  justify-content: space-evenly;
  align-item: center;


 
  .single-right{
    margin-top: 20px;
    margin-left: 20px;
  }

  .flag-name h4{ 
    border: 1px solid black;
    width:100%;
    font-size: 20px
    width: 100%
    text-align: center;
  }

 
  #light li {
    font-size: 40px;
    colour: black;
    text-decoration: none;
    list-style: none;
    margin-top: 5px;
    text-align: center;
  }
  ul{
    width: 100%;
    margin: auto;
    margin-top: 40px;
    list-style: none;
  }

  #dark li{
    colour: white
  }

  @media screen and (max-width:900px) {
    width: 100%;
    margin: auto;
    padding: 10px 50px;
    flex-direction: column;
    justify-content: space-evenly;
    align-item: center; 
    
    .flag-name h4{ 
      border: 1px solid black;
      width:100%;
      font-size: 25px;
      width: 100%;
      text-align: center;
    }

    .single-right{
      margin-top: 20px;
      margin-left: 0px;
      list-style: none;
    }
    li{
      width: 100%;
      font-size: 25px;
      margin: auto;
      margin-top: 3px;
      list-style: none;
      padding-bottom: 20px;
    }
  }
`;
