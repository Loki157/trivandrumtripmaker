import { ROUTEPATH } from "../components/ROUTEPATH";
import padhmanabha from "../assets/images/places/Padmanabhaswamy_temple.jpg";
import airport from "../assets/images/places/airport.jpg";
export const rides = [
  {
    title: "One Day trip",
    imgs: padhmanabha,
    subHead:
      "Experience the best of Trivandrum in just one day with our expertly curated one-day trip. Explore the city's highlights, savor local cuisine, and create lasting memories in 24 hours.",
    nav: ROUTEPATH.MAIN + ROUTEPATH.ONEDAY,
  },
  {
    title: "Airport Pickup & Drop",
    imgs: airport,
    subHead:
      "Arriving or departing from Trivandrum's airport has never been easier. Our airport pickup and drop service ensures a smooth and stress-free transition to and from your flight.",
    nav: ROUTEPATH.MAIN + ROUTEPATH.PICKDROP,
  },
  {
    title: "Tour Plan to explore",
    imgs: airport,
    subHead:
      "Unveil the treasures of Trivandrum with our meticulously crafted tour plans. From ancient temples to scenic beaches. Let us be your guide to an unforgettable Trivandrum experience.",
    nav: ROUTEPATH.MAIN + ROUTEPATH.TOURPLAN,
  },
];
