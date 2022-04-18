import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../translations/getInitialLocale';

export const useRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const detectedLng = getInitialLocale();
    router.replace(`/${detectedLng}`);
  }, []);
};
