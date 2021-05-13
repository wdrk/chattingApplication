'use strict';

// socket 변수에 client socket.io를 담는다
const socket = io();

// emit('채널이름', '내용')은 메시지를 강제로 보내는 방법
socket.emit('chatting', 'from front');
console.log(socket);
