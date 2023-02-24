export interface DetailList {
  data: Detail[];
}

export interface Detail {
  id: string;
  type: string;
  href: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  offers: Offer[];
  copyright: string;
  availableEpisodeCount: number;
  genreNames: string[];
  releaseFrequency?: string;
  kind: string;
  seasonNumbers: number[];
  description: PurpleDescription;
  completed: boolean;
  artwork: Artwork;
  image?: Image[];
  languageTag: string;
  url: string;
  userRating: UserRating;
  releaseDateTime: string;
  trackCount: number;
  displayType: string;
  createdDate: string;
  websiteUrl: string;
  name: string;
  artistName: string;
  contentRating: string;
  subscribable: boolean;
  subscriptionUrl: string;
}

export interface Artwork {
  width: number;
  height: number;
  url: string;
  bgColor: string;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
}

export interface PurpleDescription {
  standard: string;
}

export interface Image {
  label: string;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  height: string;
}

export interface Offer {
  kind: string;
  type: string;
}

export interface UserRating {
  value: number;
  ratingCount: number;
  ratingCountList: number[];
  ariaLabelForRatings: string;
}

export interface Relationships {
  genres: Genres;
  channel: Channel;
  artists: Artists;
  episodes: Episodes;
  reviews: Reviews;
  'listeners-also-subscribed': ListenersAlsoSubscribed;
}

export interface Artists {
  href: string;
  data: ArtistsDatum[];
}

export interface ArtistsDatum {
  id: string;
  type: string;
  href: string;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  genreNames: any[];
  editorialArtwork: EditorialArtwork;
  name: string;
  mediaType: string;
  url: string;
}

export interface EditorialArtwork {}

export interface Channel {
  href: string;
  data: ChannelDatum[];
}

export interface ChannelDatum {
  id: string;
  type: string;
  href: string;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  seller: string;
  offers: Offer[];
  releaseFrequency: string;
  description: PurpleDescription;
  backgroundSwatch: string;
  upsell: Upsell[];
  artwork: Artwork;
  url: string;
  showCount: number;
  displayType: DisplayType;
  websiteUrl: string;
  name: string;
  logoArtwork: Artwork;
}

export interface Upsell {
  joinText: string;
  benefitsText: string;
  kind: string;
}

export interface Episodes {
  href: string;
  next: string;
  data: EpisodesData[];
}

export interface EpisodesData {
  id: string;
  type: string;
  href: string;
  attributes: EpisodeAttributes;
}

export interface EpisodeAttributes {
  offers: Offer[];
  copyright: string;
  contentAdvisory: string;
  genreNames: string[];
  topics: Topic[];
  kind: string;
  mediaKind: string;
  description: EpisodeDescription;
  artwork: Artwork;
  url: string;
  releaseDateTime: string;
  websiteUrl: string;
  durationInMilliseconds: number;
  name: string;
  guid: string;
  artistName: string;
  contentRating: string;
  subscribable: boolean;
  assetUrl: string;
}

export interface EpisodeDescription {
  standard: string;
  short: string;
}

export interface Topic {
  relevance: number;
  name: string;
  wikiUrl: string;
  wikiQid: string;
}

export interface Genres {
  href: string;
  data: GenresDatum[];
}

export interface GenresDatum {
  id: string;
  type: string;
  href: string;
  attributes: IndigoAttributes;
}

export interface IndigoAttributes {
  parentName: string;
  name: string;
  parentId: string;
  url: string;
}

export interface ListenersAlsoSubscribed {
  href: string;
  next: string;
  data: ListenersAlsoSubscribedDatum[];
  meta: Meta;
}

export interface ListenersAlsoSubscribedDatum {
  id: string;
  type: string;
  href: string;
  attributes: PurpleAttributes;
}

export interface Meta {
  metrics: Metrics;
}

export interface Metrics {
  reco_shelfCategoryId: string;
  reco_displayType: string;
  reco_eligible: string;
  reco_algoId: string;
}

export interface Reviews {
  href: string;
  next: string;
  data: ReviewsDatum[];
}

export interface ReviewsDatum {
  id: string;
  type: string;
  attributes: IndecentAttributes;
}

export interface IndecentAttributes {
  date: string;
  review: string;
  rating: number;
  userName: string;
  title: string;
}
export interface TypedRequestParams<T> extends Express.Request {
  params: T;
}
