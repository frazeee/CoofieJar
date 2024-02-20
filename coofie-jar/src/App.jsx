import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const customColors = {
  white: '#FAF9F6',
};

const theme = createTheme({
  customColors: customColors,

  typography: {
    fontFamily: "Raleway",
  },
  palette: {
    mode: "light",
    primary: {
      main: '#C17C74',
    },
    secondary: {
      main: '#F0A202',
    },
    background: {
      default: '#E5E7E6',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
