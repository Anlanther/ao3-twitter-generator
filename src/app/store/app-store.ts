import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs';
import { HasImage, ImageStatus, NoImage } from '../models/image-status.model';
import { HasQuote, NoQuote, QuoteStatus } from '../models/quote-status.model';
import { Reply } from '../models/reply.model';
import { AppState } from './app-state.model';
import { initialState } from './app-store.constant';

@Injectable({ providedIn: 'root' })
export class AppStore extends ComponentStore<AppState> {
  store$ = this.select((state) => state);

  username$ = this.select((state) => state.user.username);
  userHandle$ = this.select((state) => state.user.handle);
  userImage$ = this.select((state) => state.user.image);
  isVerified$ = this.select((state) => state.user.isVerified);
  message$ = this.select((state) => state.message);
  time$ = this.select((state) => state.time);
  date$ = this.select((state) => state.date);
  retweets$ = this.select((state) => state.retweets);
  quotes$ = this.select((state) => state.quotes);
  likes$ = this.select((state) => state.likes);
  hasImage$ = this.select((state) => state.imageStatus.hasImage);
  imageUrl$ = this.select((state) => state.imageStatus).pipe(
    map((imageStatus) => {
      if (imageStatus.hasImage) {
        return imageStatus.url;
      }
      return '';
    }),
  );
  hasQuote$ = this.select((state) => state.quoteStatus.hasQuote);
  quoteUsername$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote) {
        return quoteStatus.user.username;
      }
      return '';
    }),
  );
  quoteUserHandle$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote) {
        return quoteStatus.user.handle;
      }
      return '';
    }),
  );
  quoteUserImage$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote) {
        return quoteStatus.user.image;
      }
      return '';
    }),
  );
  quoteIsVerified$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote) {
        return quoteStatus.user.isVerified;
      }
      return false;
    }),
  );
  quoteDate$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote) {
        return quoteStatus.date;
      }
      return '';
    }),
  );
  quoteMessage$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote) {
        return quoteStatus.message;
      }
      return '';
    }),
  );
  quoteHasImage$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote) {
        return quoteStatus.imageStatus.hasImage;
      }
      return false;
    }),
  );
  quoteImageUrl$ = this.select((state) => state.quoteStatus).pipe(
    map((quoteStatus) => {
      if (quoteStatus.hasQuote && quoteStatus.imageStatus.hasImage) {
        return quoteStatus.imageStatus.url;
      }
      return '';
    }),
  );
  replies$ = this.select((state) => state.replies);

  constructor() {
    super(initialState);
  }

  // #region Updaters
  readonly updateUsername = this.updater((state, username: string) => ({
    ...state,
    user: {
      ...state.user,
      username,
    },
  }));

  readonly updateUserHandle = this.updater((state, handle: string) => ({
    ...state,
    user: {
      ...state.user,
      handle,
    },
  }));

  readonly updateUserImage = this.updater((state, image: string) => ({
    ...state,
    user: {
      ...state.user,
      image,
    },
  }));

  readonly updateIsVerified = this.updater((state, isVerified: boolean) => ({
    ...state,
    user: {
      ...state.user,
      isVerified,
    },
  }));

  readonly updateMessage = this.updater((state, message: string) => ({
    ...state,
    message,
  }));

  readonly updateTime = this.updater((state, time: string) => ({
    ...state,
    time,
  }));

  readonly updateDate = this.updater((state, date: string) => ({
    ...state,
    date,
  }));

  readonly updateRetweets = this.updater((state, retweets: number) => ({
    ...state,
    retweets,
  }));

  readonly updateQuotes = this.updater((state, quotes: number) => ({
    ...state,
    quotes,
  }));

  readonly updateLikes = this.updater((state, likes: number) => ({
    ...state,
    likes,
  }));

  readonly updateImageStatus = this.updater((state, hasImage: boolean) => {
    const imageStatus: ImageStatus = hasImage
      ? { hasImage: true, url: (state.imageStatus as HasImage).url || '' }
      : { hasImage: false };
    return {
      ...state,
      imageStatus,
    };
  });

  readonly updateImageUrl = this.updater((state, url: string) => {
    const imageStatus = state.imageStatus.hasImage
      ? ({ hasImage: true, url } as HasImage)
      : ({ hasImage: false } as NoImage);
    return {
      ...state,
      imageStatus,
    };
  });

  readonly updateQuoteStatus = this.updater((state, hasQuote: boolean) => {
    const quoteStatus: QuoteStatus = hasQuote
      ? ({
          hasQuote: true,
          user: (state.quoteStatus as HasQuote).user || {
            username: '',
            handle: '',
            image: '',
            isVerified: false,
          },
          date: (state.quoteStatus as HasQuote).date || '',
          message: (state.quoteStatus as HasQuote).message || '',
          imageStatus: (state.quoteStatus as HasQuote).imageStatus || { hasImage: false },
        } as HasQuote)
      : ({ hasQuote: false } as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteUsername = this.updater((state, username: string) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({
          ...state.quoteStatus,
          user: { ...state.quoteStatus.user, username },
        } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteUserHandle = this.updater((state, handle: string) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({
          ...state.quoteStatus,
          user: { ...state.quoteStatus.user, handle },
        } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteUserImage = this.updater((state, image: string) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({
          ...state.quoteStatus,
          user: { ...state.quoteStatus.user, image },
        } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteUserIsVerified = this.updater((state, isVerified: boolean) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({
          ...state.quoteStatus,
          user: { ...state.quoteStatus.user, isVerified },
        } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteDate = this.updater((state, date: string) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({ ...state.quoteStatus, date } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteMessage = this.updater((state, message: string) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({ ...state.quoteStatus, message } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteImageStatus = this.updater((state, hasImage: boolean) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({
          ...state.quoteStatus,
          imageStatus: hasImage
            ? { hasImage: true, url: (state.quoteStatus.imageStatus as HasImage).url || '' }
            : { hasImage: false },
        } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateQuoteImageUrl = this.updater((state, url: string) => {
    const quoteStatus: QuoteStatus = state.quoteStatus.hasQuote
      ? ({
          ...state.quoteStatus,
          imageStatus: state.quoteStatus.imageStatus.hasImage
            ? ({ hasImage: true, url } as HasImage)
            : ({ hasImage: false } as NoImage),
        } as HasQuote)
      : (state.quoteStatus as NoQuote);
    return {
      ...state,
      quoteStatus,
    };
  });

  readonly updateReplies = this.updater((state, replies: Reply[]) => ({
    ...state,
    replies,
  }));

  // #endregion
}
