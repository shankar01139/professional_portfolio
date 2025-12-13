import { 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  AfterViewChecked 
} from '@angular/core';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  photoUrl: string; // URL for the large main image
  thumbUrl: string; // URL for the small sidebar thumbnail
  highlights: string[]; 
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
// Implement AfterViewChecked to trigger scroll calculation after DOM renders the active state
export class TestimonialComponent implements OnInit, AfterViewChecked { 

  // --- ViewChild References for Scrolling ---
  @ViewChild('photoWindow') photoWindow!: ElementRef;
  @ViewChild('photoList') photoList!: ElementRef;
  
  // Property to track the index state and prevent infinite scroll loops
  private lastIndex: number = 2; 

  // Current index of the testimonial being displayed
  currentIndex: number = 2; 

  testimonials: TestimonialItem[] = [
    // Placeholder data
    {
      quote: "The team's strategic vision has been instrumental in refining our product roadmap. Their dedication to user experience is unmatched.",
      author: "Priya Sharma",
      role: "VP of Digital Transformation",
      company: "TechCorp",
      photoUrl: 'assets/testimonials/photo.png',
      thumbUrl: 'assets/testimonials/thumb.png',
      highlights: ['strategic vision', 'product roadmap', 'user experience']
    },
    {
      quote: "Working with them was an absolute pleasure. They delivered beyond expectations, providing a solid foundation for our global expansion.",
      author: "Amit Patel",
      role: "Chief Operating Officer",
      company: "GlobalReach",
      photoUrl: 'assets/testimonials/photo.png',
      thumbUrl: 'assets/testimonials/thumb.png',
      highlights: ['absolute pleasure', 'beyond expectations', 'global expansion']
    },
    {
      quote: "I truly appreciate your fresh ideas and efficient execution in designing the TestOps product. Your inputs and design work have added immense value to what we're building. You've shown strong expertise in creating great UI and demonstrated impressive growth in user-centered thinking. You now generate ideas faster, with a sharper focus on usability and user logic. Keep up the great work and continue this upward journey!",
      author: "Gaurang",
      role: "Product Manager",
      company: "ABInBev",
      photoUrl: 'assets/testimonials/photo.png', 
      thumbUrl: 'assets/testimonials/thumb.png',
      highlights: [ 
        'fresh ideas', 
        'efficient execution', 
        'TestOps product',
        'inputs and design work',
        'immense value',
        'strong expertise',
        'great UI',
        'user-centered thinking',
        'generate ideas faster',
        'sharper focus on usability and user logic'
      ]
    },
    {
      quote: "Their commitment to understanding our business needs translated directly into a phenomenal product interface. Highly recommended for any complex design challenges.",
      author: "Neha Singh",
      role: "Head of Product Development",
      company: "InnovateLabs",
      photoUrl: 'assets/testimonials/photo.png',
      thumbUrl: 'assets/testimonials/thumb.png',
      highlights: ['business needs', 'phenomenal product interface', 'complex design challenges']
    },
    {
      quote: "Efficient, creative, and highly professional. The turnaround time for design iterations was incredibly fast without sacrificing quality.",
      author: "Rajiv Menon",
      role: "Founder",
      company: "StartupX",
      photoUrl: 'assets/testimonials/photo.png',
      thumbUrl: 'assets/testimonials/thumb.png',
      highlights: ['Efficient, creative, and highly professional', 'incredibly fast', 'sacrificing quality']
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  // --- Scrolling Logic ---
  
  ngAfterViewChecked(): void {
    if (this.currentIndex !== this.lastIndex) {
      this.scrollToActivePhoto();
      this.lastIndex = this.currentIndex; 
    }
  }

  private scrollToActivePhoto(): void {
    if (!this.photoWindow || !this.photoList) return;

    const windowEl = this.photoWindow.nativeElement as HTMLElement;
    const listEl = this.photoList.nativeElement as HTMLElement;
    
    // Check if we are wrapping around (e.g., last index to first, or vice versa)
    // If the index jumps more than 1 position, it's a wrap-around jump.
    const isWrapAround = Math.abs(this.currentIndex - this.lastIndex) > 1;
    const scrollBehavior = isWrapAround ? 'auto' : 'smooth'; // Disable smooth scroll on jump

    // Find the currently active photo container element by its data-index attribute
    const activePhotoEl = listEl.querySelector(`[data-index="${this.currentIndex}"]`) as HTMLElement;

    if (activePhotoEl && windowEl) {
      const windowHeight = windowEl.clientHeight;
      const activePhotoHeight = activePhotoEl.offsetHeight;
      
      const offsetTop = activePhotoEl.offsetTop;
      
      // Calculate the scroll position needed to visually center the active photo:
      const targetScrollTop = offsetTop - (windowHeight / 2) + (activePhotoHeight / 2);

      // Apply the scroll with conditional behavior
      windowEl.scrollTo({
        top: targetScrollTop,
        behavior: scrollBehavior 
      });
    }
  }

  // Getter for the currently active testimonial object
  get activeTestimonial(): TestimonialItem {
    return this.testimonials[this.currentIndex];
  }

  // Navigation methods ensure circularity
  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    // Adding length before modulo handles negative result from -1
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    this.currentIndex = index;
  }
}