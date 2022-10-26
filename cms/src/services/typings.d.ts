import { Article, Category } from '@/interfaces';

declare namespace API {
  interface UserInfo {
    user: {
      userName: string;
      id: string;
      firstName: string;
      lastName: string;
      isActive: boolean;
    };
    token: string;
  }

  interface Articles {
    data: {
      list: Article[];
      total: number;
    };
    message: string;
  }

  interface Categories {
    data: {
      list: Category[];
      total: number;
    };
    message: string;
  }
}
