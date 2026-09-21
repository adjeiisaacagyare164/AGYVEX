import { Component } from '@angular/core';

@Component({
  selector: 'app-agyvex-edu',
  templateUrl: './agyvex-edu.html',
  styleUrl: './agyvex-edu.css',
})
export class AgyvexEdu {
  protected readonly platformAreas = [
    'Learning Management System',
    'AI Tutor',
    'Digital learning materials',
    'Assignments',
    'Quizzes and assessments',
    'Student progress tracking',
    'School management',
    'Teacher tools',
    'Reports and analytics',
  ];

  protected readonly features = [
    { icon: '✦', title: 'AI Tutor', text: 'Personalized AI assistance that helps students understand concepts, ask questions, and learn at their own pace.' },
    { icon: '▥', title: 'Learning Management', text: 'Organize courses, lessons, materials, assignments, and learning activities in one place.' },
    { icon: '◌', title: 'Assessments', text: 'Create quizzes, assignments, tests, and track student performance.' },
    { icon: '↗', title: 'Student Progress', text: 'Monitor learning progress, results, engagement, and academic performance.' },
    { icon: '⌂', title: 'School Management', text: 'Manage students, teachers, classes, courses, attendance, results, and school information.' },
    { icon: '◈', title: 'Teacher Tools', text: 'Give teachers the tools they need to teach, assess, communicate, and support students.' },
  ];

  protected readonly audiences = [
    { label: '01', title: 'School Administrators', text: 'Manage your school from one central platform.' },
    { label: '02', title: 'Teachers', text: 'Teach smarter with powerful digital and AI-assisted tools.' },
    { label: '03', title: 'Students', text: 'Learn with personalized resources and an AI tutor.' },
  ];

  protected readonly steps = [
    { number: '01', title: 'Create your school' },
    { number: '02', title: 'Set up teachers, classes, and students' },
    { number: '03', title: 'Start teaching and learning' },
    { number: '04', title: 'Track progress and improve outcomes' },
  ];
}
