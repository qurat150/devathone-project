import { Client, Account, ID, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('653cc13552a0afd74307');

export const account = new Account(client);
export const databases = new Databases(client);

export { ID };
