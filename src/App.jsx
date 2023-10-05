import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTEPATH } from "./components/ROUTEPATH";
import MainPage from "./components/MainPage";
import LandingPage from "./components/skeleton/childcomponents/LandingPage";
import AboutUs from "./components/skeleton/childcomponents/AboutUs";
import ContactUs from "./components/skeleton/childcomponents/ContactUs";
import Places from "./components/skeleton/childcomponents/Places";
import OneDayTrip from "./components/skeleton/childcomponents/bookatrip/OneDayTrip";
import AirportPickupDrop from "./components/skeleton/childcomponents/bookatrip/AirportPickupDrop";
import TourPlans from "./components/skeleton/childcomponents/bookatrip/TourPlans";
import HoneyMoonTour from "./components/skeleton/childcomponents/bookatrip/HoneyMoonTour";
import PilgrimageTour from "./components/skeleton/childcomponents/bookatrip/PilgrimageTour";
import TourPackage from "./components/skeleton/childcomponents/bookatrip/TourPackage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTEPATH.MAIN} element={<MainPage />}>
            <Route path={ROUTEPATH.HOME} element={<LandingPage />} />
            <Route path={ROUTEPATH.ONEDAY} element={<OneDayTrip />} />
            <Route path={ROUTEPATH.PICKDROP} element={<AirportPickupDrop />} />
            <Route path={ROUTEPATH.TOURPLAN} element={<TourPlans />} />
            <Route
              path={ROUTEPATH.TOURPLAN + "/" + ROUTEPATH.HONEYMOON}
              element={<HoneyMoonTour />}
            />
            <Route
              path={ROUTEPATH.TOURPLAN + "/" + ROUTEPATH.PILGRIMAGE}
              element={<PilgrimageTour />}
            />
            <Route
              path={ROUTEPATH.TOURPLAN + "/" + ROUTEPATH.TOURPACK}
              element={<TourPackage />}
            />
            <Route path={ROUTEPATH.ABOUT} element={<AboutUs />} />
            <Route path={ROUTEPATH.CONTACT} element={<ContactUs />} />
            <Route path={ROUTEPATH.PLACES} element={<Places />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
