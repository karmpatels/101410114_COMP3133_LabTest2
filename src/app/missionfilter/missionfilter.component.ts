import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  years = Array.from({ length: 15 }, (_, i) => 2006 + i);
  selectedYear: number | null = null;
  launchSuccess: boolean | null = null;
  landSuccess: boolean | null = null;

  applyFilters() {
    this.filtersChanged.emit({
      launch_year: this.selectedYear,
      launch_success: this.launchSuccess,
      land_success: this.landSuccess
    });
  }

  resetFilters() {
    this.selectedYear = null;
    this.launchSuccess = null;
    this.landSuccess = null;
    this.applyFilters();
  }
}
