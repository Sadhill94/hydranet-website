/**
 * When adding a new namespace, you must add it here
 *
 */
export interface ITranslations {
  common: ICommonTranslations;
  landing: ILandingTranslations;
  about: IAboutSectionTranslations;
}

/**
 * Namespaces and key declared for translations
 */

/**
 * Common namespace
 */
export interface ICommonTranslations {
  'coming-soon': string;
  product: string;
  roadmap: string;
  timeline: string;
  done: string;
  'in-progress': string;
  news: string;
  'latest-articles': string;
  'all-right-reserved': string;
}

/**
 * Landing namespace
 */
export interface ILandingTranslations {
  caption: string;
  title: string;
  subtitle: string;
}

/**
 * About namespace
 */
export interface IAboutSectionTranslations {
  subtitle: string;
  title: string;
  'paragraph-1': string;
  'paragraph-2': string;
  'paragraph-3': string;
}
