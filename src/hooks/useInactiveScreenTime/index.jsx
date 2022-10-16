import { useEffect } from 'react';
import { useAuth } from '../contexts';

// TODO: Fix this. This does not work properly
const useInactiveScreenTime = () => {
  const { signout } = useAuth();

  let time;

  const events = [
    'load',
    'mousedown',
    'mousemove',
    'mouseup',
    'keypress',
    'scroll',
    'touchstart',
  ];

  const resetTimer = () => {
    clearTimeout(signout);
    time = setTimeout(() => signout, 10 * 60 * 1000); // 10 minutes timeout
  };
  useEffect(() => {
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);
};

export default useInactiveScreenTime;
