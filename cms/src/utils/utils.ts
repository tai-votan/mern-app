export function stripHTML(str = ''): string {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/ +/g, ' ')
    .replaceAll('&nbsp;', ' ')
    .trim();
}

export function removeUnicode(str: string): string {
  return stripHTML(str)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd');
}

export function toSlug(str: string): string {
  return removeUnicode(str)
    .toLowerCase()
    .replace(/([^0-9a-z-\s])/g, '-')
    .replace(/(\s+)/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateWords(
  str: string,
  options?: { words?: number; widthSuffix?: boolean },
): string {
  if (!str) return '';
  const { words = 0, widthSuffix = false } = options || {};
  const arrayWords = stripHTML(str).trim().split(' ');
  if (widthSuffix) arrayWords.push('...');
  return arrayWords.splice(0, words).join(' ');
}
