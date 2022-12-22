const TuningTrouble = require('./puzzle');

const findMarkerWithFourCharactersDataSet = [
  ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 7],
  ['bvwbjplbgvbhsrlpgdmjqwftvncz', 5],
  ['nppdvjthqldpwncqszvftbrmjlhg', 6],
  ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10],
  ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11],
];
findMarkerWithFourCharactersDataSet.forEach(
  ([datastream, character], index) => {
    test(`find marker with 4 characters #${index}`, () => {
      expect(TuningTrouble.findMarker(datastream, 4)).toStrictEqual(character);
    });
  }
);

const findMarkerWithFourteenCharactersDataSet = [
  ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 19],
  ['bvwbjplbgvbhsrlpgdmjqwftvncz', 23],
  ['nppdvjthqldpwncqszvftbrmjlhg', 23],
  ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 29],
  ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 26],
];
findMarkerWithFourteenCharactersDataSet.forEach(
  ([datastream, character], index) => {
    test(`find marker with 14 characters #${index}`, () => {
      expect(TuningTrouble.findMarker(datastream, 14)).toStrictEqual(character);
    });
  }
);
