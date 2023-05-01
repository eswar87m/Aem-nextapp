import CustomModelClient from './CustomModelClient';
import axiosInstance from './axiosInstance';

describe('CustomModelClient', () => {
  it('should fetch a model using the given resource path', async () => {
    const modelPath = '/path/to/model';
    const responseData = { foo: 'bar' };

    // Mock the axiosInstance.get method to return a response with the responseData object
    jest.spyOn(axiosInstance, 'get').mockResolvedValue({
      status: 200,
      data: responseData
    });

    const customModelClient = new CustomModelClient('http://localhost:4502');


    // Call the fetch method with the model path
    const result = await customModelClient.fetch(modelPath);

    // Expect that the axiosInstance.get method was called with the correct URL and headers
    expect(axiosInstance.get).toHaveBeenCalledWith(`http://localhost:4502${modelPath}`, {
      headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4='
      }
    });

    // Expect that the result is equal to the responseData object
    expect(result).toEqual(responseData);
  });

  it('should reject the promise if the response status is not in the 2xx range', async () => {
    const modelPath = '/path/to/model';

    // Mock the axiosInstance.get method to return a response with a 404 status
    jest.spyOn(axiosInstance, 'get').mockResolvedValue({
      status: 404,
      statusText: 'Not Found'
    });

    const customModelClient = new CustomModelClient('http://localhost:4502');


    // Call the fetch method with the model path
    await expect(customModelClient.fetch(modelPath)).rejects.toEqual(expect.any(Error));
  });

  it('should reject the promise if the modelPath is falsy', async () => {
    const modelPath = '';

    const customModelClient = new CustomModelClient('http://localhost:4502');


    // Call the fetch method with an empty modelPath
    await expect(customModelClient.fetch(modelPath)).rejects.toEqual(expect.any(Error));
  });
});
