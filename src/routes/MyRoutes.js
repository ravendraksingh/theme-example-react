import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountriesHome from "../components/CountriesHome";
import CountryDetails from "../components/CountryDetails";

const MyRoutes = ({ theme }) => {
  return (
    <BrowserRouter
      basename={"https://ravendraksingh.github.io/theme-example-react"}
    >
      <Routes>
        <Route path="/home" element={<CountriesHome />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
