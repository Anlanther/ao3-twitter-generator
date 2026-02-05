export type ImageStatus = NoImage | HasImage;

export interface NoImage {
  hasImage: false;
}

export interface HasImage {
  hasImage: true;
  url: string;
}
