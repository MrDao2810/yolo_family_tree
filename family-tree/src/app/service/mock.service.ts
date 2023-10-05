import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  newsPosts: NewsPost[] = [
    {
      id: '1',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '2',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '3',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '4',
      category: 'Danh nhân họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '5',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '6',
      category: 'Danh nhân họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '7',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '8',
      category: 'Sự kiện và nhân vật',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '9',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '10',
      category: 'Sự kiện và nhân vật',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '11',
      category: 'Danh nhân họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '12',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '13',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '14',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '15',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh Ư',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên ư',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi Ư',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '16',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh Z',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên Z',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi Z',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '17',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh X',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên X',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi X',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '18',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh S',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên S',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi S',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '19',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh D',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên D',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi D',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '20',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh F',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên F',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi F',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '21',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh V',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên V',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi V',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '22',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh C',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên C',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi C',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '23',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh A',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên A',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi A',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '24',
      category: 'Danh nhân họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '25',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '26',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '27',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '28',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh Ư',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên ư',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi Ư',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '29',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh Z',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên Z',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi Z',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '30',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh X',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên X',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi X',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '31',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh S',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên S',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi S',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '32',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh D',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên D',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi D',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '33',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh F',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên F',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi F',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '34',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh V',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên V',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi V',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '35',
      category: 'Lịch sử họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh C',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên C',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi C',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    {
      id: '36',
      category: 'Các cơ sở thờ tự họ Kiều',
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...',
      value: 'Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều với mục ' +
        'đích chữa bệnh hay tâm linh. Tuy nhiên, để hiểu rõ về trầm hương thì phần lớn chỉ những người sành ' +
        'về loại gỗ này mới biết.Trầm hương là cái tên đã khá quen thuộc với người Việt Nam và được sử dụng nhiều ' +
        'với mục đích chữa bệnh hay tâm linh. Trầm hương là phần gỗ chứa nhiều nhựa thơm sinh ra từ thân cây Dó. ' +
        'Khi cây Dó bị tổn thương, cây sẽ tiết ra một loại dầu thơm để chữa lành vết thương và bảo vệ cây khỏi các vi ' +
        'khuẩn, côn trùng từ bên ngoài. Vết thương rỉ nhựa kết hợp với các vi sinh vật và khoáng chất trong đất tạo thành trầm.\n',
      imageNews: '../../../assets/images/news/posts/image_news.png',
      attention: 'Các cây Dó khác dù tuổi đời có trên 100 tuổi nhưng cơ thể cây hoàn toàn khỏe mạnh thì sẽ không có trầm. ' +
        'Và việc khai thác loại cây này là lãng phí vì gỗ dó rất mềm, chất lượng gỗ không tốt nên không có giá trị kinh tế.',
      listComment: [
        {
          name: 'Đào Quỳnh A',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Phạm Tuyên A',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
        {
          name: 'Lại Tươi A',
          avatar: '../../../assets/images/news/posts/avatar_comment.jpg',
          comment: 'Em Thành tư vấn tốt, chu đáo. Em Hoài thiết kế ý tưởng tốt 3d lên thành thật. Em Hùng thi công cẩn thận, nhiệt tình. ',
        },
      ],
    },
    // Thêm bài viết thứ 3
  ];
  constructor() {
    this.newsPosts = this.newsPosts.map(post => {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;

      return {
        ...post,
        time: formattedDate
      };
    });
  }
  getPost(id: string | null): NewsPost | undefined {
    for (let post of this.newsPosts) {
      if (post.id === id) {
        return post;
      }
    }
    return undefined;
  }

  private selectedCategorySource = new BehaviorSubject<string>('');
  selectedCategory$ = this.selectedCategorySource.asObservable();
  filterPostsByCategory(category: string) {
    return this.newsPosts.filter(post => post.category === category);
  }
  // Đổi tên hàm này thành `getNewsPosts`
  getNewsPosts() {
    return this.newsPosts;
  }
  // Hàm cập nhật selectedCategory
  updateSelectedCategory(category: string) {
    this.selectedCategorySource.next(category);
  }
  private playlists: string[] = [
    'https://www.youtube.com/embed/TTyDNCyoUeY',
    // Thêm các liên kết iframe khác tại đây
  ];
  getPlaylists() {
    return this.playlists;
  }
}

export interface CommentDetail {
  name: string,
  avatar: string,
  comment: string,
}
export interface NewsPost {
  id: string,
  category: string,
  title: string,
  time: string,
  image: string,
  content: string,
  value: string,
  imageNews: string,
  attention: string,
  listComment: CommentDetail[],
}
export interface InformationEachPerson {
  name: string, // họ tên
  relationship: string, // mối quan hệ
  dateOfBirth: string, //ngày tháng năm sinh
  yearBirth: string, // năm sinh
  dateOfDeath: string, // ngày tháng năm mất
  yearOld: string, // hưởng thọ
  gender: string, // giới tính
  homeTown: string, // nguyên quán
  holyName: string, // tên thánh
  note: string, // ghi chú
}
export interface Information {
  life: string, // mã
  listPerson: InformationEachPerson[],
}

export interface GenerationInformation{
  generation: string, // đời
  generationsInformation : Information[],
}


