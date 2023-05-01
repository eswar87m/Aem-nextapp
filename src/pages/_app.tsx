import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import CustomModelClient from '@/utils/CustomModelClient';
import axiosInstance from '@/utils/axiosInstance';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const modelClient = new CustomModelClient(axiosInstance.defaults.baseURL!.toString());
    const modelManager = ModelManager.initialize({
      modelClient,
      path: router.pathname,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
