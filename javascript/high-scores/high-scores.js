export class HighScores {
  constructor(input) {
    this.input = input;
  }

  get scores() {
    return this.input;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return Math.max.apply(null, this.scores)
  }

  get personalTopThree() {
    const sorted = this.scores.sort((a, b) => b - a)
    return sorted.slice(0, 3);
  }
}
