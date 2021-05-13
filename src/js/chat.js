'use strict';

// socket 변수에 client socket.io를 담는다
const socket = io();

// emit('채널이름', '내용')은 메시지를 강제로 보내는 방법
socket.emit('chatting', 'from front');

// 들어오는 메시지를 받는 코드
socket.on('chatting', (data) => {
  console.log(data);
});
console.log(socket);
