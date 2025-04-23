
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  linkTo,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className="h-14 w-14 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold text-placement-dark mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Button asChild className="w-full">
        <Link to={linkTo}>Learn More</Link>
      </Button>
    </div>
  );
};

export default FeatureCard;
