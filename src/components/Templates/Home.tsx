import Landing from './Landing';
import AboutSection from './AboutSection';
import ProductsSection from './ProductsSection';
import RoadmapSection from './RoadmapSection';
import ArticlesSection from './ArticlesSection';
import useTranslation from '../../hooks/useTranslation';
import LocaleSwitcher from '../Atoms/LocaleSwitcher';

const Home = () => {
  const { t, locale } = useTranslation();
  return (
    <>
      <Landing />
      <LocaleSwitcher />

      <AboutSection id={'about'} />
      <ProductsSection id={'products'} />
      <RoadmapSection id={'roadmap'} />
      <ArticlesSection id={'articles'} />
    </>
  );
};
export default Home;
