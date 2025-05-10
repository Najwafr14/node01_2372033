const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let filePath = '.' + parsedUrl.pathname;

  if (filePath === './') filePath = './pages/index.html';
  const extname = path.extname(filePath);
  let contentType = 'text/html';

  if (extname === '.css') contentType = 'text/css';
  else if (extname === '.js') contentType = 'application/javascript';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('<h1>404 Not Found</h1>');
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.write(data);
    return res.end();
  });
});

server.listen(8000, () => {
  console.log('Server jalan di http://localhost:8000');
});