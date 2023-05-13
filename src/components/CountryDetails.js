import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  CountryDetailsCardBody,
  StyledButton,
  StyledDiv,
} from "../styles/Component.styled";
import "./countrydetails.css";

const CountryDetails = ({ theme }) => {
  const [country, setCountry] = useState();
  const [borders, setBorders] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [nativename, setNativename] = useState();

  const { name } = useParams();
  //   console.log("name", name);

  // console.log("selected theme", theme.name, theme.colors.background);
  const fetchCountryDetails = () => {
    fetch(
      "https://restcountries.com/v3.1/name/" +
        name +
        "?fields=name,flags,population,capital,region,subregion,currencies,languages,borders,tld"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data", data[0]);
        setCountry(data[0]);
      });
  };

  const fetchBorderCountries = () => {
    if (country?.borders && country?.borders?.length > 0) {
      const bordersArr = country?.borders;
      //  console.log("bordersArr", bordersArr, bordersArr.toString());

      //alert(country.borders);
      fetch(
        "https://restcountries.com/v3.1/alpha?codes=" +
          bordersArr +
          "&fields=name"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //   console.log("border countries", data);
          setBorders(data);
        });
    }
  };

  useEffect(() => {
    fetchCountryDetails();
  }, []);

  useEffect(() => {
    if (country && country?.currencies) {
      //   console.log("currencies", country?.currencies);
      let currencyArr = [];
      currencyArr = Object.entries(country?.currencies).forEach((entry) => {
        let [key, object] = entry;
        // console.log(`${key}: ${object.name}`);
        let _currName = `${object.name}`;
        currencyArr.push(_currName);
        // console.log("currencyArr", currencyArr);
        setCurrencies(currencyArr);
      });
    }
  }, [country]);

  useEffect(() => {
    if (country && country?.languages) {
      //   console.log("languages", country);
      let langArr = [];
      langArr = Object.entries(country?.languages).forEach((entry) => {
        let [key, value] = entry;
        let _lang = `${value}`;
        langArr.push(_lang);
        // console.log("langArr", langArr);
        setLanguages(langArr);
      });
    }
  }, [country]);

  useEffect(() => {
    if (country && country?.name && country?.name?.nativeName) {
      //   console.log("languages", country);
      const _nativeNamesArr = Object.entries(country?.name?.nativeName);
      const _nativeName = _nativeNamesArr[0];
      //   console.log("_nativeName", _nativeName);
      const _nativeNameDescArr = Object.entries(_nativeName);
      const [key, _natveNameObj] = _nativeNameDescArr[1];
      //   console.log("_natveNameObj", _natveNameObj);
      const _natveNameDesc = `${_natveNameObj.official}`;
      //   console.log("_natveNameDesc", _natveNameDesc);
      setNativename(_natveNameDesc);
    }
  }, [country]);

  useEffect(() => {
    fetchBorderCountries();
  }, [country]);

  function backBtnHandler() {
    window.location.assign("/");
  }

  return (
    <div>
      <StyledDiv className="mt-0 px-2 px-sm-3 px-lg-5 py-4">
        <StyledButton className="backbtn" onClick={backBtnHandler}>
          &#8592; Back
        </StyledButton>
      </StyledDiv>
      <CountryDetailsCardBody
        theme={theme}
        className="mx-0 px-2 px-sm-3 px-lg-5 pt-0 pb-5"
      >
        <img src={country?.flags?.svg} className="details__img pr-2" />
        <div className="info__container">
          <div className="info1">
            <p className="country-name">{country?.name?.common}</p>
          </div>
          <div className="info2">
            <div className="info2_1">
              <p>
                <span className="other-info">Native Name: </span>
                <span className="light-text">{nativename}</span>
              </p>
              <p>
                <span className="other-info">Population: </span>
                <span className="light-text">{country?.population}</span>
              </p>
              <p>
                <span className="other-info">Region: </span>
                <span className="light-text"> {country?.region}</span>
              </p>
              <p>
                <span className="other-info">Sub Region: </span>
                <span className="light-text"> {country?.subregion}</span>
              </p>
              <p>
                <span className="other-info">Capital: </span>
                <span className="light-text"> {country?.capital}</span>
              </p>
            </div>

            <div>
              <p>
                <span className="other-info">Top Level Domain: </span>
                <span className="light-text"> {country?.tld[0]}</span>
              </p>
              <p>
                <span className="other-info">Currencies: </span>
                <span className="light-text">
                  {currencies && currencies.length > 0 && currencies.join(", ")}
                </span>
              </p>
              <p>
                <span className="other-info">Languages: </span>
                <span className="light-text">
                  {languages && languages.length > 0 && languages.join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="info3">
            <b className="country-name">Border Countries</b>
            {borders?.length > 0 && (
              <div className="border-cnt-box">
                {borders?.map((borderCountry, index) => (
                  <span
                    className="border-cnt light-text flex"
                    key={borderCountry + "k2-8rb_" + index}
                  >
                    {borderCountry.name.common}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </CountryDetailsCardBody>
    </div>
  );
};

export default CountryDetails;
