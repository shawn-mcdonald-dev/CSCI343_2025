// data/dummy_flights.js
import Flight from "../models/flight";

const DUMMY_FLIGHTS = [
  new Flight(1, "AA1280", "2025-11-20", "American Airlines", "Scheduled"),
  new Flight(2, "DL412", "2025-11-20", "Delta", "Scheduled"),
  new Flight(3, "UA2150", "2025-11-21", "United", "Scheduled"),
  new Flight(4, "SW345", "2025-11-22", "Southwest", "Scheduled"),
  new Flight(5, "BA200", "2025-11-22", "British Airways", "Scheduled"),
];

export default DUMMY_FLIGHTS;
