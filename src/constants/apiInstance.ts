import axios, { InternalAxiosRequestConfig } from "axios";
import { TOKEN } from "./configToken";

export const apiInstance = {
  create: (setting?: Partial<InternalAxiosRequestConfig>) => {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use((config) => {
      return {
        ...config,
        ...setting,
        headers: {
          ...(setting?.headers || {}),
          tokenCyberSoft: TOKEN.tokenCybersoft,
          token: TOKEN.token,
        },
      } as unknown as InternalAxiosRequestConfig;
    });

    return axiosInstance;
  },
};
