class Books {
  constructor(
    name,
    author,
    gender,
    publishDate,
    Language,
    rate,
    dateAccquired
  ) {
    this.name = name;
    this.author = author;
    this.gender = gender;
    this.publishDate = publishDate;
    this.Language = Language;
    this.rate = rate;
    this.dateAccquired = dateAccquired;
  }
  newAuthor(newAuthor) {
    this.author = newAuthor;
  }
  BookAccquired() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Books;
