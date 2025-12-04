import { Routes } from '@angular/router';
import { ToDoItemView } from '../components/to-do-item-view/to-do-item-view';
export const ROUTES_CONFIG = {
    DEFAULT: '**',
    TASKS: 'tasks',
    BOARD: 'Board',
    BACKLOG: 'Backlog'
} as const;
export const routes: Routes = [
   
    {
        path: ROUTES_CONFIG.BACKLOG + '/:id',
        component: ToDoItemView,
    },
    {
        path:  ROUTES_CONFIG.BOARD,
        loadComponent: () =>
          import('../components/to-do-list/to-do-list').then((c) => c.ToDoList),
    },
    {
        path: ROUTES_CONFIG.DEFAULT,
        redirectTo: ROUTES_CONFIG.BOARD,
    },
  
];
