import { Language } from '../i18n/translations';

export const localizedPath = (path: string, language: Language) => {
  const clean = path.replace(/^\\/+/, '');
  return import.meta.env.BASE_URL + (language === 'ID' ? 'id/' : 'eng/') + clean;
};
