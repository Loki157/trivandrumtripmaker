import { ROUTEPATH } from "../components/ROUTEPATH";
import padhmanabha from "../assets/images/places/Padmanabhaswamy_temple.jpg";
import airport from "../assets/images/places/airport.jpg";
import keralaTourism from "../assets/images/keralaTourism.jpeg"
//places
import kovalam from "../assets/images/places/Kovalam_beach_trivandrum_kerala.jpg"
import ponmudi from "../assets/images/places/Morning_at_Ponmudi.jpg"
import poovar from "../assets/images/places/Poovar_Kerala.jpg" 
import light from "../assets/images/places/Vizhinjam_Light_House.jpg"
import varkala from "../assets/images/places/Varkala_beach_from_above.jpg"
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
    imgs: keralaTourism,
    subHead:
      "Unveil the treasures of Trivandrum with our meticulously crafted tour plans. From ancient temples to scenic beaches. Let us be your guide to an unforgettable Trivandrum experience.",
    nav: ROUTEPATH.MAIN + ROUTEPATH.TOURPLAN,
  },
];

export const cards =[
  {
    title: "Padmanabhaswamy Temple",
    imgs: padhmanabha,
    subHead:
    "This ancient Hindu temple is one of the most popular tourist attractions in Trivandrum. It is dedicated to Lord Vishnu and is known for its ornate architecture and beautiful interiors."
  },
  {
    title: "Kovalam Beach",
    imgs: kovalam,
    subHead:
    " This beautiful beach is located about 16 km from Trivandrum city. It is known for its white sand, clear waters, and swaying palm trees."
  },
  {
    title: "Ponmudi Hills",
    imgs: ponmudi,
    subHead:
    "Ponmudi Hills is a great place to visit for nature lovers and adventure enthusiasts. Visitors can go trekking, camping, birdwatching, and fishing in the hills. There are also a number of waterfalls located in the area, such as the Meenmutty Falls and the Golden Valley Falls."
  },
  {
    title: "Vizhinjam Lighthouse",
    imgs: light,
    subHead:
    "Vizhinjam Lighthouse is a lighthouse located in Vizhinjam, a suburb of Thiruvananthapuram, Kerala, India. It is located on the coast of the Arabian Sea, and is a popular tourist destination.The lighthouse was built in 1972, and is 36 meters tall. It has a focal length of 100 meters, and emits a white light that can be seen up to 27 nautical miles away."
  }, {
    title: "Poovar Island",
    imgs: poovar,
    subHead:
    "Poovar Island The island is connected to the mainland by a causeway. There are several beaches on the island, including Poovar Beach, which is a popular spot for swimming, sunbathing, and surfing. The backwaters around the island are also a popular spot for boating and kayaking.Poovar Island is also home to a number of temples and churches."
  }, {
    title: "Varkala Beach",
    imgs: varkala,
    subHead:
    "Varkala Beach is a great place to relax and enjoy the natural beauty of Kerala. Visitors can swim, sunbathe, or take a walk along the beach. There are also a number of restaurants and cafes located on the clifftop, offering stunning views of the Arabian Sea."
  }
] 