import { Routes } from '@angular/router';
import { AgyvexEdu } from './agyvex-edu/agyvex-edu';
import { Products } from './products/products';
import { About } from './about/about';
import { Auth } from './auth/auth';
import { SchoolAdmin } from './dashboard/school-admin/school-admin';

export const routes: Routes = [
	{ path: 'dashboard/school-admin', component: SchoolAdmin },
	{ path: 'sign-in', component: Auth },
	{ path: 'create-account', component: Auth },
	{ path: 'forgot-password', component: Auth },
	{ path: 'about', component: About },
	{ path: 'products', component: Products },
	{ path: 'products/agyvex-edu', component: AgyvexEdu },
	{ path: '**', redirectTo: '' },
];
