import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';
import app from "./dogserver";

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

// @ts-ignore
let dogServer
beforeAll(() => {
  mockServer.listen()
  dogServer = app.listen(3005)
})

afterAll(() => {
  mockServer.close()
  // @ts-ignore
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

