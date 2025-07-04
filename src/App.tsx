import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import RouteTimeline from "./components/sections/RouteTimeline";
import AgentSearch from "./components/sections/AgentSearch";
import AboutUs from "./components/sections/AboutUs";
import Footer from "./components/layout/Footer";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <RouteTimeline />
            <AgentSearch />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default App;
