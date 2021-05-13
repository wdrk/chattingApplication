'use strict';

// socket 변수에 client socket.io를 담는다
const socket = io();

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');

function LiModel(name, msg, time) {
  this._name = name;
  this._msg = msg;
  this._time = time;

  //
  this._makeLi = () => {
    const li = document.createElement('li');
    li.classList.add(nickname.value === this._name ? 'sent' : 'received');
    const dom = `<span class="profile">
                  <span class="user">${this._name}</span>
                  <img
                    class="image"
                    src="https://placeimg.com/50/50/any"
                    alt="any"
                  />
                 </span>
                 <span class="message">${this._msg}</span>
                 <span class="time">${this._time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}
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
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item._makeLi();
});
