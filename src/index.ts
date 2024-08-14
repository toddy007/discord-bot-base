import { Client } from './structure/Client';
import { load as configEnv } from 'env-smart';
configEnv();

export const client = new Client<true>({ intents: [36864]}); // intents in https://discord-intents-calculator.vercel.app/

client.run();