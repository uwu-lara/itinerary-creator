import { Component,AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as geolib from 'geolib';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private map!: L.Map;
  private marker1: L.Marker | undefined;
  private marker2: L.Marker | undefined;
  distance: any;


  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Initialize the map
    this.map = L.map('map').setView([51.505, -0.09], 13); // Default center and zoom

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add markers for two points
    const point1: L.LatLngExpression = [51.5, -0.09]; // Example coordinates
    // const point2: L.LatLngExpression = [51.51, -0.1]; // Example coordinates

    // this.marker1 = L.marker(point1).addTo(this.map);
    // this.marker2 = L.marker(point2).addTo(this.map);

    // Calculate distance between the two points
    // this.distance = this.calculateDistance(point1, point2);
    // console.log(`Distance between points: ${distance} meters`);
  }

  private calculateDistance(point1: L.LatLngExpression, point2: L.LatLngExpression): any {
    const [lat1, lon1] = Array.isArray(point1) ? point1 : [point1.lat, point1.lng];
    const [lat2, lon2] = Array.isArray(point2) ? point2 : [point2.lat, point2.lng];

    // Use geolib to calculate distance
      return geolib.getDistance(
        { latitude: lat1, longitude: lon1 },
        { latitude: lat2, longitude: lon2 }
      );
  }
}
