import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  protected readonly products = [
    {
      number: '01',
      name: 'AGYVEX EDU',
      status: 'Available',
      description: 'AI-powered education for the modern school.',
      accent: 'blue',
      href: '/products/agyvex-edu',
    },
    {
      number: '02',
      name: 'AGYVEX AI',
      status: 'Coming Soon',
      description: 'AI-powered tools and intelligent solutions for modern work and everyday problems.',
      accent: 'violet',
    },
    {
      number: '03',
      name: 'AGYVEX Business',
      status: 'Coming Soon',
      description: 'Technology solutions designed to help businesses work smarter, operate efficiently, and grow.',
      accent: 'teal',
    },
    {
      number: '04',
      name: 'AGYVEX Systems',
      status: 'Coming Soon',
      description: 'Purpose-built digital systems for organizations and institutions.',
      accent: 'navy',
    },
  ];
}
