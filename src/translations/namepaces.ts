/**
 * When adding a new namespace, you must add it here
 *
 */
export interface ITranslations {
  common: ICommonTranslations;
  landing: ILandingTranslations;
  about: IAboutSectionTranslations;
  products: IProductsSectionTranslations;
  timeline: ITimelineSectionTranslations;
  articles: IArticlesSectionTranslations;
  navbar: INavbarLinksTranslations;
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
  paragraphs: Array<string>;
}

/**
 * Products namespace
 */
export interface IProductsSectionTranslations {
  subtitle: string;
  title: string;
  paragraphs: Array<string>;
  'current-build'?: string;
}

/**
 * Timeline namespace
 */
export interface ITimelineSectionTranslations {
  subtitle: string;
  title: string;
  items: Array<ITimelineItemTranslation>;
}

interface ITimelineItemTranslation {
  title: string;
  status: string;
  body: Array<string>;
}

/**
 * Articles namespace
 */
export interface IArticlesSectionTranslations {
  title: string;
  subtitle: string;
  'error-fetch': string;
}

/**
 * Navbar links namespace
 */
export interface INavbarLinksTranslations {
  products: string;
  roadmap: string;
  news: string;
  docs: string;
  voting: string;
  buy: string;
  'launch-app': string;
}
