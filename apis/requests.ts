import axios from 'axios';

interface RequestProps {
  headers?: Object;
  url: string;
  method: string;
  params?: Object;
  datas?: Object;
}

const requests = async ({
  headers,
  url,
  method,
  params,
  datas,
}: RequestProps) => {
  try {
    const header = {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: 0,
    };

    Object.assign(header, headers);

    const response = await axios({
      headers: header,
      // baseURL: `https://62d0c389d9bf9f17058d0a17.mockapi.io/api`,
      url,
      method,
      params,
      data: datas,
      timeout: 5000,
    });

    if (response && response.status) {
      return response;
    } else {
      throw new Error('Request Error..');
    }
  } catch (err) {
    console.error('Request API Error.. ', err);
  }
};

export default requests;
