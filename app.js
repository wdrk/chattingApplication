const express = require('express'); /* node_modules 디렉토리에 있는 모듈을 가져온다 */
const http = require('http');
const app = express(); /* express()를 실행한 내용을 담은 변수 */
const path = require('path'); /* url을 쉽게 만들도록 도와주는 도구 */
/* express로 구현한 app 변수를 createServer()에 넘김으로서,
   http를 통해서 express를 실행하는 구조 */
const server = http.createServer(app);

/* 서버를 실행할 때 보여줄 디렉토리를 설정한다 */
app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 5000; /* 사용할 포트를 설정 */

server.listen(PORT, () => console.log(`server is running ${PORT}`));
