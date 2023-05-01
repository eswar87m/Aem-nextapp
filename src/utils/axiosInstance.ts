import axios, { AxiosInstance } from 'axios';

const { NEXT_PUBLIC_AEM_HOST } = process.env;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_AEM_HOST,
  headers: {
    Authorization: 'Basic YWRtaW46YWRtaW4=',
  },
});

export default axiosInstance;