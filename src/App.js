import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageMobile from "./pages/PageMobile";
import PageDesktop from "./pages/PageDesktop";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, themes } from "./themes";
import data from ".//data.json";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageMobile data={data} />
              <PageDesktop data={data} />
            </>
          }
        />
        <Route
          path="/:planetName"
          element={
            <>
              <PageMobile data={data} />
              <PageDesktop data={data} />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
