import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Stats integrated into this section
  aboutStats = [
    { value: '6+', label: 'Years of Exp' },
    { value: '30+', label: 'Clients' },
    { value: '70+', label: 'Projects' },
  ];
  
  // Body copy
  bodyCopy1 = 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';
  bodyCopy2 = 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.';
}