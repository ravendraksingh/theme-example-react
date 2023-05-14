import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import CountriesHome from "../components/CountriesHome";
import CountryDetails from "../components/CountryDetails";

const MyRoutes = ({ theme }) => {
  return (
    <HashRouter
      basename={"https://ravendraksingh.github.io/theme-example-react"}
    >
      <Routes>
        <Route path="/home" element={<CountriesHome />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </HashRouter>
  );
};

export default MyRoutes;
