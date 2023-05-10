import { Request, Response } from 'express';
import { Hospital, predefinedHospitals } from './hosptialData';
import { getCoordinates } from './geocoding';
import { calculateDistance } from './distanceCalculation';
const dotenv = require('dotenv');
const express = require('express');
const request = require('request');
const app = express();
dotenv.config();

app.get('/searchHospital', async (req: Request, res: Response) => {
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
      Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
    },
  };

  request(reverseGeocodingOptions, async (error: any, response: Request, body: any) => {
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
    const clientLocation = { lat: Number(lat), lng: Number(lng) };
    const hospitalsWithDistance = await Promise.all(
      predefinedHospitals.map(async (hospital) => {
        const { name, description, address, phone, cost, info, homepage } = hospital;
        const hospitalCoordinates = await getCoordinates(address);
        const distance = calculateDistance(
          clientLocation.lat,
          clientLocation.lng,
          hospitalCoordinates.lat,
          hospitalCoordinates.lng
        );
        return { name, description, address, phone, cost, info, homepage, distance };
      })
    );
    hospitalsWithDistance.sort((a, b) => a.distance - b.distance);
    res.json({
      location: address,
      clientLocation,
      hospitals: hospitalsWithDistance.map((hospital) => {
        const { distance, name, description, address, phone, cost, info, homepage } = hospital;
        return {
          distance: Math.round(distance * 10) / 10,
          name,
          description,
          address,
          phone,
          cost,
          info,
          homepage,
        };
      }),
    });
  });
});
