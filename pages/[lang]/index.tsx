import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Home from '../../src/components/Templates/Home';
import Layout from '../../src/components/Templates/Layout';

import {
  getLocalizationProps,
  LanguageProvider,
} from '../../src/context/LanguageContext';

import { Localization } from '../../src/translations/types';
import { locales } from '../../src/translations/config';
import MetaTags from '../../src/components/Atoms/MetaTags';
import Head from 'next/head';
import React from 'react';

type IndexPageProps = {
  localization: Localization;
};
const IndexPage: NextPage<IndexPageProps> = ({
  localization,
}: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Hydranet: Combining Bitcoin and DeFi</title>
        <MetaTags />
      </Head>
      <LanguageProvider localization={localization}>
        <Layout>
          <Home />
        </Layout>
      </LanguageProvider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx);
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default IndexPage;
