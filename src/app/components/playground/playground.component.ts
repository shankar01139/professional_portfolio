import { Component, OnInit } from '@angular/core';

interface PortfolioItem {
  src: string;
  alt: string;
  isCreative?: boolean; // For the "eCreative" badge
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  // Placeholder image paths - **REPLACE WITH YOUR ACTUAL PATHS**
  // In a real application, you would put these in your 'assets' folder
  portfolioImages: PortfolioItem[] = [
    // Top Row (6 items)
    { src: 'assets/playground/image1.jpg', alt: 'Email design', isCreative: false },
    { src: 'assets/playground/image2.jpg', alt: 'Keep your phone silent', isCreative: false },
    { src: 'assets/playground/image3.jpg', alt: 'Stretching Growth with Innovation', isCreative: false },
    { src: 'assets/playground/image4.jpg', alt: 'Launch of Gen AI Innovation Centre', isCreative: false },
    { src: 'assets/playground/image5.jpg', alt: 'Welcome to new WerQ', isCreative: false },
    { src: 'assets/playground/image6.jpg', alt: 'Turn Browsers into Buyers', isCreative: true }, // The one with 'eCreative'

    // Bottom Row (5 items)
    { src: 'assets/playground/image7.jpg', alt: 'Gathering feedback', isCreative: false },
    { src: 'assets/playground/image8.jpg', alt: 'Guess what! Stay Tuned!', isCreative: false },
    { src: 'assets/playground/image9.jpg', alt: 'Launch of Gen AI Innovation Centre', isCreative: false },
    { src: 'assets/playground/image10.jpg', alt: 'Turn Feedback into Revenue', isCreative: false },
    { src: 'assets/playground/image11.jpg', alt: 'People. Purpose.', isCreative: false },
  ];

  mainTitle: string = 'On the Other Side of My Playground';
  subText: string = 'Beyond user flows and interfaces lies a playground of pure creativity — a space where I express through color, form, and rhythm.';

  constructor() { }

  ngOnInit(): void { }
}