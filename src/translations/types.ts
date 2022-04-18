import { locales } from './config';
import { ITranslations } from './namepaces';

export type Locale = typeof locales[number];

export type Localization = {
  locale: Locale;
  translations: ITranslations;
};

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}
