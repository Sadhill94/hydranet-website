import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Timeline from '../Molecules/Timeline';

import { IAppSection } from '../../interfaces';
import useTranslation from '../../hooks/useTranslation';

const RoadmapSection = ({ id }: IAppSection) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-roadmap top-0  rotate-y-180'}
        className={'bg-brand-darker-blue'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption
          hashLabel={t('timeline', 'subtitle')}
          title={t('timeline', 'title')}
        />
        <Timeline />
      </Hero>
    </section>
  );
};
export default RoadmapSection;
