import React, { useState } from 'react';
import { Tooltip, Modal } from '@mantine/core';
import { InfoCircle } from 'iconsax-react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { ProductsAPIs } from '../../api';

import { useProductsCtx } from '../../../../contexts';
import Button from '../../../../components/Button';
import notification from '../../../../utils/notification';
import DropdownSelect from '../../../../components/DropDownSelect';
import TextInput from '../../../../components/TextInput';
import Checkbox from '../../../../components/Checkbox';

function UpdateProductmodal({ close, modalData, show }) {
  const { refreshContext } = useProductsCtx();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    const resp = await ProductsAPIs.update_product(modalData.pk, values);
    if (!resp.data || resp.data.responseCode !== '100') {
      setLoading(false);
      notification({
        heading: 'Oops! Something went wrong',
        text: resp.data.errors.code[0],
        id: 'error',
      });
      return;
    }

    close();
    setLoading(false);

    notification({
      heading: 'Product updated successfully',
      text: '',
      id: 'success',
    });
    refreshContext();
  };

  return (
    <Modal title='Update Product' onClose={close} opened={show} centered>
      <div className='px-8 pt-6 pb-10 border-t-[1px] border-color'>
        <Formik
          initialValues={{
            name: modalData.name,
            code: modalData.code,
            product_type: modalData.product_type,
            unit_type: modalData.unit_type,
            certified: modalData.certified,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Product name is required'),
            code: Yup.string().required('Product code is required'),
            product_type: Yup.string().required('Product type is required'),
            unit_type: Yup.string().required('Product type is required'),
          })}
          onSubmit={handleSubmit}>
          <Form className='flex flex-col space-y-7'>
            <TextInput
              label='Product name'
              id='name'
              name='name'
              type='text'
              placeholder='Insert Name'
            />

            <TextInput
              label='Code'
              id='code'
              name='code'
              type='text'
              placeholder='Insert Code'
            />
            <DropdownSelect
              label='Type'
              data={[
                {
                  value: 'Input',
                  label: 'Input',
                },
                {
                  value: 'Commodity',
                  label: 'Commodity',
                },
                {
                  value: 'Fees',
                  label: 'Fees',
                },
              ]}
              id='product_type'
              name='product_type'
              type='text'
              placeholder='Select Type'
            />

            <DropdownSelect
              label='Unit Type'
              data={[
                {
                  value: 'Bags',
                  label: 'Bags',
                },
                {
                  value: 'Carton',
                  label: 'Carton',
                },
                {
                  value: 'Bottle',
                  label: 'Bottle',
                },
              ]}
              name='unit_type'
              id='unit_type'
              placeholder='Select Unit Type'
            />

            <div className='flex items-center space-x-3'>
              <Checkbox
                id='certified'
                label='Certified Product?'
                name='certified'
                checked={true}
              />
              <Tooltip
                label='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita placeat totam deserunt suscipit necessitatibus iusto, ab dolore eveniet porro ipsum?'
                multiline
                withArrow
                width={309}
                offset={20}
                radius='md'
                className='mt-1'>
                <InfoCircle size={16} />
              </Tooltip>
            </div>

            <Button type='submit' text='Submit' loading={loading} />
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}

export default UpdateProductmodal;
