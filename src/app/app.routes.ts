import { Routes } from '@angular/router';
import { AgyvexEdu } from './agyvex-edu/agyvex-edu';

export const routes: Routes = [
	{ path: 'products/agyvex-edu', component: AgyvexEdu },
	{ path: '**', redirectTo: '' },
];
