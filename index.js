const http = require("http");
const url = require("url")
const StringDecoder = require('string_decoder');

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.pathname;

  const trimmedPath = path.replace(/\/+|\/+$/g, '')

  const method = req.method.toLowerCase()

  const queryString = parsedUrl.query;

  const headers = req.headers;

  const decoder = new StringDecoder('utf-8');

  res.end("Hello world");

  console.log(`Request received with these headers ${JSON.stringify(headers)}`)
});

server.listen(3000, () => {
  console.log("Listening on port 3000....")
})