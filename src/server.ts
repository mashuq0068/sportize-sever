import mongoose from 'mongoose';
import config from './app/config';
import { Server } from 'http';
import app from './app';

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      console.log(`app is running on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
process.on('unhandledRejection', (err) => {
  console.log(`Found unahandledRejection  , shutting down ...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`Found uncaughtException  , shutting down ...`);
  process.exit(1);
});
