import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { isLocale, Localization, Locale } from '../translations/types';
import defaultTranslations from '../translations/locales/en/index';
import locales from '../translations/locales';

/**
 * Language Context
 */

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = createContext<ContextProps>({
  localization: {
    locale: 'en', // default lang
    translations: defaultTranslations, // default translations
  },
  setLocale: () => null,
});

/**
 * Language Context: Provider
 * Expose locale and translations
 */
export const LanguageProvider: React.FC<{ localization: Localization }> = ({
  localization,
  children,
}) => {
  const [localizationState, setLocalizationState] = useState({
    locale: localization?.locale,
    translations: localization?.translations,
  });
  const { query } = useRouter();

  useEffect(() => {
    if (
      typeof query.lang === 'string' &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
      });
    }
  }, [query.lang, localizationState]);

  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Getter called on each page, will inject the localization props
 * Each namespace added to the locales will be mapped here (second arg of Object.assign)
 * @param ctx
 */
export const getLocalizationProps = (
  ctx: GetStaticPropsContext<ParsedUrlQuery>
) => {
  const lang: Locale = (ctx.params?.lang as Locale) || 'en';
  const locale = locales[lang];

  const translations = Object.assign(
    {},
    {
      ...locales[lang],
    },
    locale
  );
  return {
    locale: ctx.params?.lang || 'en',
    translations,
  };
};
