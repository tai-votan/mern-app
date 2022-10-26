import { request } from '@umijs/max';
import { API } from '@/services/typings';

export async function fetchUserInfo(options?: { [key: string]: any }) {
  return request<API.UserInfo>(`/user`, {
    ...(options || {}),
  });
}
