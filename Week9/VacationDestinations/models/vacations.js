class Vacation {
  constructor(
    id,
    stateId,
    name,
    averageCost,
    yearFounded,
    rating,
    description,
    imageUrl
  ) {
    this.id = id;
    this.stateId = stateId;
    this.name = name;
    this.averageCost = averageCost;
    this.yearFounded = yearFounded;
    this.rating = rating;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

export default Vacation;
