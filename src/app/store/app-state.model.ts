import { ImageStatus } from '../models/image-status.model';
import { QuoteStatus } from '../models/quote-status.model';
import { Reply } from '../models/reply.model';
import { TwitterUser } from '../models/twitter-user.model';

export interface AppState {
  user: TwitterUser;
  imageStatus: ImageStatus;
  quoteStatus: QuoteStatus;
  message: string;
  time: string;
  date: string;
  retweets: number;
  quotes: number;
  likes: number;
  replies: Reply[];
}
