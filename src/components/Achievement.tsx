import React from 'react';
import { Award } from 'lucide-react';

const Achievement = () => {
  const achievements = [
    {
      year: '2022',
      title: 'ORANGE Wireless Sites',
      description: '60 new wireless sites with microwave links for ORANGE "OMG 100 sites & OMG 80 sites" via HUAWEI Madagascar.'
    },
    {
      year: '2022',
      title: 'Data Center Implementation',
      description: 'Data center equipment installations, five coresites, 1km FTTX connectivity, ten eLTE new sites for the government.'
    },
    {
      year: '2021',
      title: 'MNDPT MTNM Project',
      description: 'Ten new green field and rooftop sites for the MNDPT MTNM Project via HUAWEI Madagascar.'
    },
    {
      year: '2019',
      title: 'AIRTEL Network Modernization',
      description: '47 microwave links implementation for AIRTEL Madagascar "Network Modernization" via NOKIA.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {achievements.map((achievement, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transform hover:scale-105 transition-transform">
          <div className="flex-shrink-0">
            <Award className="w-12 h-12 text-[#9E191E]" />
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-semibold text-[#9E191E]">{achievement.year}</span>
              <h3 className="text-xl font-bold text-[#2F2F39]">{achievement.title}</h3>
            </div>
            <p className="text-gray-600">{achievement.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;