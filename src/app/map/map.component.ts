import { Component, OnInit } from '@angular/core';
import * as leaf from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit() {
    this.map = leaf.map("map", {
      center :[48.8534, 2.3488],
      zoom : 15
    });
    leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>'
    }).addTo(this.map);
    leaf.marker([48.8534, 2.3488]).addTo(this.map)
    .bindPopup('Arrivée')
    .openPopup();
  }

}
