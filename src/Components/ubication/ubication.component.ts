import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.css']
})
export class UbicationComponent {
  @Input() showMap: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  toggleMap() {
    this.toggle.emit();
  }
}

