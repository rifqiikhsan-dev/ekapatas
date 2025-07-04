import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ROUTES } from "../../constants/routes";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#beranda");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let current = "";

            sections.forEach((section) => {
                const top = section.getBoundingClientRect().top;
                if (top <= 80) {
                    current = section.getAttribute("id") || "";
                }
            });

            setActiveSection(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClass = (href: string) =>
        `${
            activeSection === href ? "text-orange-600 font-semibold" : "text-gray-700"
        } hover:text-orange-600 transition-colors font-medium`;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50" data-aos="fade-down">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center" data-aos="fade-right" data-aos-delay="100">
                        <img
                            src="/assets/images/logo-ekapatas.png"
                            alt="EKAPATAS Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8" data-aos="fade-down" data-aos-delay="200">
                        <a href={ROUTES.HOME} className={getLinkClass(ROUTES.HOME)}>
                            Beranda
                        </a>
                        <a href={ROUTES.VIA_TOL} className={getLinkClass(ROUTES.VIA_TOL)}>
                            Via Tol
                        </a>
                        <a href={ROUTES.AGENT} className={getLinkClass(ROUTES.AGENT)}>
                            Agen Resmi
                        </a>
                        <a href={ROUTES.CONTACT} className={getLinkClass(ROUTES.CONTACT)}>
                            Kontak
                        </a>
                        <a href={ROUTES.LOUNGE} className={getLinkClass(ROUTES.LOUNGE)}>
                            Terminal
                        </a>
                        <a href={ROUTES.ATTACHMENT} className={getLinkClass(ROUTES.ATTACHMENT)}>
                            Lampiran
                        </a>
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4" data-aos="fade-left" data-aos-delay="300">
                        <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                            Masuk
                        </button>
                        <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                            Daftar
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t" data-aos="fade-down">
                        <nav className="flex flex-col py-4 space-y-2">
                            <a href={ROUTES.HOME} className={`px-4 py-2 ${getLinkClass(ROUTES.HOME)}`}>
                                Beranda
                            </a>
                            <a href={ROUTES.VIA_TOL} className={`px-4 py-2 ${getLinkClass(ROUTES.VIA_TOL)}`}>
                                Via Tol
                            </a>
                            <a href={ROUTES.AGENT} className={`px-4 py-2 ${getLinkClass(ROUTES.AGENT)}`}>
                                Agen Resmi
                            </a>
                            <a href={ROUTES.CONTACT} className={`px-4 py-2 ${getLinkClass(ROUTES.CONTACT)}`}>
                                Kontak
                            </a>
                            <a href={ROUTES.LOUNGE} className={`px-4 py-2 ${getLinkClass(ROUTES.LOUNGE)}`}>
                                Terminal
                            </a>
                            <a href={ROUTES.ATTACHMENT} className={`px-4 py-2 ${getLinkClass(ROUTES.ATTACHMENT)}`}>
                                Lampiran
                            </a>
                            <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                                <button className="text-left text-gray-700 hover:text-orange-600 font-medium">
                                    Masuk
                                </button>
                                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 font-medium">
                                    Daftar
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
