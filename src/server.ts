import redis from 'redis';
import app from './app/app';
import { config } from './config';

const PORT:number = Number(config.port);

app.listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", (e) => {
    console.log(e);
  });