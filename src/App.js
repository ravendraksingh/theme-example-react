import { useState, useEffect } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import MyRoutes from "./routes/MyRoutes";
import { light, dark } from "./styles/Theme.styled";
import CountriesHeader from "./components/CountriesHeader";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);
  //   console.log("App.js selected theme", selectedTheme);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
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
      <div className="App">
        <GlobalStyles />
        <CountriesHeader
          theme={selectedTheme}
          onToggleTheme={HandleThemeChange}
        />
        <MyRoutes theme={selectedTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
