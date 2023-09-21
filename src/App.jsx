import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTEPATH } from "./components/ROUTEPATH";
import MainPage from "./components/MainPage";
import LandingPage from "./components/skeleton/childcomponents/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTEPATH.MAIN} element={<MainPage />}>
            <Route index path="" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
