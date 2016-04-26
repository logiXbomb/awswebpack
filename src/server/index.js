import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello from aws');
})

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`listening on port: ${PORT}`);
});
