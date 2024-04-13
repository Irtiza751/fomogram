import { fomo } from "@client/api/fomo";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Config = {
  endpoint: string;
  onSuccess?: (res: AxiosResponse<any>) => void;
  onError?: (error: AxiosError<any>) => void;
};

export function useFetch<T = {}>(config: Config) {
  const { endpoint, onSuccess = () => {}, onError = () => {} } = config;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  const fetch = async (params?: Record<string, string>) => {
    try {
      setIsLoading(true);
      const { data } = await fomo.get(endpoint, { params });
      setData(data);
      onSuccess(data);
    } catch (error) {
      onError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { isLoading, data } as const;
}
