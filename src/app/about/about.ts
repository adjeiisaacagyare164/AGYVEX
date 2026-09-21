import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly values = [
    { title: 'Innovation', text: 'We continuously explore new ideas and technologies to create meaningful solutions.' },
    { title: 'Integrity', text: 'We believe in honesty, transparency, and doing what is right.' },
    { title: 'Excellence', text: 'We strive to build high-quality products and deliver high-quality work.' },
    { title: 'Impact', text: 'We focus on technology that creates meaningful and measurable value.' },
    { title: 'Continuous Learning', text: 'We keep learning, improving, and adapting as technology evolves.' },
  ];

  protected readonly capabilities = [
    'AI Solutions',
    'Software Products',
    'Education Technology',
    'Digital Platforms',
    'Business Solutions',
    'Custom Technology Solutions',
  ];
}
