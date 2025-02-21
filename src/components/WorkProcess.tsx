import React from 'react';
import { ClipboardList, HandshakeIcon, Truck, PlayCircle, CheckCircle2, Send, HeadphonesIcon } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: 'Needs Analysis',
      description: 'Technical and financial analysis'
    },
    {
      icon: <HandshakeIcon className="w-8 h-8" />,
      title: 'Negotiation',
      description: 'Financial validation and contract signing'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Logistics',
      description: 'Planning, resource allocation, and material preparation'
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: 'Execution & Monitoring',
      description: 'Supervision and progress reporting'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Pre-Delivery Check',
      description: 'On-site testing and finalization'
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: 'Delivery',
      description: 'Service activation and final report submission'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Customer Service',
      description: 'Ongoing support and assistance'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
          <div className="absolute top-4 right-4 w-8 h-8 bg-[#9E191E] rounded-full flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
          <div className="text-[#9E191E] mb-4">
            {step.icon}
          </div>
          <h3 className="text-lg font-bold text-[#2F2F39] mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkProcess;