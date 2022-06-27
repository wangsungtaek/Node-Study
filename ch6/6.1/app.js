const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log('1 모든 요청에 실행하고싶어요.');
  next();
},(req, res, next) => {
  console.log('2 모든 요청에 실행하고싶어요.');
  next();
},(req, res, next) => {
  // try {
  //   console.log(errfd)
  // } catch(error) {
  //   next(error);
  // }
  next();
},);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  res.send('hello express');
});

app.get('/category/javascript', (req, res) => {
  res.send('hello javascript');
});

app.get('/category/:name', (req, res) => {
  res.send('hello wildcard');
});

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send('에러 발생');
});

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});