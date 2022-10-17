import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_API_URL;

const gen_auth_header = () => {
  const token = localStorage.getItem('global-admin-workbench-app-token');

  if (!token) return;

  return {
    Authorization: `WB3 ${token}`,
    'Content-Type': 'application/json',
  };
};

const request = axios.create({
  baseURL: base_url,
  headers: {
    ...gen_auth_header(),
  },
});

export default request;
