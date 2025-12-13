import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit { // ⬅️ ADD OnInit interface

  name = 'Pradeep Kumar K';
  role = 'UI/UX Designer';
  
  // You can define the greeting text here too:
  greeting: string = "Hey, I am"; 

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here if needed later
  }

  /**
   * Programmatically scrolls the page to the element matching the provided ID.
   * This is used by the "Scroll Down" indicator to navigate to the next section (#about).
   * @param id The ID of the target section (e.g., 'about').
   */
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