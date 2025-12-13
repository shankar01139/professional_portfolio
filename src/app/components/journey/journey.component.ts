import { Component, OnInit, OnDestroy } from '@angular/core'; // <-- Import OnDestroy
import { interval, Subscription } from 'rxjs'; // <-- Import RxJS interval and Subscription

interface Job {
  id: number;
  isCurrent: boolean;
  statusText: string;
  role: string;
  company: string;
  poweredBy?: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit, OnDestroy { // <-- Implement OnDestroy
  
  // Existing data structure
  jobExperiences: Job[] = [
    // ... (Your job data remains the same) ...
    {
      id: 1,
      isCurrent: false,
      statusText: '',
      role: 'Junior UI/UX Designer',
      company: 'Infiniijith Apps and Technologies (P) Ltd',
      duration: 'May 2019 ~ May 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Curabitur tempus urna at turpis condimentum lobortis.'
    },
    {
      id: 2,
      isCurrent: false,
      statusText: '',
      role: 'UI/UX Designer',
      company: 'Nexware Technologies Pvt Ltd',
      duration: 'June 2020 ~ May 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      id: 3,
      isCurrent: false,
      statusText: '',
      role: 'UI/UX Designer',
      company: 'Heptagon Technologies Pvt Ltd',
      poweredBy: 'QUESS CORP - Demerger',
      duration: 'Aug 2022 ~ Aug 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      id: 4,
      isCurrent: false,
      statusText: '',
      role: 'UI/UX Designer',
      company: 'Conneqt Digital Pvt Ltd',
      poweredBy: 'QUESS CORP - Demerger',
      duration: 'Aug 2023 ~ Apr 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      id: 5,
      isCurrent: true,
      statusText: 'Currently Working',
      role: 'Senior UI/UX Designer',
      company: 'Digitide Solutions Limited',
      poweredBy: 'QUESS CORP - Demerger',
      duration: 'Apr 2025 ~ Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    }
  ];

  currentIndex: number = 0;
  private intervalSubscription!: Subscription; // Property to hold the interval reference
  private autoSwitchTime = 3000; // 3 seconds

  constructor() { }

  ngOnInit(): void {
    this.startAutoSwitch();
  }

  // Lifecycle hook to clean up the subscription when the component is destroyed
  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  startAutoSwitch(): void {
    // 1. Clear any existing interval to prevent duplicates
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    // 2. Set up the new interval
    this.intervalSubscription = interval(this.autoSwitchTime).subscribe(() => {
      this.nextCard(); // Use a dedicated method for automatic switching
    });
  }

  /**
   * Logic for automatic switching (loops back to start)
   */
  nextCard(): void {
    const nextIndex = (this.currentIndex + 1) % this.jobExperiences.length;
    this.currentIndex = nextIndex;
  }
  
  /**
   * Logic for manual switching (triggered by click on job card)
   * Resets the auto-switch timer on manual interaction for better UX.
   */
  goToNextCard(): void {
    if (this.currentIndex < this.jobExperiences.length - 1) {
      this.currentIndex++;
    } else {
      // Loop back if the end is reached
      this.currentIndex = 0;
    }
    // Restart the timer after a manual click
    this.startAutoSwitch();
  }
  
  /**
   * Logic for timeline dot click
   */
  goToCard(index: number): void {
    this.currentIndex = index;
    // Restart the timer after a manual click
    this.startAutoSwitch();
  }

  // Helper to get the currently visible job card
  get currentJob(): Job {
    return this.jobExperiences[this.currentIndex];
  }
}