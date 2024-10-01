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
          TokenCyberSoft: TOKEN.tokenCybersoft,
        },
      } as unknown as InternalAxiosRequestConfig;
    });

    return axiosInstance;
  },
};
