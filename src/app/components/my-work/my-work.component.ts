import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  category: string;
  details: string;
  imagePlaceholder: string;
  size: 1 | 2; // 1 = normal width, 2 = wide width
}

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Mobile App Mockup',
      category: 'Mobile App',
      details: 'AI Solutions for Modern Businesses',
      imagePlaceholder: 'Mobile App Mockup',
      size: 1 // Normal card
    },
    {
      id: 2,
      title: 'AI Interaction Hub', 
      category: 'UI/UX Design',
      details: 'Website Design for AI-Driven Business Solutions', 
      imagePlaceholder: 'AI Interaction Hub Mockup',
      size: 2 // Wide card
    },
    {
      id: 3,
      title: 'AI Interaction Hub', 
      category: 'UI/UX Design',
      details: 'Website Design for AI-Driven Business Solutions', 
      imagePlaceholder: 'AI Interaction Hub Mockup',
      size: 2 // Wide card
    },
    {
      id: 4,
      title: 'Voice Assistant UI',
      category: 'Voice Agents',
      details: 'Voice Design for AI-Driven Business Solutions',
      imagePlaceholder: 'Voice Assistant UI',
      size: 1 // Normal card
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'SaaS Platform',
      details: 'Streamlining customer experience through smart dashboards.',
      imagePlaceholder: 'SaaS Dashboard Mockup',
      size: 1 
    },
    {
      id: 6,
      title: 'Voice Assistant UI',
      category: 'Voice Agents',
      details: 'Voice Design for AI-Driven Business Solutions',
      imagePlaceholder: 'Voice Assistant UI',
      size: 1 // Normal card
    },
    {
      id: 7,
      title: 'Voice Assistant UI',
      category: 'Voice Agents',
      details: 'Voice Design for AI-Driven Business Solutions',
      imagePlaceholder: 'Voice Assistant UI',
      size: 1 // Normal card
    }
  ];
}