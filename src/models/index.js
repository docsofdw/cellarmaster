// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Client, Wine, Spirit, CellarCondition } = initSchema(schema);

export {
  Client,
  Wine,
  Spirit,
  CellarCondition
};