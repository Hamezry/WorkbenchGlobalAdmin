export const products_mock = [
  {
    certified: false,
    code: 'AAA',
    created: '2022-10-21T13:56:03.819351+01:00',
    is_active: 'True',
    name: 'Mock Product 1',
    pk: '001',
    product_type: 'Commodity',
    unit_type: 'Bags',
    updated: '2022-10-21T15:54:56.972857+01:00',
  },
  {
    certified: true,
    code: 'AAB',
    created: '2022-10-21T13:56:03.819351+01:00',
    is_active: 'True',
    name: 'Mock Product 2',
    pk: '003',
    product_type: 'Input',
    unit_type: 'Carton',
    updated: '2022-10-21T15:54:56.972857+01:00',
  },
  {
    certified: false,
    code: 'AAC',
    created: '2022-10-21T13:56:03.819351+01:00',
    is_active: 'True',
    name: 'Mock Product 2',
    pk: '001',
    product_type: 'Commodity',
    unit_type: 'Bags',
    updated: '2022-10-21T15:54:56.972857+01:00',
  },
  {
    certified: true,
    code: 'AAB',
    created: '2022-10-21T13:56:03.819351+01:00',
    is_active: 'True',
    name: 'Mock Product 2',
    pk: '003',
    product_type: 'Input',
    unit_type: 'Carton',
    updated: '2022-10-21T15:54:56.972857+01:00',
  },
];

export const card_data = {
  commodities: {
    value: 0,
    last_added: new Date(),
  },
  fees: {
    value: 0,
    last_added: new Date(),
  },
  inputs: {
    value: 0,
    last_added: new Date(),
  },
  total_products: {
    value: 0,
    certified_products: 0,
  },
};
