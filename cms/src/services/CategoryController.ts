import { request } from '@umijs/max';
import { API } from '@/services/typings';

export async function fetchCategories(options?: { [key: string]: any }) {
  return request<API.Categories>(`/categories`, {
    ...(options || {}),
  });
}
