const http = require('http');
const url = require('url');
const port = +process.argv[2];

const getParseTime = (time) => ({
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
});

const getUnixTime = (time) => ({ unixtime: time.getTime() });

const parseQuery = (url) => {
  const queryTime = url.query.iso;
  const time = new Date(queryTime);
  if (url.pathname === '/api/parsetime') {
    return getParseTime(time);
  }
  if (url.pathname === '/api/unixtime') {
    return getUnixTime(time);
  }
  return 'wrong endpoint url';
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(404);
    res.end();
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const getUrl = url.parse(req.url, true);
  const responseData = parseQuery(getUrl);
  res.end(JSON.stringify(responseData));
});

server.listen(port);

//원칙주의자
