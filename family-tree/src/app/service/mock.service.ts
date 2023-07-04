import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  newsPosts: NewsPost[] = [
    {
      id: '1',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '2',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '3',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '4',
      category: 'Danh nhân họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '5',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '6',
      category: 'Danh nhân họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '7',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '8',
      category: 'Sự kiện và nhân vật',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '9',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '10',
      category: 'Sự kiện và nhân vật',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '11',
      category: 'Danh nhân họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '12',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '13',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '14',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '15',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '16',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '17',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '18',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '19',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '20',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '21',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '22',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      id: '23',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    // Thêm bài viết thứ 3
  ];

  constructor() { }

  getPost(id: string | null): NewsPost | undefined {
    for (let post of this.newsPosts) {
      if (post.id === id) {
        return post;
      }
    }
    return undefined;
  }

}

export interface NewsPost {
  id: string,
  category: string,
  title: string,
  time: string,
  image: string,
  content: string
}
