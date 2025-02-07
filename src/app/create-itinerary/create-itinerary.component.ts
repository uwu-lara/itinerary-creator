import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { v4 as uuidv4 } from 'uuid';
import { DataService } from '../services/data.service';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

interface DestinationField {
  destination: string;
  destinationNote: string;
  destinationCount: number;
  hotels: Hotel[];
}

interface Hotel {
  hotelName: string;
  hotelStayDaysCount: number;
  singleRoomCount: number;
  doubleRoomCount: number;
  tripleRoomCount: number;
  mealType: string;
}

interface Itinerary {
  id: string;
  clientName: string;
  destinationFields: DestinationField[];
  duration: string;
  itineraryId: string;
  paxCount: number;
  startDate: string;
  startQuote: string;
  endQuote: string;
}
interface hotel {
  hotelName:string,
  destination:string 
  roomCount:number,
  starCategory:number
}



@Component({
  selector: 'app-create-itinerary',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule,CommonModule,     NgLabelTemplateDirective, MatSelectModule,
    NgxMatSelectSearchModule,
    NgOptionTemplateDirective,
    NgSelectComponent,],
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent implements OnInit {

  today:string | undefined;

  hotelListArray:any[] = [];
  destinations:any[] = []; 
  durations:any[] =[] 
  mealTypeOptions:any[] = [];

  itineraryForm: FormGroup;
  itineraryArray: Itinerary[] = [];
  durationValue: number = 0;
  itineraryId: string | null = null;
  selectedItinerary: Itinerary | undefined;
  stayDaysCount=0;
  hotelSearchControl = new FormControl('');

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public dataService:DataService) {
    this.destinations.sort();
    this.loadItineraryArray();
    this.itineraryForm = this.fb.group({
      itineraryId: [],
      clientName: ['', Validators.required],
      paxCount: [null, [Validators.required, Validators.min(1)]],
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      startQuote: [''],
      endQuote: [''],
      destinationFields: this.fb.array([this.createDestinationField()])
    });
    this.itineraryForm.get('duration')?.valueChanges.subscribe(() => this.destinationButtonHideVisibility());
  }

  ngOnInit() {
    this.hotelListArray = this.dataService.hotelListArray
    this.destinations = this.dataService.destinations
    this.durations = this.dataService.durations
    this.mealTypeOptions = this.dataService.mealTypeOptions
    this.hotelListArray.sort((a, b) => a.hotelName.localeCompare(b.hotelName));

    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
    this.route.paramMap.subscribe(params => {
      this.itineraryId = params.get('id');
      if (this.itineraryId) {
        this.selectedItinerary = this.itineraryArray.find(itinerary => itinerary.itineraryId === this.itineraryId);
        if (this.selectedItinerary) this.populateForm(this.selectedItinerary);
      }
    });
  }

  get destinationFields(): FormArray {
    return this.itineraryForm.get('destinationFields') as FormArray;
  }

  get destinationCountSum(): number {
    return this.destinationFields.controls
      .map(control => control.get('destinationCount')?.value || 0)
      .reduce((acc, value) => acc + value, 0);
  }

  createDestinationField(): FormGroup {
    return this.fb.group({
      destination: ['', Validators.required],
      destinationNote:[""],
      destinationCount: [null, [Validators.required, Validators.min(1)]],
      hotels: this.fb.array([]) 
    });
  }

  createHotelField(): FormGroup {
    return this.fb.group({
      hotelName: ['', Validators.required],
      hotelStayDaysCount: [null, [Validators.required, Validators.min(1)]],
      singleRoomCount: [null, [Validators.min(0)]],
      doubleRoomCount: [null, [Validators.min(0)]],
      tripleRoomCount: [null, [Validators.min(0)]],
      mealType: ['', Validators.required],
      starCategory: [null, [Validators.required]]
    });
  }

  getHotels(destinationIndex: number): FormArray {
    return this.destinationFields.at(destinationIndex).get('hotels') as FormArray;
  }
  
  addHotel(destinationIndex: number): void {
    this.getHotels(destinationIndex).push(this.createHotelField());
  }

  addNewDestinationField(): void {
    this.checkAndAddDestination();
  }

  checkAndAddDestination() {
    this.durationValue = parseInt(this.itineraryForm.get('duration')?.value, 10);
    if (this.durationValue > this.destinationCountSum) {
      this.destinationFields.push(this.createDestinationField());
    }
  }

  destinationButtonHideVisibility() {
    this.durationValue = parseInt(this.itineraryForm.get('duration')?.value, 10);
  }

  loadItineraryArray(): void {
    const savedItinerary = localStorage.getItem('-itineraryArray-');
    this.itineraryArray = savedItinerary ? JSON.parse(savedItinerary) as Itinerary[] : [];
  }

  async Submit() {
    console.log(this.itineraryForm);
    
    if (this.itineraryForm.valid && (this.durationValue >= this.destinationCountSum)) {
      if (this.itineraryId) {
        this.itineraryArray = this.itineraryArray.filter(itinerary => itinerary.itineraryId !== this.itineraryId);
        this.itineraryForm.value.itineraryId = this.itineraryId;
        this.itineraryArray.push(this.itineraryForm.value);
      } else {
        this.itineraryForm.value.itineraryId = uuidv4();
        this.itineraryArray.push(this.itineraryForm.value);
      }
      await localStorage.setItem('-itineraryArray-', JSON.stringify(this.itineraryArray));
      this.itineraryForm.reset();
      this.router.navigate(['/itinerary-list']);
    }
  }

  populateForm(itinerary: Itinerary) {
    this.itineraryForm.patchValue({
      clientName: itinerary.clientName,
      paxCount: itinerary.paxCount,
      duration: itinerary.duration,
      startDate: itinerary.startDate,
      startQuote: itinerary.startQuote,
      endQuote: itinerary.endQuote
    });
    const destinationFieldsArray = this.itineraryForm.get('destinationFields') as FormArray;
    destinationFieldsArray.clear();
    itinerary.destinationFields.forEach(destinationField => {
      destinationFieldsArray.push(this.fb.group({
        destination: [destinationField.destination],
        destinationNote:[destinationField.destinationNote],
        destinationCount: [destinationField.destinationCount],
        hotels: this.fb.array(destinationField.hotels.map(hotel => this.fb.group(hotel)))
      }));
    });
  }

  getAvailableDestinations(index: number): string[] {
    const selectedDestinations = this.destinationFields.controls.map(
      control => control.get('destination')?.value
    );
    return this.destinations.filter(dest => !selectedDestinations.includes(dest) || dest === selectedDestinations[index]);
  }
    getAvailableHotels(i: number,j:number): hotel[] {
this.getTotalHotelStayDaysCount()
    console.log(i,j);
    let _selectedHostels:hotel[] =[]

    const selectedDestination = this.itineraryForm.value.destinationFields[i]['destination']
    const selectedStarCategory = this.itineraryForm.value.destinationFields[i].hotels[j].starCategory
    
    this.hotelListArray.forEach((hotel:hotel) =>{
      // if (selectedDestination === hotel.destination) {
      if (+selectedStarCategory === hotel.starCategory) {
        _selectedHostels.push(hotel)
      }
    })
    return _selectedHostels
  }

  getTotalHotelStayDaysCount(): number {
    const destinationFields = this.itineraryForm.get('destinationFields') as FormArray;
    return destinationFields.controls.reduce((total, destinationField) => {
      const hotels = destinationField.get('hotels') as FormArray;
      const hotelStayDaysSum = hotels.controls.reduce((sum, hotel) => {
        this.stayDaysCount = hotel.get('hotelStayDaysCount')?.value || 0;
        return sum + this.stayDaysCount;
      }, 0);
      // console.log('stayDaysCount',this.stayDaysCount);
      return total + hotelStayDaysSum;
    }, 0);

    
  }
  removeHotel(destinationIndex: number, hotelIndex: number): void {
    const hotelsArray = this.getHotels(destinationIndex);
    hotelsArray.removeAt(hotelIndex);
  }

  // filterHotels(i: number, j: number) {
  //   const searchTerm = this.hotelForm.controls[i].get('hotelName')?.value?.toLowerCase();
  //   this.filteredHotels[i] = this.filteredHotels[i] || [];
    
  //   this.filteredHotels[i][j] = this.getAvailableHotels(i, j).filter(hotel =>
  //     hotel.hotelName.toLowerCase().includes(searchTerm)
  //   );
  // }
  
}
