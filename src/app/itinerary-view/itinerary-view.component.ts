import { ChangeDetectorRef, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { YalaComponent } from '../destinations/yala/yala.component';
import { DestinationComponents } from '../destinations/destination-components/destination-components.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { DatePipe } from '@angular/common';

interface DestinationField {
  destination: string;
  destinationCount: number;
}

interface Itinerary {
  id: string;
  clientName: string;
  destinationFields: DestinationField[];
  duration: string;
  itineraryId: string;
  paxCount: number;
  startDate: string;
}


@Component({
  selector: 'app-itinerary-view',
  standalone: true,
  imports: [YalaComponent,DatePipe],
  templateUrl: './itinerary-view.component.html',
  styleUrl: './itinerary-view.component.scss'
})


export class ItineraryViewComponent {



  confirmation: boolean = false;
  itinerary: any;
  customerName: any;

  @ViewChild('destinationContainer', { read: ViewContainerRef, static: true })
  destinationContainer!: ViewContainerRef;
  itineraryId: string | any;
  itineraryArray: any;
  selectedItinerary: Itinerary| any;
  destinationDetails: { destination: string;  destinationDetails: { heading: string; description: string[]; fact: string; }; images: string[]; }[];

constructor(private route:ActivatedRoute, private cdr: ChangeDetectorRef, private dataService: DataService){

  this.destinationDetails = dataService.destinationDetailsArray
  this.loadItineraryArray()
  this.route.paramMap.subscribe(params => {
    this.itineraryId = params.get('id'); // Retrieve `id` from the URL
    let _confirmation = params.get('confirmation'); // Retrieve `confirmation` from the URL
    if (_confirmation === "undefined") {
      this.confirmation = false; 
    } else{
      this.confirmation = true;
    }
    if (this.itineraryId) {

      this.itineraryArray.forEach((itinerary:Itinerary) => {
        if(this.itineraryId === itinerary.itineraryId) {
          this.selectedItinerary = itinerary 
          this.customerName = this.selectedItinerary.clientName;     
          this.calculateItineraryDates()

          this.destinationDetails.forEach((destination:any) => {
            destination.destinationDetails.heading = destination.destinationDetails.heading.replace('[clientName]', this.customerName);
          });
    
        } else{
        }
      });
      console.log(this.selectedItinerary);
      
      // Use `itineraryId` to fetch data or pre-fill the form
    }
  }); 

}
ngAfterViewInit() {
  this.loadDestinationComponents();
}

loadItineraryArray(): void {
  const savedItinerary = localStorage.getItem('-itineraryArray-');
  if (savedItinerary) {
    this.itineraryArray = JSON.parse(savedItinerary) as Itinerary[];
  } else{
    this.itineraryArray = []

  }
}

loadDestinationComponents() {
  if (!this.destinationContainer) {
    console.error('Destination container is not initialized.');
    return;
  }

  if (!this.selectedItinerary?.destinationFields) {
    console.error('No destination fields found in selected itinerary.');
    return;
  }

  this.destinationContainer.clear();

  this.selectedItinerary.destinationFields.forEach((destinationField: any) => {
    const component = DestinationComponents[destinationField.destination];
    if (component) {
      const componentRef = this.destinationContainer.createComponent(component);

      setTimeout(() => {
        if (componentRef.instance) {
          componentRef.instance.destinationCount = destinationField.destinationCount;
          this.cdr.detectChanges(); // Trigger change detection
        }
      });
    } else {
      console.error(`Component not found for destination: ${destinationField.destination}`);
    }
  });
}
  


calculateItineraryDates() {
  const startDate = new Date(this.selectedItinerary.startDate);
  let currentStartDate = startDate;

  this.selectedItinerary.destinationFields.forEach((destination: any) => {
      // Set current destination's start date
      const _startDate = this.getStartDate(currentStartDate);
      destination["startDate"] = new Date(_startDate);

      // Calculate and set current destination's end date
      const endDate = this.getEndDate(currentStartDate, destination.destinationCount);
      destination["endDate"] = new Date(endDate);

      // Update `currentStartDate` for the next destination
      currentStartDate = new Date(endDate);
  });
}

getEndDate(startDate: Date, days: number): Date {
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + days);
  return endDate;
}
getStartDate(startDate: Date): Date {
  const _startDate = new Date(startDate);
  _startDate.setDate(startDate.getDate() + 1);
  return _startDate;
}
}
