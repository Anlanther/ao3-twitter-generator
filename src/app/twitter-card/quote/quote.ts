import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Content } from '../content/content';
import { Image } from '../image/image';
@Component({
  selector: 'app-quote',
  imports: [CommonModule, Image, Content],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class Quote {
  userHandle = input.required<string>();
  userUsername = input.required<string>();
  userImage = input.required<string>();
  isVerified = input.required<boolean>();
  date = input.required<string>();
  message = input.required<string>();
  hasImage = input.required<boolean>();
  imageUrl = input.required<string>();
}
