import { AxiosRequestConfig } from 'axios';
import { api, axiosInstance, request } from '../domain/http.service';

export interface ICacheRequestConfig extends AxiosRequestConfig {
  ttl?: number;
  force?: boolean;
  needCache?: true;
}

export interface IRequestConfig extends AxiosRequestConfig {}

interface INonCacheRequestConfig extends AxiosRequestConfig {
  needCache?: false;
}

type GetRequstConfig = ICacheRequestConfig | INonCacheRequestConfig;

export abstract class Repository {
  protected api = api;

  static api = api;
  protected request = request;
  protected axiosInstance = axiosInstance;

  constructor(protected prefix = '') {}

  protected _get<T>(url: string, params?: GetRequstConfig) {
    if (params && params.needCache) {
      if (!params.ttl) params.ttl = 60 * 60 * 5;
      return this.request<T>(() =>
        this.axiosInstance.get(`${this.prefix}${url}`, params),
      );
    } else
      return this.request<T>(() =>
        this.axiosInstance.get<T>(`${this.prefix}/${url}`, params),
      );
  }

  protected post<T>(url: string, data: any, params?: AxiosRequestConfig) {
    return this.request<T>(() =>
      this.axiosInstance.post<T>(`${this.prefix}/${url}`, data, params),
    );
  }

  protected put<T>(url: string, data: any, params?: AxiosRequestConfig) {
    return this.request<T>(() =>
      this.axiosInstance.put<T>(`${this.prefix}/${url}`, data, params),
    );
  }

  protected patch<T>(url: string, data: any, params?: AxiosRequestConfig) {
    return this.request<T>(() =>
      this.axiosInstance.patch<T>(`${this.prefix}/${url}`, data, params),
    );
  }

  protected delete<T>(url: string, params?: AxiosRequestConfig) {
    return this.request<T>(() =>
      this.axiosInstance.delete<T>(`${this.prefix}/${url}`, params),
    );
  }
}
