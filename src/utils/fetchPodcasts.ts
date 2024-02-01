import { QueryFunctionContext } from '@tanstack/react-query';

import { FetchError } from '../content';

export const fetchPodcast = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => {
  const id = queryKey[1];
  const mainRes = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);
  const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`);

  if (!res.ok || !mainRes.ok) {
    throw new Error(`${FetchError} ${id}`);
  }

  const mainPodcastInfo = await mainRes.json();
  const info = await res.json();
  const episodes = info.results.slice(1);

  return { info, episodes, mainPodcastInfo };
};
