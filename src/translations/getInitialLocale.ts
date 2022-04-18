import { defaultLocale } from './config';

import { Locale, isLocale } from './types';

export function getInitialLocale(): Locale {
  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting;
  }
  return defaultLocale;
}
