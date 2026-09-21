import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AgyvexEdu } from './agyvex-edu/agyvex-edu';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [NgClass, AgyvexEdu],
})
export class App {
  protected readonly isDarkMode = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly isEduPage = signal(false);

  protected readonly focusAreas = [
    { icon: '◈', title: 'Software', text: 'Powerful software and digital products designed to solve real-world problems.' },
    { icon: '✦', title: 'Artificial Intelligence', text: 'Intelligent AI-powered solutions that improve how people learn, work, and make decisions.' },
    { icon: '▦', title: 'Education', text: 'Technology that transforms learning for students, teachers, and schools.' },
  ];

  protected readonly products = [
    { number: '01', name: 'AGYVEX EDU', description: 'AI-powered education platform.', status: 'Available now', accent: 'blue' },
    { number: '02', name: 'AGYVEX AI', description: 'AI-powered tools and intelligent solutions.', status: 'Coming soon', accent: 'violet' },
    { number: '03', name: 'AGYVEX Business', description: 'Technology solutions for businesses.', status: 'Coming soon', accent: 'teal' },
  ];

  protected readonly services = [
    'Web Development', 'Software Development', 'AI Solutions', 'LMS Development',
    'School Management Systems', 'Business Management Systems', 'UI/UX & Graphic Design',
    'Digital Transformation', 'Software Consulting',
  ];

  protected readonly values = ['Innovation', 'Integrity', 'Excellence', 'Impact', 'Continuous Learning'];
  protected readonly process = [
    { number: '01', title: 'Discover' }, { number: '02', title: 'Design' }, { number: '03', title: 'Build' },
    { number: '04', title: 'Test' }, { number: '05', title: 'Deploy' }, { number: '06', title: 'Improve' },
  ];

  constructor(router: Router) {
    this.isEduPage.set(router.url === '/products/agyvex-edu');
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.isEduPage.set((event as NavigationEnd).urlAfterRedirects === '/products/agyvex-edu');
    });
    if (typeof localStorage !== 'undefined') {
      this.isDarkMode.set(localStorage.getItem('agyvex-theme') === 'dark');
    }
  }

  protected toggleTheme(): void {
    this.isDarkMode.update((isDark) => !isDark);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('agyvex-theme', this.isDarkMode() ? 'dark' : 'light');
    }
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }
}
