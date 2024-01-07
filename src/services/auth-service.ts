import axios, { AxiosResponse } from 'axios';
import { Endpoints } from './endpoints';

export function login(info: {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}) {
  const response: { data: AxiosResponse | null; error: any } = {
    data: null,
    error: null,
  };
  axios
    .post(`http://localhost:3000${Endpoints.LOGIN}`, {
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      role: info.role,
    })
    .then(res => {
      response.data = res;
    })
    .catch(error => {
      response.error = error;
    });

  return response;
}
