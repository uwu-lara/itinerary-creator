import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path:'',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    // {
    //     path:'view-itinerary',
    //     component: ItineraryViewComponent,
    // },
    // {
    //     path:'landing',
    //     component: LandingComponent,
    // },
    // {
    //     path:'create-itinerary',
    //     component:CreateItineraryComponent
    // },
    // {
    //     path:'itinerary-list',
    //     component: ItineraryListComponent
    // },{
    //     path:'map',
    //     component:MapComponent
    // },
            { 
                path: 'create-itinerary', 
                loadComponent: () => import('./create-itinerary/create-itinerary.component').then(com => com.CreateItineraryComponent) },

            { path: 'view-itinerary', 
                loadComponent: () => import('./itinerary-view/itinerary-view.component').then(com => com.ItineraryViewComponent) },

            { path: 'itinerary-list', 
                loadComponent: () => import('./itinerary-list/itinerary-list.component').then(com => com.ItineraryListComponent) },

            { path: 'landing', 
                loadComponent: () => import('./landing/landing.component').then(com => com.LandingComponent) },

];