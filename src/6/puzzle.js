class TuningTrouble {
  constructor(input) {
    this.input = input;
  }

  get part1() {
    return TuningTrouble.findMarker(this.input, 4);
  }

  get part2() {
    return TuningTrouble.findMarker(this.input, 14);
  }

  static findMarker(datastream, markerLength) {
    for (let i = 0; i < datastream.length - markerLength; i += 1) {
      const marker = datastream.slice(i, i + markerLength);

      if (
        marker
          .split('')
          .filter((value, index, array) => array.indexOf(value) === index)
          .length === marker.length
      ) {
        return i + markerLength;
      }
    }

    return null;
  }
}

module.exports = TuningTrouble;
