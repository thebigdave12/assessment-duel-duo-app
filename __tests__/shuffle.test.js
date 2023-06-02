const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  
  test('Return an Array Value', () => {
    expect(shuffle()).toBeInstanceOf(Array)
  })

  test('maintain same length', () => {
    let testArr = [1, 3, 5, 2, 4]

    expect(shuffle(testArr)).toHaveLength(5)
  })


});
