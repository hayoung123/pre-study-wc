const net = require('net');

const getDateNumber = (number) => (number < 10 ? '0' + number : number);

const getConnectionTime = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = getDateNumber(dateObj.getMonth() + 1);
  const date = getDateNumber(dateObj.getDate());
  const hours = getDateNumber(dateObj.getHours());
  const minutes = getDateNumber(dateObj.getMinutes());

  return `${year}-${month}-${date} ${hours}:${minutes}`;
};

const server = net.createServer((socket) => {
  socket.end(getConnectionTime() + '\n');
});
server.listen(+process.argv[2]);
