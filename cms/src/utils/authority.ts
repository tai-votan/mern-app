import { KEY_AUTHORITY_TOKEN } from '@/constants';

function checkNullStorage(str: string | null): string | null {
  if (['null', '', 'undefined', null].includes(str)) {
    return null;
  }
  return str;
}

export function setAuthToken(token: string) {
  if (!token) return;
  localStorage.setItem(KEY_AUTHORITY_TOKEN, token);
}

export function getAuthToken(): string | null {
  const token = localStorage.getItem(KEY_AUTHORITY_TOKEN);
  return checkNullStorage(token);
}

export function removeAuthToken() {
  localStorage.removeItem(KEY_AUTHORITY_TOKEN);
}
