import axios, { InternalAxiosRequestConfig } from "axios";
import { TOKEN } from "./configToken";

const tokenCybersoft = TOKEN.tokenCybersoft;

export const apiInstance = {
  create: (setting?: Partial<InternalAxiosRequestConfig>) => {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use((config) => {
      return {
        ...config,
        ...setting,
        headers: {
          ...(setting?.headers || {}),
          tokenCybersoft,
        },
      } as unknown as InternalAxiosRequestConfig;
    });

    return axiosInstance;
  },
};
