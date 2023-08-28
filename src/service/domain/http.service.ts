import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { accessConfig } from '../../config/accsess.config';
import { storageService } from '../system';


export const axiosInstance = axios.create({
  baseURL: accessConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 6000,
});

axiosInstance.interceptors.request.use((config: any) => {
  const token = storageService.getLocal('TOKEN');
  if (token) config.headers.authorization = `Bearer ${token}`;

  return config;
});

const refreshSession = async () => {
  const response = await axiosInstance.post('auth/refresh-session', {
    refreshToken: await storageService.get('REFRESH_TOKEN'),
  });
  if (response.data) {
    await storageService.set('REFRESH_TOKEN', response.data.refreshToken);
    storageService.setLocal('TOKEN', response.data.accessToken);
  }
};

// export const cachiosInstance = cachios.create(axiosInstance);

// cachiosInstance.cache = {
//   get: async (cacheKey: string) => {
//     const res = await Storage.getItem(cacheKey);
//     return res ? res : undefined;
//   },
//   set: async (cacheKey: string, cacheValue: any, ttl: number) => {
//     await Storage.setItem(cacheKey, cacheValue, ttl);
//   },
// };

export const request = async <T>(
  func: Function,
  retryCount = 0,
): Promise<AxiosResponse<T>> => {
  try {
    let response = await func();
    return response as any as AxiosResponse;
  } catch (e: any) {
    console.log(e);
    if (e.response.status === 401) {
      await refreshSession();
      return request(func, retryCount);
    }
    if (!e || !e.response || !e.response.status)
      if (retryCount <= 1) return request(func, retryCount + 1);

    throw e;
  }
};

interface ICacheRequestConfig extends AxiosRequestConfig {
  ttl?: number;
  force?: boolean;
  needCache?: true;
}

interface INonCacheRequestConfig extends AxiosRequestConfig {
  needCache?: false;
}

type GetRequstConfig = ICacheRequestConfig | INonCacheRequestConfig;

export const api = {
  get: <T>(url: string, params?: GetRequstConfig, prefix = '/') => {
    if (params && params.needCache) {
      if (!params.ttl) params.ttl = 60 * 60 * 5;
      return request<T>(() => axiosInstance.get(`${prefix}${url}`, params));
    } else
      return request<T>(() => axiosInstance.get<T>(`${prefix}${url}`, params));
  },
  post: <T>(
    url: string,
    data: any,
    params?: AxiosRequestConfig,
    prefix = '/',
  ) => request<T>(() => axiosInstance.post<T>(`${prefix}${url}`, data, params)),

  put: <T>(url: string, data: any, params?: AxiosRequestConfig, prefix = '/') =>
    request<T>(() => axiosInstance.put<T>(`${prefix}${url}`, data, params)),

  patch: <T>(
    url: string,
    data: any,
    params?: AxiosRequestConfig,
    prefix = '/',
  ) =>
    request<T>(() => axiosInstance.patch<T>(`${prefix}${url}`, data, params)),

  delete: <T>(url: string, params?: AxiosRequestConfig, prefix = '/') =>
    request<T>(() => axiosInstance.delete<T>(`${prefix}${url}`, params)),
};
