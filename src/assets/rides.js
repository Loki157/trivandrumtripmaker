import { ROUTEPATH } from "../components/ROUTEPATH";
import padhmanabha from "../assets/images/places/Padmanabhaswamy_temple.jpg";
import airport from "../assets/images/places/airport.jpg";
import keralaTourism from "../assets/images/keralaTourism.jpeg";
//places
import kovalam from "../assets/images/places/Kovalam_beach_trivandrum_kerala.jpg";
import ponmudi from "../assets/images/places/Morning_at_Ponmudi.jpg";
import poovar from "../assets/images/places/Poovar_Kerala.jpg";
import light from "../assets/images/places/Vizhinjam_Light_House.jpg";
import varkala from "../assets/images/places/Varkala_beach_from_above.jpg";
import honeymoon from "../assets/images/tour/honeymoon.jpg";
import pilgrimg from "../assets/images/tour/kerala-pilgrimage.jpg";
import tourplan from "../assets/images/tour/tourplan.jpg";
import tourPlan from "../assets/images/tour/Kerala-Tour.jpg";
import whatWeOffer from "../assets/images/oneday/whatweoffer.jpg"
import whatWeOfferMob from "../assets/images/oneday/whatweoffermob.jpg"
import { useNavigate } from "react-router-dom"; 
import { useTheme } from "@mui/material";

export const rides = [
  {
    head: "What we Offer",
    title: "Craft your Unforgettable memories with Trivandrum TripMaker",
    imgs: whatWeOffer,
    subHead:
      "Our passion lies in crafting unforgettable travel moments for every traveler who chooses us. With our range of services, we transform ordinary trips into extraordinary adventures.",
    nav: ROUTEPATH.MAIN + ROUTEPATH.ONEDAY,
  },
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
    imgs: tourPlan,
    subHead:
      "Unveil the treasures of Trivandrum with our meticulously crafted tour plans. From ancient temples to scenic beaches. Let us be your guide to an unforgettable Trivandrum experience.",
    nav: ROUTEPATH.MAIN + ROUTEPATH.TOURPLAN,
  },
];

export const cards = [
  {
    title: "Padmanabhaswamy Temple",
    imgs: padhmanabha,
    subHead:
      "This ancient Hindu temple is one of the most popular tourist attractions in Trivandrum. It is dedicated to Lord Vishnu and is known for its ornate architecture and beautiful interiors.",
  },
  {
    title: "Kovalam Beach",
    imgs: kovalam,
    subHead:
      " This beautiful beach is located about 16 km from Trivandrum city. It is known for its white sand, clear waters, and swaying palm trees.",
  },
  {
    title: "Ponmudi Hills",
    imgs: ponmudi,
    subHead:
      "Ponmudi Hills is a great place to visit for nature lovers and adventure enthusiasts. Visitors can go trekking, camping, birdwatching, and fishing in the hills. There are also a number of waterfalls located in the area, such as the Meenmutty Falls and the Golden Valley Falls.",
  },
  {
    title: "Vizhinjam Lighthouse",
    imgs: light,
    subHead:
      "Vizhinjam Lighthouse is a lighthouse located in Vizhinjam, a suburb of Thiruvananthapuram, Kerala, India. It is located on the coast of the Arabian Sea, and is a popular tourist destination.The lighthouse was built in 1972, and is 36 meters tall. It has a focal length of 100 meters, and emits a white light that can be seen up to 27 nautical miles away.",
  },
  {
    title: "Poovar Island",
    imgs: poovar,
    subHead:
      "Poovar Island The island is connected to the mainland by a causeway. There are several beaches on the island, including Poovar Beach, which is a popular spot for swimming, sunbathing, and surfing. The backwaters around the island are also a popular spot for boating and kayaking.Poovar Island is also home to a number of temples and churches.",
  },
  {
    title: "Varkala Beach",
    imgs: varkala,
    subHead:
      "Varkala Beach is a great place to relax and enjoy the natural beauty of Kerala. Visitors can swim, sunbathe, or take a walk along the beach. There are also a number of restaurants and cafes located on the clifftop, offering stunning views of the Arabian Sea.",
  },
];
export const tour = [
  {
    img: honeymoon,
    title: "Honeymoon Bliss in God's Own Country",
    content: `Your gateway to a romantic and unforgettable honeymoon experience in the heart of Kerala, often referred to as "God's Own Country." We understand that your honeymoon is a once-in-a-lifetime journey, and we're here to curate the perfect blend of relaxation, adventure, and romance amidst the lush landscapes and serene backwaters of Trivandrum.`,
    nav: ROUTEPATH.MAIN + ROUTEPATH.TOURPLAN + "/" + ROUTEPATH.HONEYMOON,
  },
  {
    img: pilgrimg,
    title: "Spiritual Journey of a Lifetime: Pilgrimage Packages",
    content: ` Your trusted partner in embarking on a sacred pilgrimage journey that will nourish your soul and deepen your spiritual connection. Our carefully curated pilgrimage packages are designed to provide a profound and transformative experience for devotees, allowing you to explore the rich religious heritage of Trivandrum and beyond.`,
    nav: ROUTEPATH.MAIN + ROUTEPATH.TOURPLAN + "/" + ROUTEPATH.PILGRIMAGE,
  },
  {
    img: tourplan,
    title: "Discover Kerala's Hidden Treasures",
    content: `At Trivandrum Trip Maker, we believe that every traveler deserves a unique and enriching experience. Our tour packages are meticulously designed to provide you with a harmonious blend of adventure, cultural discovery, and relaxation. From pristine beaches to lush backwaters, historic temples to lush hill stations, we invite you to join us on a journey that will create lifelong memories.`,
    nav: ROUTEPATH.MAIN + ROUTEPATH.TOURPLAN + "/" + ROUTEPATH.TOURPACK,
  },
];

export const honeymoonPlan = [
  {
    place: "Arrival in Trivandrum",
    points: [
      "Warm welcome and transfer to your comfortable accommodation.",
      "Transfer to a charming beachfront resort.",
      "Evening at leisure with a romantic dinner.",
    ],
  },
  {
    place: "Beachfront Romance in Kovalam",
    points: [
      "Explore the pristine beaches of Kovalam.",
      "Enjoy water sports or simply relax by the shore.",
      "Candlelit beachfront dinner for two.",
    ],
  },
  {
    place: "Backwater Bliss in Alleppey",
    points: [
      "Journey to Alleppey for a houseboat adventure.",
      "Cruise through serene backwaters.",
      "Stay in a luxurious, private houseboat.",
    ],
  },
  {
    place: "Munnar Hill Station Retreat",
    points: [
      "Head to Munnar, a picturesque hill station.",
      "Discover tea plantations and lush landscapes.",
      "Cozy evening by a fireplace in your hillside cottage.",
    ],
  },
  {
    place: "Departure from Cochin",
    points: [
      "Travel to Cochin for a blend of culture and history.",
      "Visit Fort Kochi, the Chinese fishing nets, and more.",
      "Depart with unforgettable memories.",
    ],
  },
];
export const pilgrimagePlan = [
  {
    place: "Arrival in Trivandrum",
    points: [
      "Warm welcome and transfer to your comfortable accommodation.",
      "Transfer to a tranquil spiritual retreat.",
      "Evening orientation and spiritual discourse.",
    ],
  },
  {
    place: " Padmanabhaswamy Temple Visit",
    points: [
      "Explore the awe-inspiring Padmanabhaswamy Temple.",
      "Participate in the rituals and seek blessings.",
      "Evening visit to the nearby spiritual sites.",
    ],
  },
  {
    place: "Kanyakumari Sacred Sojourn",
    points: [
      "Journey to the southern tip of India, Kanyakumari.",
      "Visit the famous Vivekananda Rock Memorial.",
      "Explore Kanyakumari town and its spiritual significance.",
    ],
  },
  {
    place: "Meditation and Serenity in Suchindram",
    points: [
      "Visit the Suchindram Temple known for its intricate architecture.",
      "Engage in meditation and spiritual discussions.",
      "Return to Trivandrum for an overnight stay.",
    ],
  },
  {
    place: "Neyyattinkara Temples and Departure",
    points: [
      "Explore the sacred temples in Neyyattinkara known for their unique rituals.",
      "Experience the divine atmosphere.",
      "Depart with a heart full of spiritual blessings and newfound serenity.",
    ],
  },
];
export const tourPackPlan = [
  {
    place: "Arrival in Trivandrum",
    points: [
      "Warm welcome at Trivandrum Airport.",
      "Transfer to your comfortable accommodation.",
      "Orientation and briefing about the tour.",
    ],
  },
  {
    place: "Beach Bliss in Kovalam",
    points: [
      "Head to the serene beaches of Kovalam.",
      "Enjoy sunbathing, beach sports, and beachside cuisine.",
      "Sunset viewing and beachfront relaxation.",
    ],
  },
  {
    place: "Backwater Cruise in Alleppey",
    points: [
      "Journey to Alleppey for a memorable houseboat cruise.",
      "Glide through the tranquil backwaters of Kerala.",
      "Enjoy the unique experience of staying in a houseboat.",
    ],
  },
  {
    place: "Munnar Hill Station Retreat",
    points: [
      "Travel to Munnar, a hill station known for its tea gardens.",
      "Explore lush tea plantations, waterfalls, and scenic landscapes.",
      "Cozy overnight stay in a hillside cottage.",
    ],
  },
  {
    place: "Cochin Culture and Departure",
    points: [
      "Visit the historic city of Cochin.",
      "Explore Fort Kochi, the Chinese fishing nets, and cultural landmarks.",
      "Depart with incredible memories of your Kerala adventure.",
    ],
  },
];

export const inclusions = {
  honey: [
    "Airport transfers and comfortable transportation throughout the tour.",
    "Accommodations in romantic resorts and a private houseboat.",
    "Daily breakfast and select meals.",
    "Guided tours and activities as per the itinerary.",
    "All entrance fees and permits.",
    "24/7 customer support.",
  ],
  pilgrimage: [
    "Airport transfers and comfortable transportation throughout the pilgrimage.",
    "Accommodations in peaceful and spiritual retreats.",
    "Daily breakfast and select meals.",
    "Guided tours and activities as per the itinerary.",
    "All entrance fees and permits.",
    "24/7 customer support.",
  ],
  tour: [
    "Airport transfers and comfortable transportation throughout the pilgrimage.",
    "Accommodations in handpicked, diverse hotels and houseboats.",
    "Daily breakfast and select meals.",
    "Guided tours and activities as per the itinerary.",
    "All entrance fees and permits.",
    "24/7 customer support.",
  ],
};
