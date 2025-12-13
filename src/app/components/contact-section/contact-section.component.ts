import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Assuming you use Reactive Forms

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  headerTitle: string = "Together, Let's Untie the Challenges";
  headerSubtitle: string = "Explore my experience and see how I can add value to our team";
  contactTitle: string = "Contact Us";

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      countryCode: ['+91', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
      emailId: ['', [Validators.required, Validators.email]],
      projectDetails: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Logic for sending data (e.g., using HttpClient) goes here
      alert('Message sent successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }

  onCancel(): void {
    this.contactForm.reset();
    // Optional: Reset specific controls while keeping others (like countryCode)
    this.contactForm.get('countryCode')?.setValue('+91');
  }
}