import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
      <div className="text-[#9E191E] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#2F2F39] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;