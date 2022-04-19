import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';

import { IAppSection } from '../../interfaces';
import useTranslation from '../../hooks/useTranslation';
import { mergeClassNames } from '../../helpers/styles';

const AboutSection = ({ id }: IAppSection) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-about top-0'}
        className={'bg-brand-medium-blue'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <ContentSwap
          aSideContent={
            <img
              src="/placeholder-1.png"
              className="mx-auto mr-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          }
          bSideContent={
            <>
              <Caption
                hashLabel={t('about', 'subtitle')}
                title={t('about', 'title')}
              />
              <div className={'font-light text-brand-greyed'}>
                {t('about', 'paragraphs').map(
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
              </div>
            </>
          }
        />
      </Hero>
    </section>
  );
};

export default AboutSection;
