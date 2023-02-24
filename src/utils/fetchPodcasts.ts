import { FetchError } from '../content';
import { QueryFunctionContext } from '@tanstack/react-query';

export const fetchPodcasts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/feed`);

  if (!res.ok) {
    throw new Error(FetchError);
  }
  return res.json();
};

export const fetchPodcast = async ({
  queryKey,
}: QueryFunctionContext<[string, string | null | undefined]>) => {
  const id = queryKey[1];
  const res = await fetch(`${import.meta.env.VITE_API_URL}/detail/1535809341`);

  if (!res.ok) {
    throw new Error(`${FetchError} ${id}`);
  }
  return res.json();
};
