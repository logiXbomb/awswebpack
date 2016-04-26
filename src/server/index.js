import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../../build/`));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`listening on port: ${PORT}`);
});
