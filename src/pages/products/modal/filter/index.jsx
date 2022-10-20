import React from 'react';

import { SideFilter } from '../../.././../components/Filter';

function Filtermodal({ filterObj, setFilterObj, show, close, product_codes }) {
  return (
    <SideFilter
      close={close}
      show={show}
      filterObj={filterObj}
      setFilterObj={setFilterObj}
      data={[
        {
          certified: ['True', 'False'],
        },
        {
          unit_types: ['Bags', 'Carton', 'Bottle'],
        },
        {
          codes: product_codes,
        },
        {
          types: ['Input', 'Commodity', 'Fees'],
        },
      ]}
    />
  );
}

export default Filtermodal;
