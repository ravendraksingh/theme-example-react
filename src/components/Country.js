import React from "react";
import { Card } from "react-bootstrap";
import "../components/country.css";
import { Countrycard, CountrycardBody } from "../styles/Component.styled";

const Country = ({ countryData, theme }) => {
  //   console.log("countryData", countryData);
  //   console.log("theme", theme);
  const showDetailsHandler = () => {
    // alert(countryData.name.common);
    // return (<div>
    // </div>)
    window.location.assign("/country/" + countryData.name.official);
  };

  return (
    <Countrycard theme={theme} onClick={showDetailsHandler}>
      <Card.Img variant="top" src={countryData.flags.svg} />
      <CountrycardBody theme={theme}>
        <p className="country-name">{countryData.name.common}</p>
        <p>
          <span className="other-info">Population: </span>
          <span className="light-text">{countryData.population}</span>
        </p>
        <p>
          <span className="other-info">Region: </span>
          <span className="light-text"> {countryData.region}</span>
        </p>
        <p>
          <span className="other-info">Capital: </span>
          <span className="light-text"> {countryData.capital[0]}</span>
        </p>
      </CountrycardBody>
    </Countrycard>
  );
};

export default Country;
