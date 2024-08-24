import type { NextPage } from "next";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import './globals.css'
import { LanguageProvider } from './context/LanguageContext';
import ExperienceSection from "./components/Experiences";

const Home: NextPage = () => {
    return (
        <div>
            <LanguageProvider>
                <Header />
                <main className="p-4">
                    {/* <h2 className="text-xl">Bem-vindo ao meu portfólio!</h2> */}
                    <HeroSection />
                    <ExperienceSection />
                </main>
            </ LanguageProvider>
        </div>
    );
};

export default Home;