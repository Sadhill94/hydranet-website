import React from 'react';

import { useRedirect } from '../src/hooks/useRedirect';

/**
 * This page is only used for redirect to the visitor browser language (if supported, otherwise the default is 'en')
 * NextJs lack of motivation to fully support the i18n module for SSG(next export) doesn't allow to have / as english and /{locale} for others
 * Each one of them have to be under /{locale}
 * Vercel, if you read this, fuck you.
 * Another point, after gathering infos, it is shown that, having a multi lingual website that ends with the /{locale} is better for SEO
 * @constructor
 */
const Index: React.FC = () => {
  useRedirect();
  return <></>;
};

export default Index;
