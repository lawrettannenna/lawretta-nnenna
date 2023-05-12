import Banner from './modules/banner/Banner';
import ProjectsBanner from './modules/banner/ProjectsBanner';
import ToolsBanner from './modules/banner/ToolsBanner';
import ToolCard from './modules/Cards/ToolCard';
import Footer from './modules/Footer/Footer';
import Hero from './modules/hero/Hero';
import Navbar from './modules/navigation/Navbar';
import NavigationComponent from './modules/navigation/NavigationComponent';
import ProjectCard from './modules/projects/cards/ProjectCard';
import { EditBannerProvider } from './providers/ExitBannerProvider';

const Home: React.FC = () => {
  return (
    <EditBannerProvider>
      <Banner />
      <Navbar />
      <Hero />
      <ToolsBanner />
      <Footer />
      <ToolCard />
    </EditBannerProvider>
  );
};

export default Home;