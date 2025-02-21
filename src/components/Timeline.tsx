import React from 'react';
import { ChevronRight } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2019',
      description: '47 microwave links implemented for AIRTEL MADAGASCAR through NOKIA.'
    },
    {
      year: '2021',
      description: 'Ten new sites built (green field, rooftop) for MNDPT MTNM Project via HUAWEI Madagascar.'
    },
    {
      year: '2022',
      description: 'Data center equipment installation, five coresites, 1km FTTX connectivity, and eLTE new sites.'
    },
    {
      year: '2023',
      description: 'Continued expansion and innovation in telecommunication and renewable energy.'
    }
  ];

  return (
    <div className="relative">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex mb-8 last:mb-0">
          <div className="flex flex-col items-center mr-4">
            <div className="w-12 h-12 bg-[#9E191E] rounded-full flex items-center justify-center text-white font-bold">
              {milestone.year.slice(2)}
            </div>
            {index !== milestones.length - 1 && (
              <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
            )}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex-1 transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-[#2F2F39] mb-2">{milestone.year}</h3>
            <p className="text-gray-600">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;