import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import ProductList from '../';

import { ProductsListCtx } from '../../../contexts/productsList';
import { ProductsAPIs } from '../api';
import { products_mock } from './mock';

describe('Products Tests - Pagination', () => {
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

  test('Expect to Beginning of Pagination to change', () => {});
});
