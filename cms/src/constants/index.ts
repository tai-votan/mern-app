export const DEFAULT_NAME = 'Umi Maxczczczcz';

export const KEY_AUTHORITY_TOKEN = 'authToken';

export const FILTER_BASE = {
  hidden: 'visibility',
};

export const FILTER_BLOGS = {
  ...FILTER_BASE,
  blogId: 'blog',
  tags: 'tagged with',
  authorId: 'author',
};

export const FILTER_HIDDEN = [
  {
    label: 'visible',
    value: true,
  },
  {
    label: 'hidden',
    value: false,
  },
];
