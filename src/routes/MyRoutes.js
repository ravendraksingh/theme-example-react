import React from "react";
import { Route, Routes } from "react-router-dom";
import CountriesHome from "../components/CountriesHome";
import CountryDetails from "../components/CountryDetails";
import { BrowserRouter } from "react-router-dom";

const MyRoutes = ({ theme }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesHome theme={theme} />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
