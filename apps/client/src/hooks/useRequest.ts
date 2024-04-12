import { fomo } from "@client/api/fomo";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

type Config = {
  endpoint: string;
  onSuccess: (res: AxiosResponse<any>) => void;
  onError?: (error: AxiosError<any>) => void;
};

export function useRequest<T = {}>(config: Config) {
  const { endpoint, onSuccess, onError = () => {} } = config;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  const post = async (
    payload: Record<string, string> | FormData,
    params?: Record<string, string>
  ) => {
    try {
      setIsLoading(true);
      const { data } = await fomo.post(endpoint, payload, { params });
      setData(data);
      onSuccess(data);
    } catch (error) {
      onError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, post } as const;
}
