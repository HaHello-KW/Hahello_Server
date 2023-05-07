import { Request, Response } from 'express';
const dotenv = require('dotenv');
const express = require('express');
const request = require('request');
const app = express();
dotenv.config();

app.get('/searchHospital', (req: Request, res: Response) => {
  const lat = req.query.lat;
  const lng = req.query.lng;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'lat and lng parameters are required' });
  }

  // 역지오코딩 API 호출을 위한 URL 생성
  const reverseGeocodingUrl = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;

  // 역지오코딩 API 호출을 위한 request options 설정
  const reverseGeocodingOptions = {
    url: reverseGeocodingUrl,
    method: 'GET',
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_MAP_API}`,
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

    // 장소 검색 API 호출을 위한 URL 생성
    const encodedUrl = encodeURI(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=난임치료&x=${lng}&y=${lat}&radius=5000&category_group_code=HP8&size=10`
    );

    // 장소 검색 API 호출을 위한 request options 설정
    const searchOptions = {
      url: encodedUrl,
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_MAP_API}`,
      },
    };

    request(searchOptions, (error: any, response: Request, body: string) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const data = JSON.parse(body);

      const hospitals = data.documents
        ? data.documents
            .filter((doc: any) => !doc.category_name.includes('한의원'))
            .map((doc: any) => ({
              name: doc.place_name,
              address: doc.road_address_name || doc.address_name,
              phone: doc.phone,
              homepage: doc.place_url,
              category: doc.category_name,
              category_group_name: doc.category_group_name,
            }))
        : [];

      res.json({
        location: address,
        lat,
        lng,
        hospitals,
      });
    });
  });
});
