import { IScheduleNotification } from "interfaces";

const NotifiesList: IScheduleNotification[] = [
  {
    id: 1,
    author: "Lê Hùng",
    title: "Thông báo tuần 1 tháng 5 2024",
    releaseDate: new Date("2025 05 10 9: 00").toUTCString(),
    content:
      "<p>Tuần 1 tháng 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus eros, mattis id nisl nec, rhoncus lobortis tellus. Quisque ultrices quis metus quis lobortis. Nulla sit amet metus vehicula lacus hendrerit pretium in eget nunc. Aliquam sit amet velit at diam lacinia posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula magna in pulvinar pulvinar. Donec pretium arcu ut mi vestibulum suscipit. Aliquam consectetur, leo quis maximus vulputate, lorem diam sagittis diam, ac vestibulum dolor risus tempus lorem. Duis felis turpis, luctus ac tortor ac, pharetra condimentum odio. Suspendisse gravida justo ac quam pellentesque, sed mollis nunc ullamcorper. Proin convallis tellus ut purus maximus consectetur.</p>",
  },
  {
    id: 2,
    author: "Lê Hùng",
    title: "Thông báo tuần 2 tháng 5 2024",
    releaseDate: new Date("2025 05 17 9: 00").toUTCString(),
    content:
      "<p>Tuần 2 tháng 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus eros, mattis id nisl nec, rhoncus lobortis tellus. Quisque ultrices quis metus quis lobortis. Nulla sit amet metus vehicula lacus hendrerit pretium in eget nunc. Aliquam sit amet velit at diam lacinia posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula magna in pulvinar pulvinar. Donec pretium arcu ut mi vestibulum suscipit. Aliquam consectetur, leo quis maximus vulputate, lorem diam sagittis diam, ac vestibulum dolor risus tempus lorem. Duis felis turpis, luctus ac tortor ac, pharetra condimentum odio. Suspendisse gravida justo ac quam pellentesque, sed mollis nunc ullamcorper. Proin convallis tellus ut purus maximus consectetur.</p>",
  },
  {
    id: 3,
    author: "Lê Hùng",
    title: "Thông báo tuần 3 tháng 5 2024",
    releaseDate: new Date("2025 05 24 9: 00").toUTCString(),
    content:
      "<p>Tuần 3 tháng 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus eros, mattis id nisl nec, rhoncus lobortis tellus. Quisque ultrices quis metus quis lobortis. Nulla sit amet metus vehicula lacus hendrerit pretium in eget nunc. Aliquam sit amet velit at diam lacinia posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula magna in pulvinar pulvinar. Donec pretium arcu ut mi vestibulum suscipit. Aliquam consectetur, leo quis maximus vulputate, lorem diam sagittis diam, ac vestibulum dolor risus tempus lorem. Duis felis turpis, luctus ac tortor ac, pharetra condimentum odio. Suspendisse gravida justo ac quam pellentesque, sed mollis nunc ullamcorper. Proin convallis tellus ut purus maximus consectetur.</p>",
  },
  {
    id: 4,
    author: "Lê Hùng",
    title: "Thông báo tuần 4 tháng 5 2024",
    releaseDate: new Date("2025 05 31 9: 00").toUTCString(),
    content:
      "<p>Tuần 4 tháng 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus eros, mattis id nisl nec, rhoncus lobortis tellus. Quisque ultrices quis metus quis lobortis. Nulla sit amet metus vehicula lacus hendrerit pretium in eget nunc. Aliquam sit amet velit at diam lacinia posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula magna in pulvinar pulvinar. Donec pretium arcu ut mi vestibulum suscipit. Aliquam consectetur, leo quis maximus vulputate, lorem diam sagittis diam, ac vestibulum dolor risus tempus lorem. Duis felis turpis, luctus ac tortor ac, pharetra condimentum odio. Suspendisse gravida justo ac quam pellentesque, sed mollis nunc ullamcorper. Proin convallis tellus ut purus maximus consectetur.</p>",
  },
  {
    id: 5,
    author: "Lê Hùng",
    title: "Thông báo tuần 1 tháng 6 2024",
    releaseDate: new Date("2025 06 06 9: 00").toUTCString(),
    content:
      "<p>Tuần 1 tháng 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus eros, mattis id nisl nec, rhoncus lobortis tellus. Quisque ultrices quis metus quis lobortis. Nulla sit amet metus vehicula lacus hendrerit pretium in eget nunc. Aliquam sit amet velit at diam lacinia posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula magna in pulvinar pulvinar. Donec pretium arcu ut mi vestibulum suscipit. Aliquam consectetur, leo quis maximus vulputate, lorem diam sagittis diam, ac vestibulum dolor risus tempus lorem. Duis felis turpis, luctus ac tortor ac, pharetra condimentum odio. Suspendisse gravida justo ac quam pellentesque, sed mollis nunc ullamcorper. Proin convallis tellus ut purus maximus consectetur.</p>",
  },
  {
    id: 6,
    author: "Lê Hùng",
    title: "Thông báo tuần 2 tháng 6 2024",
    releaseDate: new Date("2025 06 13 9: 00").toUTCString(),
    content:
      "<p>Tuần 2 tháng 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus eros, mattis id nisl nec, rhoncus lobortis tellus. Quisque ultrices quis metus quis lobortis. Nulla sit amet metus vehicula lacus hendrerit pretium in eget nunc. Aliquam sit amet velit at diam lacinia posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula magna in pulvinar pulvinar. Donec pretium arcu ut mi vestibulum suscipit. Aliquam consectetur, leo quis maximus vulputate, lorem diam sagittis diam, ac vestibulum dolor risus tempus lorem. Duis felis turpis, luctus ac tortor ac, pharetra condimentum odio. Suspendisse gravida justo ac quam pellentesque, sed mollis nunc ullamcorper. Proin convallis tellus ut purus maximus consectetur.</p>",
  },
  {
    id: 7,
    author: "Lê Hùng",
    title: "Thông báo tuần 3 tháng 6 2024",
    releaseDate: new Date("2025, 06, 13, 9: 00").toUTCString(),
    content:
      "<p>Tuần 2 tháng 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus eros, mattis id nisl nec, rhoncus lobortis tellus. Quisque ultrices quis metus quis lobortis. Nulla sit amet metus vehicula lacus hendrerit pretium in eget nunc. Aliquam sit amet velit at diam lacinia posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vehicula magna in pulvinar pulvinar. Donec pretium arcu ut mi vestibulum suscipit. Aliquam consectetur, leo quis maximus vulputate, lorem diam sagittis diam, ac vestibulum dolor risus tempus lorem. Duis felis turpis, luctus ac tortor ac, pharetra condimentum odio. Suspendisse gravida justo ac quam pellentesque, sed mollis nunc ullamcorper. Proin convallis tellus ut purus maximus consectetur.</p>",
  },
];

export default NotifiesList;
