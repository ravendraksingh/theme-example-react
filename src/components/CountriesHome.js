import React, { useEffect, useState } from "react";
import Country from "./Country";
import "./countryhome.css";
import { Row, Col } from "react-bootstrap";
import { MainContent } from "../styles/Component.styled";

const regions = [
  { name: "all", value: "Filter by Region" },
  { name: "africa", value: "Africa" },
  { name: "americas", value: "America" },
  { name: "asia", value: "Asia" },
  { name: "europe", value: "Europe" },
  { name: "oceania", value: "Oceania" },
];

const CountriesHome = ({ theme }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  //   console.log("selected theme", theme.name, theme.colors.background);
  const fetchCountriesDetails = () => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"
      //   "https://restcountries.com/v3.1/name/spain?fields=name,region,population,capital,flags"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data", data);
        setCountries(data);
        setFilteredCountries(data);
      });
  };

  useEffect(() => {
    fetchCountriesDetails();
  }, []);

  const regionChangeHanlder = (event) => {
    // console.log("region", event.target.value);
    const _region = event.target.value;
    // console.log("regrion", _region);
    let _filtered = [...countries];
    if (_region !== "all") {
      _filtered = countries.filter(
        (country) => country.region.toLowerCase() === _region
      );
    }
    // console.log("filtered countries", _filtered.length, _filtered);
    setFilteredCountries(_filtered);
  };

  const filterByCountryHandler = (event) => {
    const _country = event.target.value;
    let _filtered = [...countries];
    // setTimeout(() => {}, 2000);
    if (_country !== null && _country.trim() !== "") {
      _filtered = countries.filter(
        (country) =>
          country.name.common.toLowerCase().includes(_country.toLowerCase())
        //   country.name.common.toLowerCase() === _country.toLowerCase()
      );
    }

    // console.log("filtered countries", _filtered.length, _filtered);
    setFilteredCountries(_filtered);
    // clearTimeout();
  };

  return (
    <MainContent className="px-1 px-sm-3 px-lg-5">
      <div className="top-nav px-0 mb-3">
        <input
          className="custom-search"
          type="search"
          placeholder="Search for a country..."
          onChange={filterByCountryHandler}
        />
        <select placeholder="Filter by Region" onChange={regionChangeHanlder}>
          {regions.map((region) => (
            <option key={region.name} value={region.name}>
              {region.value}
            </option>
          ))}
        </select>
      </div>
      <Row xs={1} md={2} lg={3} xl={4} className="px-0">
        {filteredCountries?.map((countryData, index) => (
          <Col key={"akd239an_" + index} className="mx-0 px-2">
            <Country
              countryData={countryData}
              key={"asdfeng1_" + index}
              theme={theme}
            />
          </Col>
        ))}
      </Row>
    </MainContent>
  );
};

export default CountriesHome;
