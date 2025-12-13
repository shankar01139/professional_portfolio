import { Component, OnInit } from '@angular/core';

interface Link {
  text: string;
  href: string;
}

interface SocialLink {
  iconClass: string; // e.g., 'fab fa-behance' if using FontAwesome
  href: string;
}

@Component({
  selector: 'app-footer', // Corrected selector
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit { // Corrected class name

  // Data matching the image
  email: string = 'pradeepav.off@gmail.com';
  phone: string = '+91 88830 38637';
  copyright: string = `© ${new Date().getFullYear()} Pradeepkumar`;

  // Main navigation links for quick access
  navLinks: Link[] = [
    { text: 'About Me', href: '#about' },
    // Link to the Journey/Experience section, as #skills is not an ID
    { text: 'Experience', href: '#experience' },
    // Link to the main work section
    { text: 'My Works', href: '#works' }, 
    { text: 'Testimonials', href: '#testimonials' },
    // Added Contact link (as you have a contact section)
    { text: 'Connect', href: '#contact' }, 
  ];

  // Assuming use of standard icon libraries like FontAwesome or custom svgs
  socialLinks: SocialLink[] = [
    { iconClass: 'fa-behance', href: 'https://www.behance.net/' },
    { iconClass: 'fa-dribbble', href: 'https://dribbble.com/' }, // Dribbble icon
    { iconClass: 'fa-instagram', href: 'https://www.instagram.com/' },
    { iconClass: 'fa-linkedin-in', href: 'https://www.linkedin.com/' },
  ];

  constructor() { }

  ngOnInit(): void { }

  scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  } else {
      console.error('Target element not found for ID:', id);
  }
}
  scrollToTop(): void {
    // Scrolls the window to the top smoothly
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}