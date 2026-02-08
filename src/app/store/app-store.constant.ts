import { AppState } from './app-state.model';

export const initialState: AppState = {
  user: {
    handle: 'Example Name',
    username: 'exampleuser',
    image: 'https://i.imgur.com/Q31haWS.jpg',
    isVerified: true,
  },
  message: 'This is an example tweet.',
  date: 'Jan 1, 2024',
  time: '12:00 PM',
  imageStatus: {
    hasImage: true,
    url: 'https://scx2.b-cdn.net/gfx/news/hires/2019/donkey.jpg',
  },
  retweets: 0,
  quotes: 0,
  likes: 0,
  quoteStatus: {
    hasQuote: true,
    user: {
      handle: 'quoteuser',
      username: 'quote user',
      image: 'https://i.imgur.com/D0aVIAd.png',
      isVerified: false,
    },
    date: 'Sept 5',
    message: "I'm donkey!",
    imageStatus: {
      hasImage: true,
      url: 'https://i.postimg.cc/Jzz3jRyF/chains-breaking-meme.jpg',
    },
  },
  replies: [
    {
      user: {
        handle: 'replyuser',
        username: 'reply user',
        image: 'https://i.postimg.cc/JhH0ZFRJ/lil-duck-thing-with-knife.jpg',
        isVerified: false,
      },
      imageStatus: {
        hasImage: true,
        url: 'https://media1.tenor.com/images/434bedd934f43e68f4d5392ba78174f8/tenor.gif',
      },
      date: 'Jan 2, 2024',
      message: 'This is a reply to the example tweet.',
      replyNumber: 0,
      shareNumber: 0,
      likeNumber: 0,
      replyTo: 'exampleuser',
    },
  ],
};
