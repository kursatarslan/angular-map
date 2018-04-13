import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'pm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  zoom: number = 7;
  title: string = 'My first AGM project';
  lat: number = 41.01384;
  lng: number = 28.94966;
  lines: Marker[] = [];

  markers: Marker[] = [
  {
    lat: 41.673858,
    lng: 27.815982,
    label: 'A',
    draggable: true
  },
  {
    lat: 41.373858,
    lng: 27.215982,
    label: 'B',
    draggable: false
  },
  {
    lat: 41.723858,
    lng: 27.895982,
    label: 'C',
    draggable: true
  }];

  clickedMarker(label: string, index: number) {
    console.log('clicked the marker: ${label || index}');
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  constructor() {
    for (let index = 0; index < 10; index++) {
      this.lines.push({lat: 41.09 + ((index > 25) ? (index / 10) : (( 50 - index) / 10)), lng: 27.8 +
        ((index > 50) ? (index / 100) : (( 50 - index) / 100)), label: 'G', draggable: true});
    }
  }

  ngOnInit() {
  }
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
