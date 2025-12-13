import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// ... (Interface ProjectDetail remains the same) ...

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  projectId: string | null = null;
  project: any = null; // Use any for simplicity with placeholder data

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
      if (this.projectId) {
        this.loadProjectDetails(this.projectId);
      }
    });
  }

  loadProjectDetails(id: string): void {
    // --- Placeholder Data Matching Visuals ---
    this.project = {
      id: id,
      title: 'AI Interaction High',
      category: 'UX/UI Design & Prototyping',
      summary: 'A comprehensive case study detailing the process of designing a seamless, dark-themed platform for advanced AI model interaction and configuration.',
      headerImage: 'assets/project-header-bg.jpg', // Placeholder for the top background image
      mockups: [
        { url: 'assets/ai_mockup_main.png', alt: 'Main AI Interaction Screen' },
        { url: 'assets/mobile_app_mockup.png', alt: 'Companion Mobile App' },
      ],
      sections: [
        { 
          title: '01. Goal & Context', 
          content: 'The goal was to move beyond conventional interfaces and deliver a fluid, high-contrast dark experience focused on reducing cognitive load for power users.',
        },
        { 
          title: '02. Wireframes & Flow', 
          content: 'Early stages focused on modularity, allowing users to build complex workflows efficiently. We ensured the mobile experience mirrored the core functionality of the desktop platform.',
        }
        // ... more sections would follow
      ]
    };
  }
}