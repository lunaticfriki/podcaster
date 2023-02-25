export interface ListProps {
  count: string;
  episodes: Episode[];
}

export interface Episode {
  previewUrl: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  genres: Genre[];
  episodeGuid: string;
  description: string;
  releaseDate: string;
  shortDescription: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: number;
  collectionViewUrl: string;
  feedUrl: string;
  artistIds: number[];
  episodeUrl: string;
  artworkUrl600: string;
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  country: string;
  kind: string;
  wrapperType: string;
}

export type Genre = {
  name: string;
  id: string;
};
