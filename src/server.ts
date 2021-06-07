import app from './app/app';
import { config } from './app/config';

const PORT: number = Number(config.port);

export const server = app.listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", (e) => {
    console.log(e);
  });

