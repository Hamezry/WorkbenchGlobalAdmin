import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../contexts';
import axios from '../../utils/axios';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import notification from '../../utils/notification';

import logo from '../../Assets/afex-logo.png';
import background from '../../Assets/backround.png';

function Login() {
  const { signin } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    const resp = await axios.post('api-token-auth/', values);

    if (!resp.data || resp.data.responseCode !== '100') {
      notification({
        id: 'error',
        heading: 'Login attempt failed!!!',
        text: resp.data.errors.non_field_errors[0],
      });
      setLoading(false);
      return;
    }

    setLoading(false);
    signin(resp.data.token);
  };

  return (
    <div className='flex w-full h-[100vh] z-50 fixed top-0 left-0 bg-[#F5F5F5]'>
      <img src={background} alt='bg' className='w-1/2' />

      <div className='bg[#F5F5F5] w-1/2'>
        <div className='flex justify-end p-[60px]'>
          <p className='mr-4'>Powered By</p>
          <img src={logo} alt='lg' />
        </div>

        <div className='w-[500px] ml-[150px] mt-[100px] p-8 rounded-xl '>
          <h1 className='text-[#54565B] text-[28px] font-medium'>Login</h1>

          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              username: Yup.string().required('Username is required'),
              password: Yup.string().required('Password is required'),
            })}>
            <Form className='my-10 space-y-5'>
              <TextInput
                label='Username'
                id='username'
                name='username'
                type='text'
                placeholder='Username'
              />
              <TextInput
                label='Password'
                id='password'
                name='password'
                type='password'
                placeholder='xxxxxxxxxxx'
              />
              <div className='flex flex-row justify-between items-center'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='checkbox white'
                  />
                  <label className='ml-2' htmlFor='remember'>
                    Remember me
                  </label>
                </div>
                <div>
                  <p className='font-medium text-[#38CB89]'>Forgot Password?</p>
                </div>
              </div>
              <Button text='Submit' loading={loading} type='submit' />
            </Form>
          </Formik>
          <p className='text-center flex flex-col'>
            <span>Create an account for your organization </span>
            <span>Data Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
