import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getPages, {Page} from './getPages';

const mockAxios = new MockAdapter(axios);
const rootPath = '/content/wknd-app/us/en/home';

describe('getPages', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it('returns filtered pages', async () => {
    const pagesResponse = {
      ':children': {
        '/content/wknd-app/us/en/about': {
          title: 'About',
        },
        '/content/wknd-app/us/en/home': {
          title: 'Home',
        },
        '/content/wknd-app/us/en/contact': {
          title: 'Contact',
        },
        '/content/wknd-app/us/en/other-page': {
          title: 'Other Page',
        },
      },
    };
    mockAxios.onGet(`${rootPath}.model.json`).reply(200, pagesResponse);

    const expectedPages: Page[] = [
      { href: '/about', name: 'About' },
      { href: '/contact', name: 'Contact' },
      { href: '/other-page', name: 'Other Page' },
      { href: '/adventures', name: 'Adventures' },
    ];

    const result = await getPages(rootPath);
    expect(result).toEqual(expectedPages);
  });
});
