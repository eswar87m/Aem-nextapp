import { ModelClient } from "@adobe/aem-spa-page-model-manager";
import axiosInstance from './axiosInstance';
import { AxiosResponse } from 'axios';

type FetchError = {
  response?: AxiosResponse<any, any>;
};

/**
 * Custom ModelClient meant to demonstrate how to customize the request sent to the AEM instance
 */
export default class CustomModelClient extends ModelClient {

    /**
     * Fetches a model using the given a resource path
     *
     * @param {string} modelPath - Path to the model
     * @return {*}
     */
    
    async fetch(modelPath: string) {

        if (!modelPath) {
            let err = 'Fetching model rejected for path: ' + modelPath;
            return Promise.reject(new Error(err));
        }

        // Either the API host has been provided or we make an absolute request relative to the current host
        const url = `${axiosInstance.defaults.baseURL}${modelPath}`;
        console.log(`custom model client is called ${url}`)

        const response = await axiosInstance.get(url, {
          headers: {
            Authorization: 'Basic YWRtaW46YWRtaW4='
          }
        });

        if (response.status >= 200 && response.status < 300) {
          return response.data;
        } else {
          const error: FetchError = new Error('while fetching the model for url: ' + url) as FetchError;
          error.response = response;

          return Promise.reject(error);
        }
    }
}
