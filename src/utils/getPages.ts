import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

export interface Page {
  href: string;
  name: string;
}

interface PagesResponse {
  ':children': {
    [key: string]: {
      title: string;
    };
  };
}

async function getPages(rootPath: string): Promise<Page[]> {
  const response: AxiosResponse<PagesResponse> = await axiosInstance.get(`${rootPath}.model.json`);
  const pages = response.data[':children'];

  const filteredPages: Page[] = [];
  for (const page in pages) {
    const match = page.match(/^\/content\/wknd-app\/us\/en\/(\w+)$/i);
    if (match) {
      const pageTitle = pages[page]['title'];
      filteredPages.push({ href: `/${match[1]}`, name: pageTitle });
    }
  }

  // add custom pages
  filteredPages.push({ name: 'Adventures', href: '/adventures' });

  return filteredPages;
}

export default getPages;