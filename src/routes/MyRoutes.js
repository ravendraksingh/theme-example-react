import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import CountriesHome from "../components/CountriesHome";
import CountryDetails from "../components/CountryDetails";

const MyRoutes = ({ theme }) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CountriesHome />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </HashRouter>
  );
};

export default MyRoutes;
