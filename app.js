const express = require('express'); /* node_modules 디렉토리에 있는 모듈을 가져온다 */
const app = express(); /* express()를 실행한 내용을 담은 변수 */
const path = require('path'); /* url을 쉽게 만들도록 도와주는 도구 */

/* 서버를 실행할 때 보여줄 디렉토리를 설정한다 */
app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 5000; /* 사용할 포트를 설정 */

app.listen(PORT, () => console.log(`server is running ${PORT}`));
