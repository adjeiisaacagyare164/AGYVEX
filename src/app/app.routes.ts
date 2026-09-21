import { Routes } from '@angular/router';
import { AgyvexEdu } from './agyvex-edu/agyvex-edu';
import { Products } from './products/products';
import { About } from './about/about';
import { Auth } from './auth/auth';

export const routes: Routes = [
	{ path: 'sign-in', component: Auth },
	{ path: 'create-account', component: Auth },
	{ path: 'forgot-password', component: Auth },
	{ path: 'about', component: About },
	{ path: 'products', component: Products },
	{ path: 'products/agyvex-edu', component: AgyvexEdu },
	{ path: '**', redirectTo: '' },
];
