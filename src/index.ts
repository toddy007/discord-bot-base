import { Client } from './structure/Client';

export const client = new Client<true>({ intents: [36864]}); // intents in https://discord-intents-calculator.vercel.app/

client.run();