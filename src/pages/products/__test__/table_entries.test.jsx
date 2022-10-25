import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import ProductList from '../';

import { ProductsListCtx } from '../../../contexts/productsList';
import { products_mock } from './mock';

describe('renders overview text', () => {
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

  test('Expect entries total to be same as products mock', () => {});
});
