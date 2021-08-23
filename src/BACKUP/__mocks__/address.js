import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    name: 'Site1',
    address1: '6 Coffin Close',
    address2: 'Highworth',
    city: 'Swindon',
    county: 'Wiltshire',
    postcode: 'SN67HA'
  },
  {
    id: uuid(),
    name: 'Site2',
    address1: '25 Wellfields Drive',
    address2: 'Bradpole',
    city: 'Bridport',
    county: 'Dorset',
    postcode: 'DT67HA'
  },
  {
    id: uuid(),
    name: 'Site3',
    address1: '98 Queen Elizabeth Drive',
    address2: '',
    city: 'Swindon',
    county: 'Wiltshire',
    postcode: 'SN251XA'
  }  
];
