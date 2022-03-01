const { rest } = require('msw');
const { setupServer } = require('msw/node');
const axios = require('axios');
const app = require('./dogserver');

const mockServer = setupServer(
  rest.get(`https://dog.ceo/api/breeds/list/all`, (req, res, ctx) => {
    return res(
      ctx.json({message: {
        akita: [],
        buhund: ["norwegian"],
        bulldog: ["boston", "english", "french"],
        bullterrier: ["staffordshire"],
      }}),
    )
  }),
)

let dogServer
beforeAll(() => {
  mockServer.listen()
  dogServer = app.listen(3005)
})

afterAll(() => {
  mockServer.close()
  dogServer.close()
})

describe("test dogServer()", () => {
  it("GET /breeds returns breeds json", async () => {
    const response = await axios.get('http://localhost:3005/breeds');
    expect(response.data).toEqual([
      "akita",
      "norwegian buhund",
      "boston bulldog",
      "english bulldog",
      "french bulldog",
      "staffordshire bullterrier",
    ])
  });
});

