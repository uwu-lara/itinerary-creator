import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EditItineraryDialogComponent } from '../edit-itinerary-dialog/edit-itinerary-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';

interface DestinationField {
  destination: string;
  destinationCount: number;
}

interface Itinerary {
  clientName: string;
  destinationFields: DestinationField[];
  duration: string;
  itineraryId: string;
  paxCount: number;
  startDate: string;
}

@Component({
  selector: 'app-itinerary-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './itinerary-list.component.html',
  styleUrl: './itinerary-list.component.scss'
})


export class ItineraryListComponent {
  itineraryArray: Itinerary[] = [];

  constructor(private dialog: MatDialog, public router: Router, public dataService: DataService) {
    this.loadItineraryArray();
  }

  loadItineraryArray(): void {
    const savedItinerary = localStorage.getItem('-itineraryArray-');
    if (savedItinerary) {
      this.itineraryArray = JSON.parse(savedItinerary) as Itinerary[];
    }
  }

  onEdit(itinerary: any): void {
    this.dataService.setItineraryData(itinerary)
this.router.navigate(['./create-itinerary',{id:itinerary}])
    
    // const dialogRef = this.dialog.open(EditItineraryDialogComponent, {
    //   width: '800px',
    //   data: itinerary
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     // Update the itinerary array with edited values
    //     const index = this.itineraryArray.findIndex(item => item.itineraryId === itinerary.itineraryId);
    //     if (index !== -1) {
    //       this.itineraryArray[index] = { ...this.itineraryArray[index], ...result };
    //       localStorage.setItem('-itineraryArray-', JSON.stringify(this.itineraryArray));
    //     }
    //   }
    // });
  }
  onDelete(itineraryId: string): void {
    // Confirm deletion and remove from itineraryArray
    if (confirm('Are you sure you want to delete this itinerary?')) {
      this.itineraryArray = this.itineraryArray.filter(itinerary => itinerary.itineraryId !== itineraryId);
      console.log(`Deleted itinerary with ID: ${itineraryId}`);

      localStorage.setItem('-itineraryArray-', JSON.stringify(this.itineraryArray));
    }
  }

  onPrint(itinerary: any, confirmation?:boolean): void {
    // Implement printing functionality
    console.log(`Printing itinerary for client: ${itinerary.clientName}`);
    // Example: window.print(); or use a dedicated print library for formatted output
    this.router.navigate(['./view-itinerary',{id:itinerary, confirmation:confirmation}])

  }
}
