import { Request, Response } from 'express';

const express = require('express');
const request = require('request');
const app = express();

app.get('/searchHospital', (req: Request, res: Response) => {
  const lat = req.query.lat;
  const lng = req.query.lng;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'lat and lng parameters are required' });
  }

  // 카카오맵 역지오코딩 API 호출을 위한 URL 생성
  const reverseGeocodingUrl = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;

  // 카카오맵 역지오코딩 API 호출을 위한 request options 설정
  const reverseGeocodingOptions = {
    url: reverseGeocodingUrl,
    method: 'GET',
    headers: {
      Authorization: `KakaoAK 2d4f4e6fa070601e33b1c58b04cde4ab`,
    },
  };

  request(reverseGeocodingOptions, (error: any, response: Request, body: any) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const locationData = JSON.parse(body);

    const address =
      locationData.documents[0].address.region_1depth_name +
      ' ' +
      locationData.documents[0].address.region_2depth_name +
      ' ' +
      locationData.documents[0].address.region_3depth_name;

    // 카카오맵 장소 검색 API 호출을 위한 URL 생성
    const encodedUrl = encodeURI(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=병원&x=${lng}&y=${lat}&radius=1000&category_group_code=HP8&size=10`
    );

    // 카카오맵 장소 검색 API 호출을 위한 request options 설정
    const searchOptions = {
      url: encodedUrl,
      method: 'GET',
      headers: {
        Authorization: `KakaoAK 2d4f4e6fa070601e33b1c58b04cde4ab`,
      },
    };

    request(searchOptions, (error: any, response: Request, body: string) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const data = JSON.parse(body);

      // `documents` 속성이 없는 경우를 처리
      const hospitals = data.documents ? data.documents.map((doc: { place_name: any }) => doc.place_name) : [];

      res.json({
        location: address,
        lat,
        lng,
        hospitals,
      });
    });
  });
});

app.listen(3065, () => {
  console.log('Server started on port 3065');
});
