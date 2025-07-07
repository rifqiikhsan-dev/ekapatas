import { MapPin, Calendar, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { useBookingForm } from "../../data/hooks/useBookingForm";
import { DESTINATION_OPTIONS, ORIGIN_OPTIONS, TIME_OPTIONS } from "../../constants/routes";

const Hero = () => {
    const { formData, handleInputChange, handleSubmit } = useBookingForm();

    return (
        <section
            id="beranda"
            className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('src/assets/images/hero-background.png')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 md:px-8 py-20 flex items-center min-h-screen">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div
                            className="text-white text-center lg:text-left"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Perjalanan Nyaman & Aman
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                                Nikmati perjalanan yang terbaik dengan layanan terpercaya, professional, dan kenyamanan
                                modern.
                            </p>
                        </div>

                        {/* Right Content - Booking Form */}
                        <div
                            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-lg mx-auto lg:mx-0"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <form onSubmit={handleSubmit} role="form" className="space-y-6">
                                {/* Origin */}
                                <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
                                    <label className="flex items-center text-gray-700 font-semibold text-sm">
                                        <MapPin className="mr-2 h-4 w-4 text-orange-600" />
                                        Pilih dari keberangkatan
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="origin"
                                            value={formData.origin}
                                            onChange={handleInputChange}
                                            className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg transition-all pr-10"
                                        >
                                            <option value="">Pilih kota asal</option>
                                            {ORIGIN_OPTIONS.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 h-4 w-4 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Destination */}
                                <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
                                    <label className="flex items-center text-gray-700 font-semibold text-sm">
                                        <MapPin className="mr-2 h-4 w-4 text-orange-600" />
                                        Pilih tujuan
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleInputChange}
                                            className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg transition-all pr-10"
                                        >
                                            <option value="">Pilih kota tujuan</option>
                                            {DESTINATION_OPTIONS.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 h-4 w-4 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="space-y-2" data-aos="fade-up" data-aos-delay="500">
                                    <label className="flex items-center text-gray-700 font-semibold text-sm">
                                        <Calendar className="mr-2 h-4 w-4 text-orange-600" />
                                        Pilih tanggal keberangkatan
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all"
                                    />
                                </div>

                                {/* Time */}
                                <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
                                    <label className="flex items-center text-gray-700 font-semibold text-sm">
                                        <Clock className="mr-2 h-4 w-4 text-orange-600" />
                                        Pilih waktu keberangkatan
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg transition-all pr-10"
                                        >
                                            <option value="">Pilih waktu</option>
                                            {TIME_OPTIONS.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 h-4 w-4 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-4 pt-4" data-aos="fade-up" data-aos-delay="700">
                                    <button
                                        type="button"
                                        className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        Cek Tarif Saja
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                                    >
                                        Cari Tiket
                                    </button>
                                </div>

                                {/* Chat Support */}
                                <div
                                    className="mt-6 p-4 bg-orange-50 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2"
                                    data-aos="fade-up"
                                    data-aos-delay="800"
                                >
                                    <div className="flex items-center">
                                        <MessageCircle className="h-5 w-5 text-orange-600 mr-2" />
                                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                                            Chat tiket dan call tarif
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="text-orange-600 hover:text-orange-700 font-semibold text-sm sm:text-base"
                                    >
                                        Hubungi Kami
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
