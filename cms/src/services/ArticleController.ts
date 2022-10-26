import { request } from '@umijs/max';
import { API } from '@/services/typings';

export async function fetchAllArticle(options?: { [key: string]: any }) {
  return request<API.Articles>(`/articles`, {
    ...(options || {}),
  });
}
