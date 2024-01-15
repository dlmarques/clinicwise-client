import axios from 'axios';
import { Endpoints } from './endpoints';

export function login(info: { name: string; email: string }, token: string) {
  return axios.post(
    `${import.meta.env.VITE_BACKEND_URL}${Endpoints.LOGIN}`,
    {
      name: info.name,
      email: info.email,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
