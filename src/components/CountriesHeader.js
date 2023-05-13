import React from "react";
import { Header } from "../styles/Component.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const CountriesHeader = ({ theme, onToggleTheme }) => {
  function toggleTheme() {
    onToggleTheme();
  }

  return (
    <div>
      <Header className="floating-header px-2 px-sm-3 px-lg-5 py-3 py-sm-3">
        Where in the world?
        <div onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} />
          {"    "}
          {theme?.name === "light" ? "Dark Mode" : "Light Mode"}
        </div>
      </Header>
      <hr
        style={{ color: "rgb(220,220,220)", padding: "0px", margin: "0px" }}
      />
    </div>
  );
};

export default CountriesHeader;
