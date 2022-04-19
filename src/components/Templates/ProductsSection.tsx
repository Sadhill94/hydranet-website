import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';
import Button from '../Atoms/Button';
import { IAppSection } from '../../interfaces';
import useTranslation from '../../hooks/useTranslation';
import { mergeClassNames } from '../../helpers/styles';

const ProductsSection = ({ id }: IAppSection) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-dex top-0 transform rotate-y-180'}
        className={'bg-brand-darkest-blue'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        {/* DEX */}
        <ContentSwap
          side={'right'}
          aSideContent={
            <img
              src="/dex.webp"
              className="mx-auto w-full max-w-sm rounded-lg md:max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg xl:max-w-3xl"
              alt={'dex picture'}
            />
          }
          bSideContent={
            <>
              <Caption
                hashLabel={t('products', 'dex.subtitle')}
                title={t('products', 'dex.title')}
              />
              <div className={'font-light text-brand-greyed'}>
                {t('products', 'dex.paragraphs').map(
                  (paragraph: string, index: number) => (
                    <p
                      key={paragraph}
                      className={mergeClassNames(
                        'font-light text-current',
                        index > 0 ? 'mt-3' : ''
                      )}
                    >
                      {paragraph}
                    </p>
                  )
                )}

                <div className="mt-8">
                  <pre className={'text-center'}>
                    {t('products', 'dex.current-build')}
                  </pre>
                  <div className="mx-auto mt-4 w-48">
                    <Button disabled>
                      <span className="uppercase">
                        {t('common', 'coming-soon')}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <div className="my-12 border border-brand-blue lg:my-20 lg:border-transparent" />
        {/* BRIDGE */}
        <ContentSwap
          side={'left'}
          aSideContent={
            <img
              src="/bridge.svg"
              className="mx-auto mr-auto w-full max-w-xs drop-shadow-xl lg:ml-0 lg:mr-auto lg:max-w-md"
              alt={'bridge product'}
            />
          }
          bSideContent={
            <>
              <Caption
                hashLabel={`${t('products', 'bridge.subtitle')} - ${t(
                  'common',
                  'coming-soon'
                )}`}
                title={t('products', 'bridge.title')}
              />
              <div className={'font-light text-brand-greyed'}>
                {t('products', 'bridge.paragraphs').map(
                  (paragraph: string, index: number) => (
                    <p
                      key={paragraph}
                      className={mergeClassNames(
                        'font-light text-current',
                        index > 0 ? 'mt-3' : ''
                      )}
                    >
                      {paragraph}
                    </p>
                  )
                )}
                <div className="mx-auto mt-8 w-48 text-center lg:ml-0">
                  <Button disabled>
                    <span className="uppercase">
                      {t('common', 'coming-soon')}
                    </span>
                  </Button>
                </div>
              </div>
            </>
          }
        />
      </Hero>
    </section>
  );
};
export default ProductsSection;
