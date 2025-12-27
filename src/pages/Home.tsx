import Hero from '../components/Hero';
import RecentEvents from '../components/RecentEvents';
import EventsCarousel from '../components/EventsCarousel';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="w-full min-h-screen text-white overflow-x-hidden selection:bg-blue-500 selection:text-white">
            <Hero />
            <RecentEvents />
            <EventsCarousel />
            <AboutSection />
            <Footer />
        </main>
    );
};

export default Home;
