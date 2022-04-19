import Landing from './Landing';
import AboutSection from './AboutSection';
import ProductsSection from './ProductsSection';
import RoadmapSection from './RoadmapSection';
import ArticlesSection from './ArticlesSection';

const Home = () => {
  return (
    <>
      <Landing />
      <AboutSection id={'about'} />
      <ProductsSection id={'products'} />
      <RoadmapSection id={'roadmap'} />
      <ArticlesSection id={'articles'} />
    </>
  );
};
export default Home;
