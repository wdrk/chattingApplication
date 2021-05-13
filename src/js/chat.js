'use strict';

// socket 변수에 client socket.io를 담는다
const socket = io();

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click', () => {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  // emit('채널이름', '내용')은 메시지를 보내는 방법
  socket.emit('chatting', param);
});

// 들어오는 메시지를 받는 코드
socket.on('chatting', (data) => {
  const li = document.createElement('li');
  li.innerText = `${data.name}님이 - ${data.msg}`;
  chatList.appendChild(li);
});
console.log(socket);
