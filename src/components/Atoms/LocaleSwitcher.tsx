import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { locales } from '../../translations/config';
import useTranslation from '../../hooks/useTranslation';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { t, locale } = useTranslation();

  const handleLocaleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const targetLang = e.target.value;
      const availablesLocales = new RegExp(`^/(${locales.join('|')})`);

      router.push(
        router.pathname,
        router.asPath.replace(availablesLocales, `/${targetLang}`)
      );
    },
    [router]
  );
  return (
    <div>
      <label className="language-switcher">
        <select onChange={handleLocaleChange} defaultValue={locale}>
          {locales.map((el, i) => (
            <option value={el} key={i}>
              {el}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LocaleSwitcher;
