import React from 'react';
import { MapPin, Phone, User, Star } from 'lucide-react';
import { Agent } from '../../types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={agent.image} 
            alt={agent.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{agent.name}</h3>
            <div className="flex items-center text-yellow-500 mt-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-sm font-medium">{agent.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-orange-600" />
            {agent.location}
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-orange-600" />
            {agent.phone}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-orange-600" />
            {agent.experience} pengalaman
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-orange-50 rounded-lg">
          <p className="text-sm font-medium text-orange-800">
            Spesialisasi: {agent.speciality}
          </p>
        </div>
        
        <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
          Hubungi Agen
        </button>
      </div>
    </div>
  );
};

export default AgentCard;