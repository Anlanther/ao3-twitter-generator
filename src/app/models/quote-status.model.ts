import { ImageStatus } from './image-status.model';
import { TwitterUser } from './twitter-user.model';

export type QuoteStatus = NoQuote | HasQuote;

export interface HasQuote {
  hasQuote: true;
  user: TwitterUser;
  date: string;
  message: string;
  imageStatus: ImageStatus;
}

export interface NoQuote {
  hasQuote: false;
}
