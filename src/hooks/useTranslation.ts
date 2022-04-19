import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ITranslations } from '../translations/namepaces';

export default function useTranslation() {
  const { localization } = useContext(LanguageContext);

  /**
   * Allow to access nested keys translations
   * @param object the translation object
   * @param value the nested keys
   */
  //@ts-ignore
  function getNestedTranslation(object, value: string) {
    return value.split('.').reduce((acc, curr) => acc[curr], object);
  }

  function t(namespace: keyof ITranslations, key: string) {
    if (!namespace || !key) {
      console.warn(
        'Namespace or key not provided for the translation',
        namespace,
        key
      );
      return '';
    }

    // check if nested keys are passed
    // eg: x.y // x.y.z
    if (key.indexOf('.') !== -1) {
      const value = getNestedTranslation(
        localization.translations?.[namespace],
        key
      );
      if (!value) {
        console.warn(
          `Translation '${key}' for locale '${localization.locale}' not found.`
        );
        return '';
      }
      return value;
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
