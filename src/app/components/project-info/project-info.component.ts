// project-info.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-project-info', // Your existing selector
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent {
  
  // Data for the AI Hub Showcase section
  sectionTitle = 'What is AI Hub?';
  
  // Statement: Note the use of <span> to apply the highlight/color effect via SCSS
  designStatement = 'Designing experiences that ease your <span class="pain-word">pain</span> and interfaces that <span class="color-word">color</span> your world';
  
  // Path to the combined mockup image 
  // IMPORTANT: Ensure this path is correct for your file (e.g., '158349d86951eb57971491c587e5bffeece494f7.jpg')
  mockupImagePath = 'assets/AI_hub_mock.png'; 
  
  // Placeholder for user meta info (optional, but used in the image)
  userName = 'Pradeepkumar';
  userRole = 'UI/UX designer';
  timeTag = 'Weeks';
  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    
    // Check for the element and then scroll
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' // Scrolls the target element to the top of the viewport
      });
    } else {
        console.error(`Target element not found for ID: ${id}`);
    }
  }
}