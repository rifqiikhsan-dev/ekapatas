import { Clock } from "lucide-react";
import { ROUTE_STOPS } from "../../data/routes";

const RouteTimeline = () => {
    return (
        <section id="via-tol" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Lewat Jalur Tol</h2>
                    <p className="text-lg text-gray-600 font-bold">Rute Surabaya - Solo (PP) Full Tol</p>
                    <p className="text-lg text-gray-600 mb-2">
                        Perjalanan langsung tanpa turun penumpang, kecuali di titik-titik berikut:
                    </p>

                    {/* Route Features */}
                    <div
                        className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="700"
                    >
                        {["Terminal Surabaya", "Terminal Solo", "Terminal Yogyakarta", "Terminal Magelang"].map(
                            (feature, index) => (
                                <div key={index} className="text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm">
                                    • {feature}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-300"></div>

                    {/* Route Stops */}
                    <div className="space-y-16">
                        {ROUTE_STOPS.map((stop, index) => (
                            <div key={stop.id} className="relative" data-aos="fade-up" data-aos-delay={index * 200}>
                                {/* Timeline Point */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                                            stop.isActive ? "bg-orange-600" : "bg-gray-400"
                                        }`}
                                    >
                                        {stop.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <div
                                    className={`grid md:grid-cols-2 gap-8 items-center ${
                                        index % 2 === 0 ? "" : "md:grid-flow-col-dense"
                                    }`}
                                >
                                    {/* Image */}
                                    <div
                                        className={index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 200 + 100}
                                    >
                                        <img
                                            src={stop.image}
                                            alt={stop.city}
                                            className="w-full h-64 object-cover rounded-xl shadow-lg"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div
                                        className={index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:col-start-1"}
                                        data-aos="fade-left"
                                        data-aos-delay={index * 200 + 200}
                                    >
                                        <div className="bg-white p-6 rounded-xl shadow-lg">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{stop.city}</h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed">{stop.description}</p>
                                            <div className="flex items-center text-orange-600">
                                                <Clock className="h-4 w-4 mr-2" />
                                                <span className="text-sm font-medium">Estimasi 2-3 jam perjalanan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16" data-aos="zoom-in-up" data-aos-delay="200">
                    <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                        Selengkapnya
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RouteTimeline;
