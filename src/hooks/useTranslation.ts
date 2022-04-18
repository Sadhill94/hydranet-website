import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ITranslations } from '../translations/types';

export default function useTranslation() {
  const { localization } = useContext(LanguageContext);

  function t(namespace: keyof ITranslations, key: string) {
    if (!namespace || !key) {
      console.warn(
        'Namespace or key not provided for the translation',
        namespace,
        key
      );
      return '';
    }
    // @ts-ignore TODO type to allow dynamic referencing
    if (!localization.translations?.[namespace]?.[key]) {
      console.warn(
        `Translation '${key}' for locale '${localization.locale}' not found.`
      );
    }
    // @ts-ignore TODO type to allow dynamic referencing
    return localization.translations?.[namespace]?.[key] || '';
  }
  return {
    t,
    locale: localization.locale,
  };
}
