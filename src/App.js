import { useState, useEffect } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/Theme.styled";
import MyRoutes from "./routes/MyRoutes";
import CountriesHeader from "./components/CountriesHeader";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  useEffect(() => {
    let currentTheme = light;
    const _currTheme = localStorage.getItem("current-theme");
    console.log("_currTheme", _currTheme);

    if (_currTheme) {
      currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    }
    setSelectedTheme(currentTheme);
  }, []);

  // function to handle user theme selection on click and save it to local storage
  const HandleThemeChange = () => {
    console.log("HandleThemeChange selectedTheme", selectedTheme);
    if (selectedTheme.name === "light") {
      setSelectedTheme(dark);
      localStorage.setItem("current-theme", JSON.stringify(dark));
    } else {
      setSelectedTheme(light);
      localStorage.setItem("current-theme", JSON.stringify(light));
    }
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <div>
        <GlobalStyles />
        <CountriesHeader
          theme={selectedTheme}
          onToggleTheme={HandleThemeChange}
        />
        <MyRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
