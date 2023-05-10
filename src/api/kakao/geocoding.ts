//병원리스트 내의 주소값을 기반으로 위도 경도 계산하기위한 함수 작성

const request = require('request');
//import request from 'request';
interface Coordinates {
  lat: number;
  lng: number;
}

export const getCoordinates = (address: string): Promise<Coordinates> => {
  return new Promise((resolve, reject) => {
    const geocodingUrl = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`;
    const options = {
      url: geocodingUrl,
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
      },
    };

    request(options, (error: any, response: any, body: any) => {
      if (error) {
        reject(error);
      } else {
        const data = JSON.parse(body);

        if (data.documents && data.documents.length > 0) {
          const { x, y } = data.documents[0].address;

          resolve({ lat: Number(y), lng: Number(x) });
        } else {
          reject(new Error('Invalid address'));
        }
      }
    });
  });
};
