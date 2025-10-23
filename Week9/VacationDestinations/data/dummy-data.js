import State from "../models/states";
import Vacation from "../models/vacations";

export const STATES = [
  new State(
    "c1",
    "France",
    "#f54242",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94u0EyhIYQ35WVzV0LSlxZ0Ozv9tMqfzewA&s"
  ),
  new State(
    "c2",
    "Italy",
    "#f5428d",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D4eml-3x1c-xycoaYHcnTC23_rkNl0rj1A&s"
  ),
  new State(
    "c3",
    "Japan",
    "#f5a442",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIG3AOUHpnlc7s0rnef_ZSpk9YDSyis_hxJQ&s"
  ),
  new State(
    "c4",
    "Australia",
    "#f5d142",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhovOVNgNG9xQbYrYtCKX76_8D2vPGVpl8Mw&s"
  ),
  new State(
    "c5",
    "Brazil",
    "#368dff",
    "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/29/gettyimages-161356247.jpg?crop=0.5xw:1xh;center,top&resize=1200:*"
  ),
  new State(
    "c6",
    "Canada",
    "#41d95d",
    "https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
  ),
  new State(
    "c7",
    "Egypt",
    "#9eecff",
    "https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/explore-media/destinations/middle%20east/egypt/egypt-header.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704211554%201920w"
  ),
  new State(
    "c8",
    "Greece",
    "#b9ffb0",
    "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
  ),
  new State(
    "c9",
    "India",
    "#ffc7ff",
    "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
  ),
  new State(
    "c10",
    "Thailand",
    "#47fced",
    "https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg"
  ),
];

export const VACATIONS = [
  new Vacation(
    "v1",
    "c1",
    "Eiffel Tower",
    2000,
    1889,
    4.8,
    "Iconic landmark in Paris.",
    "https://cdn-imgix.headout.com/media/images/9fa330d7951fcc90854f523191f684ca-23604---Paris---Eiffel-Tower-Guided-Tour-by-Elevator--Summit-or-Second-floor---14.jpg?auto=format&w=600&q=90&fit=clip"
  ),
  new Vacation(
    "v2",
    "c1",
    "Louvre Museum",
    50,
    1793,
    4.9,
    "World-famous art museum.",
    "https://www.travelandleisure.com/thmb/zTVzqKjho6xoJfwuBEoe_Ok4pxM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-louvre-museum-exterior-SECRETSLOUVRE0325-cd40506b66344314a3b21ff5f30a0ae9.jpg"
  ),

  new Vacation(
    "v3",
    "c2",
    "Colosseum",
    30,
    80,
    4.7,
    "Historic Roman amphitheater.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOJx8k9uykyqZKJOp1JsPm5lpJW0iJ9iLVQ&s"
  ),
  new Vacation(
    "v4",
    "c2",
    "Venice Canals",
    150,
    421,
    4.6,
    "Romantic canals in Venice.",
    "https://tourtailors.com/wp-content/uploads/2022/12/top-10-experiences-venetian-canals-1024x760.jpg"
  ),

  new Vacation(
    "v5",
    "c3",
    "Mount Fuji",
    500,
    1707,
    4.9,
    "Iconic Japanese mountain.",
    "https://www.tripsavvy.com/thmb/qFqPcg6Wo24Hu4fLokNfAZdC-xQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fuji-mountain-in-autumn-822273028-5a6a8a9c3418c600363958d3.jpg"
  ),
  new Vacation(
    "v6",
    "c3",
    "Kyoto Temples",
    100,
    794,
    4.8,
    "Historic temples in Kyoto.",
    "https://lp-cms-production.imgix.net/2025-02/Shutterstock226470835.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop"
  ),

  new Vacation(
    "v7",
    "c4",
    "Sydney Opera House",
    250,
    1973,
    4.7,
    "Famous performing arts center.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcqKWdmiXC2EDw9lcFleTN-w6ylWCg0ocnA&s"
  ),
  new Vacation(
    "v8",
    "c4",
    "Great Barrier Reef",
    400,
    1770,
    4.9,
    "Largest coral reef system.",
    "https://schmidtocean.org/wp-content/uploads/GBR_lockthegate.jpg"
  ),

  new Vacation(
    "v9",
    "c5",
    "Christ the Redeemer",
    100,
    1931,
    4.8,
    "Famous statue in Rio.",
    "https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-458615673_1.jpg.webp?VersionId=sX9xiAiPRB0L9qeqZ14Fzc8bgvdY23qo&itok=uAPm151w"
  ),
  new Vacation(
    "v10",
    "c5",
    "Amazon Rainforest",
    300,
    1500,
    4.7,
    "Largest rainforest in the world.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFcXpp9xQrh49zStTLTQIUPAa1F-FbCz9Ng&s"
  ),

  new Vacation(
    "v11",
    "c6",
    "Niagara Falls",
    200,
    1885,
    4.9,
    "Famous waterfalls.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Rc-jHHB62U-sdVqE20LQPzUOp-adMNmrVw&s"
  ),
  new Vacation(
    "v12",
    "c6",
    "Banff National Park",
    150,
    1885,
    4.8,
    "Beautiful Canadian park.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS302cAif9HK1WYvm7MPeE-qj0Wj5LkXctg&s"
  ),

  new Vacation(
    "v13",
    "c7",
    "Pyramids of Giza",
    120,
    2560,
    5,
    "Ancient Egyptian pyramids.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMbr5GUwjG_jaHGshH_n8Jy-ahibnUKdqLQ&s"
  ),
  new Vacation(
    "v14",
    "c7",
    "Nile River Cruise",
    400,
    1500,
    4.6,
    "Scenic cruise along Nile.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VYPP2PXgVl99MtS7gJ3nt575HMglZCSkcw&s"
  ),

  new Vacation(
    "v15",
    "c8",
    "Santorini",
    350,
    1600,
    4.9,
    "Famous Greek island.",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/81/30/3f/caption.jpg?w=1400&h=1400&s=1&cx=1846&cy=1833&chk=v1_6ae0a81ae3361e988707"
  ),
  new Vacation(
    "v16",
    "c8",
    "Acropolis",
    100,
    447,
    4.8,
    "Historic site in Athens.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mMcq9Zu9nSBZWN00T_YulDaBJ-D1BDYkQQ&s"
  ),

  new Vacation(
    "v17",
    "c9",
    "Taj Mahal",
    50,
    1643,
    5,
    "Iconic mausoleum.",
    "https://www.thoughtco.com/thmb/mvzDYqXzP4T_D7JfMTsWm5GgDZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg"
  ),
  new Vacation(
    "v18",
    "c9",
    "Jaipur Palace",
    80,
    1727,
    4.7,
    "Historic palace in Jaipur.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nz1ahkd47CqDpM4jzQBOA9nMkpLOM-XVyA&s"
  ),

  new Vacation(
    "v19",
    "c10",
    "Phi Phi Islands",
    200,
    2000,
    4.9,
    "Tropical island paradise.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8ktjr1oU_1RXmdJVuaeNCwzmNo2KKN8CsQ&s"
  ),
  new Vacation(
    "v20",
    "c10",
    "Grand Palace Bangkok",
    60,
    1782,
    4.8,
    "Historic palace in Bangkok.",
    "https://res.klook.com/image/upload/c_fill,w_420,h_260/q_65/371ffdcb-0125-4d17-9c6f-ea1f5994115f_zu4zsr.jpg"
  ),
];
