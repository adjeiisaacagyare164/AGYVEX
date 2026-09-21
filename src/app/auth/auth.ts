import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

type AuthView = 'sign-in' | 'create-account' | 'forgot-password';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html',
  styleUrl: './auth.css',
  imports: [FormsModule],
})
export class Auth {
  protected view: AuthView = 'sign-in';
  protected showPassword = false;
  protected rememberMe = false;
  protected demoGateway = false;
  protected selectedRole = '';
  protected formSubmitted = false;
  protected email = '';
  protected password = '';

  protected readonly roles = [
    { title: 'SCHOOL ADMIN', description: 'Manage your school, teachers, students, courses, results, and more.', icon: 'M12 3 4 7v5c0 5 3.4 8.2 8 9 4.6-.8 8-4 8-9V7l-8-4Zm0 3.1 5 2.5v3.3c0 3.2-2 5.5-5 6.4-3-.9-5-3.2-5-6.4V8.6l5-2.5Z' },
    { title: 'TEACHER', description: 'Manage your classes, lessons, assignments, assessments, and students.', icon: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 0 4 19.5v-14ZM6.5 5A.5.5 0 0 0 6 5.5v10.1c.2-.1.4-.1.5-.1H18V5H6.5ZM6.5 17.5h12v2H6.5a.5.5 0 0 0 0 1H20v2H6.5a2.5 2.5 0 0 1 0-5Z' },
    { title: 'STUDENT', description: 'Learn, access courses, complete assignments, and use your AI learning tools.', icon: 'M12 3 2.5 8 12 13l7-3.7V15h2V8L12 3Zm-5.5 9.2V16c0 2.2 2.5 4 5.5 4s5.5-1.8 5.5-4v-3.8L12 15.1l-5.5-2.9Z' },
    { title: 'AGYVEX TEAM', description: 'Access AGYVEX internal tools and management systems.', icon: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 2c-3.3 0-6 1.8-6 4v2h12v-2c0-2.2-2.7-4-6-4Zm6 1c-.7 0-1.4.1-2 .3 1.2.8 2 1.8 2 3.2v1.5h4v-2c0-1.7-1.8-3-4-3Z' },
  ];

  constructor(router: Router) {
    this.setView(router.url);
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.setView((event as NavigationEnd).urlAfterRedirects);
      this.demoGateway = false;
      this.formSubmitted = false;
    });
  }

  protected submitSignIn(): void {
    this.formSubmitted = true;
    if (!this.email || !this.password || !this.isValidEmail(this.email)) {
      return;
    }
    this.demoGateway = true;
  }

  protected submitReset(): void {
    this.formSubmitted = true;
  }

  protected selectRole(role: string): void {
    this.selectedRole = role;
  }

  protected isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  protected setView(url: string): void {
    if (url.includes('create-account')) {
      this.view = 'create-account';
    } else if (url.includes('forgot-password')) {
      this.view = 'forgot-password';
    } else {
      this.view = 'sign-in';
    }
  }
}
