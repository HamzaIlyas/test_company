
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  photoUrl: string;
  name: string;
  title: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  imageUrl: string;
  technologies: string[];
}
