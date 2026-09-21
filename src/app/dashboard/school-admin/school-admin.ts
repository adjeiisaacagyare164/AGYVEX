import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-school-admin',
  templateUrl: './school-admin.html',
  styleUrl: './school-admin.css',
})
export class SchoolAdmin {
  protected readonly isDarkMode = signal(false);
  protected readonly isSidebarOpen = signal(false);

  protected readonly navigation = ['Dashboard', 'Students', 'Teachers', 'Classes', 'Courses', 'Lessons', 'Assignments', 'Quizzes', 'Results', 'Attendance', 'Fees', 'Reports'];
  protected readonly utilityNavigation = ['AI Tools', 'Subscription', 'School Settings'];
  protected readonly stats = [
    { label: 'Students', value: '1,248', change: '+8.2%', icon: 'users' },
    { label: 'Teachers', value: '68', change: '+4.1%', icon: 'teacher' },
    { label: 'Classes', value: '42', change: '+2 new', icon: 'classes' },
    { label: 'Courses', value: '96', change: '+12.6%', icon: 'courses' },
  ];
  protected readonly enrollment = [
    { month: 'Jan', value: 980 }, { month: 'Feb', value: 1010 }, { month: 'Mar', value: 1068 },
    { month: 'Apr', value: 1104 }, { month: 'May', value: 1152 }, { month: 'Jun', value: 1185 },
    { month: 'Jul', value: 1248 },
  ];
  protected readonly activities = [
    { title: 'New students added', detail: '12 students added to Grade 5', time: '12 min ago', icon: 'users' },
    { title: 'Teacher account created', detail: 'Mrs. Adaeze joined the faculty', time: '48 min ago', icon: 'teacher' },
    { title: 'Mathematics course updated', detail: 'Grade 8 course materials updated', time: '2 hours ago', icon: 'courses' },
    { title: 'Grade 5 results published', detail: 'Term 1 results are now available', time: 'Yesterday', icon: 'results' },
    { title: 'New assignment created', detail: 'English Language · Grade 7', time: 'Yesterday', icon: 'assignment' },
  ];
  protected readonly upcoming = [
    { type: 'ASSIGNMENT', title: 'Algebra Fundamentals', meta: 'Grade 8 · Due tomorrow', color: 'blue' },
    { type: 'QUIZ', title: 'Living Things', meta: 'Grade 6 · 18 October 2026', color: 'violet' },
    { type: 'EVENT', title: 'Parent-teacher conference', meta: 'School hall · 21 October 2026', color: 'teal' },
  ];
  protected readonly quickActions = ['Add Student', 'Add Teacher', 'Create Class', 'Create Course', 'Create Assignment', 'Create Quiz'];

  constructor() {
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

  protected toggleSidebar(): void {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }

  protected closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }

  protected chartHeight(value: number): string {
    return `${Math.round(((value - 900) / 400) * 100)}%`;
  }
}
