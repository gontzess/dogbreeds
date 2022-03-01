const parseDogBreedsData = require("./parseDogBreedsData");

describe("parseDogBreedsData()", () => {
  it("parses data correctly", () => {
    expect(
      parseDogBreedsData({
        akita: [],
        buhund: ["norwegian"],
        bulldog: ["boston", "english", "french"],
        bullterrier: ["staffordshire"],
      })
    ).toEqual([
      "akita",
      "norwegian buhund",
      "boston bulldog",
      "english bulldog",
      "french bulldog",
      "staffordshire bullterrier",
    ]);
  });
});
