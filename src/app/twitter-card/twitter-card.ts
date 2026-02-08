import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberTransformerPipe } from '../pipes/number-transformer.pipe';
import { AppStore } from '../store/app-store';
import { Content } from './content/content';
import { Image } from './image/image';
import { Quote } from './quote/quote';
import { Reply } from './reply/reply';

@Component({
  selector: 'app-twitter-card',
  imports: [CommonModule, ReactiveFormsModule, NumberTransformerPipe, Image, Quote, Reply, Content],
  templateUrl: './twitter-card.html',
  styleUrl: './twitter-card.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TwitterCard {
  @ViewChild('cardContainer') cardContainer?: ElementRef<HTMLDivElement>;

  private appStore = inject(AppStore);

  username$ = this.appStore.username$;
  userHandle$ = this.appStore.userHandle$;
  userImage$ = this.appStore.userImage$;
  isVerified$ = this.appStore.isVerified$;
  message$ = this.appStore.message$;
  time$ = this.appStore.time$;
  date$ = this.appStore.date$;
  retweets$ = this.appStore.retweets$;
  quotes$ = this.appStore.quotes$;
  likes$ = this.appStore.likes$;
  hasImage$ = this.appStore.hasImage$;
  imageUrl$ = this.appStore.imageUrl$;
  hasQuote$ = this.appStore.hasQuote$;
  quoteUsername$ = this.appStore.quoteUsername$;
  quoteUserHandle$ = this.appStore.quoteUserHandle$;
  quoteUserImage$ = this.appStore.quoteUserImage$;
  quoteIsVerified$ = this.appStore.quoteIsVerified$;
  quoteDate$ = this.appStore.quoteDate$;
  quoteMessage$ = this.appStore.quoteMessage$;
  quoteHasImage$ = this.appStore.quoteHasImage$;
  quoteImageUrl$ = this.appStore.quoteImageUrl$;
  replies$ = this.appStore.replies$;

  downloadHtmlAsFile(): void {
    const element = this.cardContainer?.nativeElement;
    if (!element) return;

    const shadowRoot = element.parentElement?.querySelector('app-twitter-card')?.shadowRoot;
    let htmlContent = shadowRoot ? `${shadowRoot.innerHTML}` : `${element.outerHTML}`;

    htmlContent = htmlContent.replace(/<!--.*?-->/g, '');

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `twitter-card-${new Date().getTime()}.html`;
    link.click();
    URL.revokeObjectURL(url);
  }
}
