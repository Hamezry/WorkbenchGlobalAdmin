import { useLocation } from 'react-router-dom';

const useBreadCrumbs = () => {
  const { pathname } = useLocation();
  const capitalise = (word) =>
    word
      .split(' ')
      .map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      })
      .join(' ');

  const currentLocation = pathname.split('/')[1];

  if (currentLocation === '') {
    return { currentLocation: 'Tenants' };
  }

  return { currentLocation: capitalise(currentLocation) };
};

export default useBreadCrumbs;
