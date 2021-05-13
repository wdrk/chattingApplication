'use strict';

// socket 변수에 client socket.io를 담는다
const socket = io();

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container');

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  // emit('채널이름', '내용')은 메시지를 보내는 방법
  socket.emit('chatting', param);
}
chatInput.addEventListener('keypress', (event) => {
  /* chatInput 창에서 엔터를 감지해서 동작하는 설정 */
  if (event.keyCode === 13) {
    send();
    chatInput.value = '';
  }
});

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
  send();
  chatInput.value = '';
});

// 들어오는 메시지를 받는 코드
socket.on('chatting', (data) => {
  console.log(data);
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item._makeLi();
  displayContainer.scrollTo(
    0,
    displayContainer.scrollHeight
  ); /* 채팅이 쌓일때 스크롤이 자동으로 내려가는 설정 */
});
