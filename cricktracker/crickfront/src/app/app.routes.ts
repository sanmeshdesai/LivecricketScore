import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {
        path: '',
        component: LiveComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent,
        title: 'Home - CrickTracker'
    },
    {
        path: 'history',
        component: HistoryComponent,
        title: 'History - CrickTracker'

    },
    {
        path: 'live',
        component: LiveComponent,
        title: 'Live - CrickTracker'

    },
    {
        path: 'point-table',
        component: PointTableComponent,
        title: 'Point-Table - CrickTracker'

    },

];
