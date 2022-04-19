import { ITranslations } from '../namepaces';
import { Locale } from '../types';

import en from './en';
import fr from './fr';

const locales: Record<Locale, ITranslations> = {
  en,
  fr,
};

export default locales;
