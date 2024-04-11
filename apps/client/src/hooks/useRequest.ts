import { fomo } from "@client/api/fomo";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

type Config = {
  endpoint: string;
  onSuccess: (res: AxiosResponse<any>) => void;
  onError?: (error: AxiosError<any>) => void;
};

export function useRequest(config: Config) {
  const { endpoint, onSuccess, onError = () => {} } = config;
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async (params?: Record<string, string>) => {
    try {
      setIsLoading(true);
      const { data } = await fomo.get(endpoint, { params });
      onSuccess(data);
    } catch (error) {
      onError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (
    payload: Record<string, string>,
    params?: Record<string, string>
  ) => {
    try {
      setIsLoading(true);
      const { data } = await fomo.post(endpoint, payload, { params });
      onSuccess(data);
    } catch (error) {
      onError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, fetch, post } as const;
}
