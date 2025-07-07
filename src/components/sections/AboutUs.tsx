import { Shield, Award, Users, Clock } from "lucide-react";
import { Achievement } from "../../types";

const AboutUs = () => {
    const achievements: Achievement[] = [
        { icon: Users, number: "50K+", label: "Penumpang Puas" },
        { icon: Award, number: "15+", label: "Tahun Pengalaman" },
        { icon: Shield, number: "99%", label: "Keamanan Terjamin" },
        { icon: Clock, number: "24/7", label: "Layanan Support" },
    ];

    return (
        <section id="tentang-kami" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                {/* Section Heading */}
                <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Tentang Kami</h2>
                </div>

                {/* Company Info + Bus Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
                    {/* Company Information */}
                    <div
                        className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="flex items-center mb-6">
                            <img
                                src="src/assets/images/logo-ekapatas.png"
                                alt="EKAPATAS Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </div>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p className="text-base md:text-lg">
                                PT. Eka Mira Prima Sentosa (EMPS) berdiri sejak tahun 1971, yang memiliki rute favorit
                                Surabaya - Solo, dan berkembang sampai Yogyakarta, dan kini PT. Eka Mira Prima Sentosa
                                memiliki berbagai macam jurusan ke Jawa Tengah dan juga Jawa Barat.
                            </p>

                            <p className="text-base md:text-lg">
                                Untuk kelas Eksekutif, EMPS menyediakan Hino RN 285 dengan air suspension yang dapat
                                memberikan nilai plus bagi kenyamanan penumpang dalam perjalanan.
                            </p>
                        </div>
                    </div>

                    {/* Bus Image */}
                    <div
                        className="flex justify-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        <img
                            src="src/assets/images/bus-ekapatas.png"
                            alt="EMPS Bus"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
                        />
                    </div>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                        >
                            <achievement.icon className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-orange-600 mx-auto mb-4" />
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                {achievement.number}
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 font-medium">{achievement.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
