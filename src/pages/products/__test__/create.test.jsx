import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import ProductList from '../';

import { ProductsListCtx } from '../../../contexts/productsList';
import { ProductsAPIs } from '../api';
import { products_mock } from './mock';

describe('Products Tests - Create', () => {
  const TestComponent = () => {
    return (
      <MemoryRouter>
        <ProductsListCtx.Provider value={{ products: products_mock }}>
          <ProductList />
        </ProductsListCtx.Provider>
      </MemoryRouter>
    );
  };

  render(<TestComponent />);
  describe('Creating a new Product', () => {
    test('proper data is sent to the component', async () => {
      jest.spyOn(ProductsAPIs, 'create_product').mockImplementation(() =>
        Promise.resolve({
          certified: 'True',
          code: 'SUAM',
          created: '2022-10-21T16:09:29.169100+01:00',
          is_active: 'True',
          name: 'Suya Masa @',
          pk: '202',
          product_type: 'Commodity',
          unit_type: 'Carton',
          updated: '2022-10-23T12:10:57.155394+01:00',
        })
      );

      const create_product_button = screen.getByRole('button', {
        name: 'Create product',
      });

      fireEvent.click(create_product_button);

      await waitFor(() => {
        const submit_button = screen.getByRole('button', {
          name: 'Submit',
        });

        expect(submit_button).toBeTruthy();
      });
    });
  });
});
