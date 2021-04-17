// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Company, Customer } = initSchema(schema);

export {
  Company,
  Customer
};