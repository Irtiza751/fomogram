import { fomo } from "@client/api/fomo";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

type Config<ResponseType = {}> = {
  endpoint: string;
  onSuccess: (res: ResponseType) => void;
  onError?: (error: AxiosError<any>) => void;
};

export function useRequest<T = {}>(config: Config<T>) {
  const { endpoint, onSuccess, onError = () => {} } = config;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  const post = async (
    payload: Record<string, any> | FormData,
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
