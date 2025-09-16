import axios, { type AxiosRequestConfig } from "axios";
import type { Car } from "../type";

const BASE_URL = import.meta.env.VITE_API_URL;

const getAxiosConfig = (): AxiosRequestConfig => {
          const token = sessionStorage.getItem('jwt');
          return {
                    headers: {
                              'Authorization': token
                    }
          }
}

// 자동차 목록 조회
export const getCars = async (): Promise<Car[]> => {

          const response = await axios.get(`${BASE_URL}/cars`, getAxiosConfig());
          return response.data;

          // 서버로 데이터 조회 ==> 응답 데이터 리턴
          // const getCarsDummy = [
          //       {
          //           id : 1,
          //           brand: 'Ford',
          //           model: 'Mustang',
          //           color: 'Red',
          //           registrationNumber: 'ADF-1121',
          //           modelYear: 2023,
          //           price: 59000
          //       },
          //       {
          //           id : 2,
          //           brand: 'Genesis',
          //           model: 'G90',
          //           color: 'Black',
          //           registrationNumber: 'GGB-1234',
          //           modelYear: 2025,
          //           price: 90000000
          //       },
          //       {
          //           id : 3,
          //           brand: 'Kia',
          //           model: 'Morning',
          //           color: 'White',
          //           registrationNumber: 'KMW-5678',
          //           modelYear: 2025,
          //           price: 20000000
          //       },
          // ]
          // return Promise.resolve(getCarsDummy);
} 


export const deleteCar = async (id: number): Promise<number> => {
          const response = await axios.delete(`${BASE_URL}/cars/${id}`, getAxiosConfig());
          return response.data;
}

// export const deleteCar = (id: number): Promise<number> => {
//           alert(id + '번 데이터를 삭제합니다.');
//           return Promise.resolve(id);
// }

export const addCar = async (car: Car): Promise<Car> => {
          const response = await axios.post(`${BASE_URL}/cars`, car, getAxiosConfig())
          return response.data;
}

// export const addCar = (car: Car): Promise<Car> => {
//           const res: Car = {...car, id: 999};
//           return Promise.resolve(res);
// }

export const updateCar = async (car: Car): Promise<Car> => {
          const response = await axios.put(`${BASE_URL}/cars`, car, getAxiosConfig())
          return response.data;
}

// export const updateCar = (car: Car): Promise<Car> => {
//           const res: Car = {...car};
//           return Promise.resolve(res);
// }