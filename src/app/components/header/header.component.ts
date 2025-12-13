import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   *
   */
  constructor(private scroller: ViewportScroller) {
    
  }
  navItems = [
    { label: 'Home', link: '#' },
    { label: 'Work', link: '#my-work' },
    { label: 'Experience', link: '#experience' },
    { label: 'Contact', link: '#contact' },
  ];
  
  // State for mobile menu visibility (if needed)
  isMenuOpen: boolean = false; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public scrollToElement(anchor: string): void {
    this.scroller.scrollToAnchor(anchor);
  }
}