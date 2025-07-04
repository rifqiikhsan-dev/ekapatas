import { useState } from "react";
import { Search, X } from "lucide-react";
import { AGENTS_DATA } from "../../data/agents";
import AgentCard from "../ui/AgentCard";

const AgentSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAgents = AGENTS_DATA.filter(
        (agent) =>
            agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            agent.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="agen-resmi" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Agen Resmi</h2>

                    {/* Search Section */}
                    <div className="max-w-2xl mx-auto mb-12" data-aos="zoom-in" data-aos-delay="100">
                        <div className="bg-orange-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Pencarian Agen</h3>
                            <div className="flex gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Masukkan nama kotamu"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg"
                                    />
                                    {searchTerm && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchTerm("")}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agent Recommendation Info */}
                    {!searchTerm && (
                        <div className="max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
                            <div className="bg-gray-50 p-12 rounded-2xl text-center">
                                <div className="w-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <img
                                        src="/assets/images/agen-ekapatas.png"
                                        alt="User Avatar"
                                        className="w-24 object-cover"
                                    />
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Tuliskan nama kotamu dan kami akan merekomendasikan agen terdekat kami di kotamu.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Agent List */}
                {searchTerm && (
                    <>
                        {filteredAgents.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                                {filteredAgents.map((agent, index) => (
                                    <div key={agent.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                        <AgentCard agent={agent} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Tidak ditemukan agen terdekat kami di kotamu.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default AgentSearch;
