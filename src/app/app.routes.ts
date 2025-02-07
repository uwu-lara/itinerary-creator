import { Routes } from '@angular/router';
import { ItineraryViewComponent } from './itinerary-view/itinerary-view.component';
import { LandingComponent } from './landing/landing.component';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';
import { ItineraryListComponent } from './itinerary-list/itinerary-list.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path:'view-itinerary',
        component: ItineraryViewComponent,
    },
    {
        path:'landing',
        component: LandingComponent,
    },
    {
        path:'create-itinerary',
        component:CreateItineraryComponent
    },
    {
        path:'itinerary-list',
        component: ItineraryListComponent
    },{
        path:'map',
        component:MapComponent
    }
];
