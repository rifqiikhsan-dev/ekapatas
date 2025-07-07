import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
                        <div className="bg-white text-orange-600 px-4 py-2 rounded font-bold text-xl inline-block mb-4">
                            <div className="flex items-center">
                                <img
                                    src="src/assets/images/logo-ekapatas.png"
                                    alt="EKAPATAS Logo"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">PT. Eka Mitra Prima Sentosa</h3>
                        <p className="text-orange-100 mb-4 leading-relaxed">
                            Operator Travel terbaik ke 10 dengan melayani rute Surabaya - Solo - Yogyakarta
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-6 w-6 hover:text-orange-200 cursor-pointer transition-colors" />
                            <Instagram className="h-6 w-6 hover:text-orange-200 cursor-pointer transition-colors" />
                            <Youtube className="h-6 w-6 hover:text-orange-200 cursor-pointer transition-colors" />
                            <MessageCircle className="h-6 w-6 hover:text-orange-200 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Support */}
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        <h3 className="text-xl font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-orange-100">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Bantuan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Terms & Conditions */}
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <h3 className="text-xl font-semibold mb-4">Syarat & Ketentuan</h3>
                        <ul className="space-y-2 text-orange-100">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Kebijakan Privasi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Syarat Layanan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Kebijakan Refund
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                        <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
                        <div className="space-y-3 text-orange-100">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                                <span>+62 31 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                                <span>info@emps.co.id</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                                <span>Jl. Raya Surabaya-Solo No. 123, Surabaya, Jawa Timur 60123</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-orange-400 mt-12 pt-8 text-center text-orange-100">
                    <p>&copy; 2025 PT. Eka Mitra Prima Sentosa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
