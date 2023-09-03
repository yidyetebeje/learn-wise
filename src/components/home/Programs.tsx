import React from 'react';
import ProgramCard from './ProgramCard';

export interface ProgramProps {
  name: string;
  price: string;
  property: string;
  templates: string;
  storage: string;
  textcolor: string;
  backgroundcolor: string;
  buttoncolor: string;
}

const programs: ProgramProps[] = [
  {
    name: 'Personal',
    price: '$0.0',
    property: 'For Individuals',
    templates: '30 Templates',
    storage: ' 10 GB',
    textcolor: 'gray',
    backgroundcolor: 'white',
    buttoncolor: 'green',
  },
  {
    name: 'Business',
    price: '$37.99',
    property: 'For Small Businesses',
    templates: '60 Templates',
    storage: ' 60 GB',
    textcolor: 'gray',
    backgroundcolor: 'blue',
    buttoncolor: 'white',
  },
  {
    name: 'Enterprise',
    price: '$57.99',
    property: 'For Large Companies',
    templates: 'unlimited Templates',
    storage: '200 GB',
    textcolor: 'gray',
    backgroundcolor: 'white',
    buttoncolor: 'red',
  },
];

const Programs: React.FC = () => {
  return (
    <div className="mx-auto mb-10 space-y-4">
      <p className="text-xs text-purple-800 text-center">PRICING</p>
      <h1 className="text-4xl text-center font-bold">
        Reasonable & Flexible{' '}
        <span className="text-purple-700">Plans.</span>{' '}
      </h1>
      <p className="text-center text-gray-700">
        The pricing for this product is very reasonable and flexible. You can choose any plan below according to
        your needs.
      </p>
      <div className="flex flex-wrap justify-center">
        {programs.map((program: ProgramProps) => (
          <ProgramCard key={program.name} program={program} />
        ))}
      </div>
    </div>
  );
};

export default Programs;