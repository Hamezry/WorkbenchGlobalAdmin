import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Productlist from '..';

describe('Testing All Products Page Functionality', () => {
  const [showModal, setOpenModal] = useState(false);
  test('it displays a table on the page', () => {
    render(<Productlist />);

    const overview_text = screen.getByText(/overview/i);

    expect(overview_text).toBeTruthy();
  });
});
