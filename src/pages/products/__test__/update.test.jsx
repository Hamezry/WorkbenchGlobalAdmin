import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  queryByAttribute,
} from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import ProductList from '../';

import { ProductsListCtx } from '../../../contexts/productsList';
import { ProductsAPIs } from '../api';
import { products_mock, card_data } from './mock';

describe('Products Tests - Update', () => {
  const TestComponent = () => {
    return (
      <MemoryRouter>
        <ProductsListCtx.Provider
          value={{
            products: products_mock,
            // dataLoaded: true,
            // cardData: card_data,
          }}>
          <ProductList />
        </ProductsListCtx.Provider>
      </MemoryRouter>
    );
  };

  render(<TestComponent />);

  describe('Updating a Product Product', () => {
    test('proper data is sent to the component', async () => {
      jest.spyOn(ProductsAPIs, 'update_product').mockImplementation(() =>
        Promise.resolve({
          certified: false,
          code: 'AAAU',
          created: '2022-10-21T13:56:03.819351+01:00',
          is_active: 'True',
          name: 'Mock Product 1',
          pk: '001',
          product_type: 'Commodity',
          unit_type: 'Bags',
          updated: '2022-10-21T15:54:56.972857+01:00',
        })
      );

      // fireEvent.click();

      // await waitFor(() => {
      //   const submit_button = screen.getByRole('paragraph', {
      //     description: 'Update',
      //   });

      //   expect(submit_button).toBeTruthy();
      // });
    });
  });
});
