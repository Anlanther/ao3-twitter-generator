import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, take } from 'rxjs';
import { HasImage } from '../models/image-status.model';
import { HasQuote } from '../models/quote-status.model';
import { Reply } from '../models/reply.model';
import { TwitterForm, TwitterFormKey, TwitterFormReply } from '../models/twitter-form.model';
import { AppStore } from '../store/app-store';

@Component({
  selector: 'app-form-menu',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-menu.html',
  styleUrl: './form-menu.scss',
})
export class FormMenu {
  private fb = inject(FormBuilder);
  private appStore = inject(AppStore);
  private destroyRef = inject(DestroyRef);

  form!: FormGroup<TwitterForm>;
  protected FormArray = FormArray;

  get repliesArray(): FormArray {
    return this.form.get('replies') as FormArray;
  }

  private createReplyFormGroup(): FormGroup<TwitterFormReply> {
    return this.fb.nonNullable.group({
      userIcon: [''],
      userName: [''],
      userHandle: [''],
      isVerified: [false],
      replyTo: [''],
      date: [''],
      message: [''],
      replyNumber: [0],
      shareNumber: [0],
      likeNumber: [0],
      hasImage: [false],
      imageUrl: [''],
    });
  }

  addReply(): void {
    const repliesArray = this.form.get('replies') as FormArray;
    repliesArray.push(this.createReplyFormGroup());
  }

  removeReply(index: number): void {
    const repliesArray = this.form.get('replies') as FormArray;
    repliesArray.removeAt(index);
  }

  private subscribeToReplyChanges(): void {
    const repliesArray = this.form.get('replies') as FormArray<FormGroup<TwitterFormReply>>;
    repliesArray.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(300))
      .subscribe((replies) => {
        const convertedReplies = replies.map((reply, index: number) => {
          const r: Reply = {
            user: {
              username: reply.userName ?? '',
              handle: reply.userHandle ?? '',
              image: reply.userIcon ?? '',
              isVerified: reply.isVerified ?? false,
            },
            message: reply.message ?? '',
            replyNumber: reply.replyNumber ?? 0,
            shareNumber: reply.shareNumber ?? 0,
            likeNumber: reply.likeNumber ?? 0,
            date: reply.date ?? '',
            imageStatus: {
              hasImage: reply.hasImage ?? false,
              url: reply.hasImage ? (reply.imageUrl ?? '') : '',
            },
            replyTo: reply.replyTo ?? '',
          };
          return r;
        });

        this.appStore.updateReplies(convertedReplies);
      });
  }

  updateMap: Record<TwitterFormKey, (value: any) => void> = {
    userIcon: (value: string) => this.appStore.updateUserImage(value),
    userName: (value: string) => this.appStore.updateUsername(value),
    userHandle: (value: string) => this.appStore.updateUserHandle(value),
    isVerified: (value: boolean) => this.appStore.updateIsVerified(value),
    message: (value: string) => this.appStore.updateMessage(value),
    time: (value: string) => this.appStore.updateTime(value),
    date: (value: string) => this.appStore.updateDate(value),
    retweets: (value: number) => this.appStore.updateRetweets(value),
    quotes: (value: number) => this.appStore.updateQuotes(value),
    likes: (value: number) => this.appStore.updateLikes(value),
    hasImage: (value: boolean) => this.appStore.updateImageStatus(value),
    imageUrl: (value: string) => this.appStore.updateImageUrl(value),
    hasQuote: (value: boolean) => this.appStore.updateQuoteStatus(value),
    quoteUserIcon: (value: string) => this.appStore.updateQuoteUserImage(value),
    quoteUserName: (value: string) => this.appStore.updateQuoteUsername(value),
    quoteUserHandle: (value: string) => this.appStore.updateQuoteUserHandle(value),
    quoteTimestamp: (value: string) => this.appStore.updateQuoteDate(value),
    quoteContent: (value: string) => this.appStore.updateQuoteMessage(value),
    quoteHasImage: (value: boolean) => this.appStore.updateQuoteImageStatus(value),
    quoteImage: (value: string) => this.appStore.updateQuoteImageUrl(value),
    quoteIsVerified: (value: boolean) => this.appStore.updateQuoteUserIsVerified(value),
  };

  constructor() {
    this.appStore.store$.pipe(take(1)).subscribe((state) => {
      this.form = this.fb.nonNullable.group({
        userIcon: [state.user.image],
        userName: [state.user.username],
        userHandle: [state.user.handle],
        isVerified: [state.user.isVerified],
        message: [state.message],
        time: [state.time],
        date: [state.date],
        retweets: [state.retweets],
        quotes: [state.quotes],
        likes: [state.likes],
        hasImage: [state.imageStatus.hasImage],
        imageUrl: [state.imageStatus.hasImage ? state.imageStatus.url : ''],
        hasQuote: [state.quoteStatus.hasQuote],
        quoteUserIcon: [
          state.quoteStatus.hasQuote ? (state.quoteStatus as HasQuote).user.image : '',
        ],
        quoteUserName: [
          state.quoteStatus.hasQuote ? (state.quoteStatus as HasQuote).user.username : '',
        ],
        quoteUserHandle: [
          state.quoteStatus.hasQuote ? (state.quoteStatus as HasQuote).user.handle : '',
        ],
        quoteTimestamp: [state.quoteStatus.hasQuote ? (state.quoteStatus as HasQuote).date : ''],
        quoteContent: [state.quoteStatus.hasQuote ? (state.quoteStatus as HasQuote).message : ''],
        quoteHasImage: [
          state.quoteStatus.hasQuote ? (state.quoteStatus as HasQuote).imageStatus.hasImage : false,
        ],
        quoteImage: [
          state.quoteStatus.hasQuote
            ? ((state.quoteStatus as HasQuote).imageStatus as HasImage).url
            : '',
        ],
        quoteIsVerified: [
          state.quoteStatus.hasQuote ? (state.quoteStatus as HasQuote).user.isVerified : false,
        ],
        replies: this.fb.array(
          state.replies.map((reply) =>
            this.fb.nonNullable.group({
              userIcon: [reply.user.image],
              userName: [reply.user.username],
              userHandle: [reply.user.handle],
              replyTo: [reply.replyTo],
              isVerified: [reply.user.isVerified],
              message: [reply.message],
              replyNumber: [reply.replyNumber],
              shareNumber: [reply.shareNumber],
              likeNumber: [reply.likeNumber],
              date: [reply.date],
              hasImage: [reply.imageStatus.hasImage],
              imageUrl: [reply.imageStatus.hasImage ? (reply.imageStatus as HasImage).url : ''],
            }),
          ),
        ),
      });

      this.form.valueChanges
        .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(300))
        .subscribe((value) => {
          for (const key in value) {
            if (this.updateMap[key as TwitterFormKey]) {
              this.updateMap[key as TwitterFormKey](value[key as TwitterFormKey]);
            }
          }
        });

      this.subscribeToReplyChanges();
    });
  }
}
