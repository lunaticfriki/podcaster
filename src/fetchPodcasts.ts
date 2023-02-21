import { FetchError } from './content';
import { QueryFunctionContext } from '@tanstack/react-query';

export const fetchPodcasts = async () => {
  const res = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);

  if (!res.ok) {
    throw new Error(FetchError);
  }

  return res.json();
};

export const fetchPodcast = async ({
  queryKey,
}: QueryFunctionContext<[string, string | null | undefined]>) => {
  const id = queryKey[1];
  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}`
    )}`
  );

  if (!res.ok) {
    throw new Error(`${FetchError} ${id}`);
  }

  return res.json();
};
