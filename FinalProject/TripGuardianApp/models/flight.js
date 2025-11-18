// models/flight.js
class Flight {
  constructor(id, flightNumber, date, airline, status = "Scheduled") {
    this.id = id;
    this.flightNumber = flightNumber; // e.g., "AA1234"
    this.date = date; // ISO string or "YYYY-MM-DD"
    this.airline = airline;
    this.status = status; // Scheduled | En Route | Landed | Delayed | Cancelled
  }
}

export default Flight;
