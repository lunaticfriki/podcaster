export const fetchPodcasts = async () => {
  const res = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);

  if (!res.ok) {
    throw new Error(`An error occurred while fetching podcasts`);
  }

  return res.json();
};
