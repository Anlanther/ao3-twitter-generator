import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface TwitterFormReply {
  userIcon: FormControl<string>;
  userName: FormControl<string>;
  userHandle: FormControl<string>;
  isVerified: FormControl<boolean>;
  replyTo: FormControl<string>;
  date: FormControl<string>;
  message: FormControl<string>;
  replyNumber: FormControl<number>;
  shareNumber: FormControl<number>;
  likeNumber: FormControl<number>;
  hasImage: FormControl<boolean>;
  imageUrl: FormControl<string>;
}

export interface TwitterForm {
  userIcon: FormControl<string>;
  userName: FormControl<string>;
  userHandle: FormControl<string>;
  isVerified: FormControl<boolean>;
  message: FormControl<string>;
  time: FormControl<string>;
  date: FormControl<string>;
  retweets: FormControl<number>;
  quotes: FormControl<number>;
  likes: FormControl<number>;

  hasImage: FormControl<boolean>;
  imageUrl: FormControl<string>;

  hasQuote: FormControl<boolean>;
  quoteUserIcon: FormControl<string>;
  quoteUserName: FormControl<string>;
  quoteUserHandle: FormControl<string>;
  quoteTimestamp: FormControl<string>;
  quoteContent: FormControl<string>;
  quoteHasImage: FormControl<boolean>;
  quoteImage: FormControl<string>;
  quoteIsVerified: FormControl<boolean>;

  replies: FormArray<FormGroup<TwitterFormReply>>;
}

// twitter form keys
export type TwitterFormKey = Exclude<keyof TwitterForm, 'replies'>;
