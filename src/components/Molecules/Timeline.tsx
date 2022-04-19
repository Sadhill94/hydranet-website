import TimelineItem, { TimelineItemProps } from '../Atoms/TimelineItem';
import useTranslation from '../../hooks/useTranslation';

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto h-full w-full">
      <div className="wrap relative h-full  pl-8 md:overflow-hidden md:p-0">
        <div className="border-2-2 absolute left-0 h-full border border-brand-light-blue md:left-[50%]" />
        {t('timeline', 'items').map(
          (item: TimelineItemProps, index: number) => (
            <TimelineItem
              key={`${Math.random() * 999}-${index}`}
              {...item}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Timeline;
