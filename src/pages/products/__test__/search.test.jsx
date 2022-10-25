import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import ProductList from '../';

import { ProductsListCtx } from '../../../contexts/productsList';
import { products_mock } from './mock';

describe('Products Tests - Search', () => {
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

  test('Expect to find the product by name and total to be equal to 1', () => {});
});
