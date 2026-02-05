import { ImageStatus } from './image-status.model';
import { TwitterUser } from './twitter-user.model';

export interface Reply {
  user: TwitterUser;
  replyTo: string;
  imageStatus: ImageStatus;
  message: string;
  replyNumber: number;
  shareNumber: number;
  likeNumber: number;
  date: string;
}
