const express = require('express'); /* node_modules 디렉토리에 있는 모듈을 가져온다 */
const http = require('http');
const app = express(); /* express()를 실행한 내용을 담은 변수 */
const path = require('path'); /* url을 쉽게 만들도록 도와주는 도구 */
const socketIO = require('socket.io');

/* express로 구현한 app 변수를 createServer()에 넘김으로서,
   http를 통해서 express를 실행하는 구조 */
const server = http.createServer(app);

/* socketIO에서 server를 담아간 내용을 io 변수에 설정 */
const io = socketIO(server);

/* 서버를 실행할 때 보여줄 디렉토리를 설정한다 */
app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 5000; /* 사용할 포트를 설정 */

// 연결됐을 때 모든 정보를 socket에 담는다
io.on('connection', (socket) => {
  // ('채널이름', 동작)
  socket.on('chatting', (data) => {
    console.log(data);
    io.emit('chatting', `hello ${data}`);
  });
});

server.listen(PORT, () => console.log(`server is running ${PORT}`));
