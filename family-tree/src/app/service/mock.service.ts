import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  newsPosts: NewsPost[] = [
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    // Thêm bài viết thứ 3
  ];

  constructor() { }
}

export interface NewsPost {
  title: string,
  time: string,
  image: string,
  content: string
}
