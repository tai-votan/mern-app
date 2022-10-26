import { defineConfig } from '@umijs/max';

const { API_URL } = process.env;

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  title: '@umijs/max',
  layout: {},
  locale: {
    default: 'vi-VN',
  },
  define: {
    API_URL,
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      icon: 'StockOutlined',
      component: './Home',
    },
    {
      name: 'blogs',
      path: '/blogs',
      icon: 'HighlightOutlined',
      routes: [
        {
          path: '/blogs/add',
          component: './add-blog',
        },
        {
          path: '/blogs/add-category',
          component: './add-blog',
        },
        {
          name: 'articles',
          path: '/blogs/articles',
          component: './blog',
        },
        {
          name: 'categories',
          path: '/blogs/categories',
          component: './category',
        },
      ],
    },
    {
      name: 'pages',
      path: '/pages',
      icon: 'CopyOutlined',
      routes: [
        {
          path: '/pages',
          component: './page',
        },
        {
          name: 'add',
          path: '/pages/add',
          component: './add-page',
          hideInMenu: true,
        },
        {
          path: '/pages/:id',
          component: './page',
        },
      ],
    },
    {
      name: 'accounts',
      path: '/accounts',
      icon: 'UsergroupAddOutlined',
      component: './account',
    },
    {
      name: 'access',
      path: '/access',
      icon: 'KeyOutlined',
      component: './Access',
    },
  ],

  npmClient: 'yarn',
});
