import { Routes } from '@angular/router';
import { ToDoItemView } from '../components/to-do-item-view/to-do-item-view';
const ROUTES_CONFIG = {
    DEFAULT: '',
    TASKS: 'tasks',
} as const;
export const routes: Routes = [
   
    {
        path: ROUTES_CONFIG.TASKS + '/:id',
        component: ToDoItemView,
        pathMatch: 'prefix' 
    },
    {
        path:  ROUTES_CONFIG.TASKS,
        loadComponent: () =>
          import('../components/to-do-list/to-do-list').then((c) => c.ToDoList),
        pathMatch: 'prefix'
    },
     {
        path: ROUTES_CONFIG.DEFAULT,
        redirectTo: "**",
        pathMatch: 'prefix',
    },
    {
        path: "**",
        redirectTo: ROUTES_CONFIG.TASKS,
        pathMatch: 'prefix'
    },
  
];
