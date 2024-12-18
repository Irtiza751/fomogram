import { fomo } from "@client/api/fomo";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Config<T> = {
  endpoint: string;
  onSuccess?: (res: T) => void;
  onError?: (error: AxiosError<any>) => void;
  enable?: boolean;
};

export function useFetch<T = {}>(config: Config<T>) {
  const {
    endpoint,
    onSuccess = () => {},
    onError = () => {},
    enable = true,
  } = config;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  const fetch = async (params?: Record<string, string>) => {
    try {
      setIsLoading(true);
      const { data } = await fomo.get<T>(endpoint, { params });
      setData(data);
      onSuccess(data);
    } catch (error) {
      onError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (enable) fetch();
  }, [enable]);

  return { isLoading, data, fetch } as const;
}
