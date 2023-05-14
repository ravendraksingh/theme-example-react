import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import CountriesHome from "../components/CountriesHome";
import CountryDetails from "../components/CountryDetails";

const MyRoutes = ({ theme }) => {
  return (
    <Routes>
      <Route path="/theme-example-react/" element={<CountriesHome />} />
      <Route
        path="/theme-example-react/country/:name"
        element={<CountryDetails />}
      />
    </Routes>
  );
};

export default MyRoutes;
