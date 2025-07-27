import { Application } from 'express';
import config from '../config';
import { createApp } from './create-app';

const { app: { host, port } } = config;

export const initExpressApp = async () => {
  const app: Application = await createApp();

  app.listen(
    port,
    '0.0.0.0',
    () => console.log(`Server listening on http://0.0.0.0:${port}`)
  );
};