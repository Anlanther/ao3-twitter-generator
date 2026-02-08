import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { HasImage, ImageStatus } from '../../models/image-status.model';
import { TwitterUser } from '../../models/twitter-user.model';
import { Content } from '../content/content';
import { Image } from '../image/image';

@Component({
  selector: 'app-reply',
  imports: [CommonModule, Content, Image],
  templateUrl: './reply.html',
  styleUrl: './reply.scss',
})
export class Reply {
  user = input.required<TwitterUser>();
  replyTo = input.required<string>();
  imageStatus = input.required<ImageStatus>();
  message = input.required<string>();
  replyNumber = input.required<number>();
  shareNumber = input.required<number>();
  likeNumber = input.required<number>();
  date = input.required<string>();

  get imageUrl(): string {
    const hasImage = this.imageStatus().hasImage;
    if (!hasImage) {
      return '';
    }

    return (this.imageStatus() as HasImage).url;
  }
}
