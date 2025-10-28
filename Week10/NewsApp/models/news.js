class News {
  constructor(id, headline, date, author, agency, description, imageUrl) {
    this.id = id;
    this.headline = headline;
    this.date = date; // string, e.g., "2025-10-05"
    this.author = author;
    this.agency = agency; // e.g., "CNN", "FOX"
    this.description = description;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.headline} — ${this.author} (${this.agency}) on ${this.date}`;
  }
}

export default News;
