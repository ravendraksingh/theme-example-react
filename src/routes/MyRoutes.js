import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import CountriesHome from "../components/CountriesHome";
import CountryDetails from "../components/CountryDetails";

const MyRoutes = ({ theme }) => {
  return (
    <HashRouter basename={"/theme-example-react"}>
      <Routes>
        <Route path="/home" element={<CountriesHome />} />
        <Route
          path="/theme-example-react/country/:name"
          element={<CountryDetails />}
        />
      </Routes>
    </HashRouter>
  );
};

export default MyRoutes;
