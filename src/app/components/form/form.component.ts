import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  names: string[] = ["IIT Kanpur", "Kalyanpur Railway Station", "SPM HOSPITAL Metro station", "CSJM University Helipad", "Gurudev Chauraha", "Geeta Nagar", "Rawatpur Railway Station", "Lala Lajpat Rai Hospital (Hallett Hospital)", "Moti Jheel", "Chunniganj Chauraha", "Naveen Market", "Bada Chauraha", "Naya Ganj", "Birhana Road", "Kanpur central railway station", "Jhakarkati Bus Stand Kanpur", "Transport Nagar", "Kidwai Nagar North", "Kidwai Nagar South", "Kidwai Nagar", "Yashoda Nagar", "Baudh Nagar", "Naubasta", "Agricultural College Lane", "Kakadeo", "Double Pulia", "Vijay Nagar Chauraha", "Govind Nagar", "Barra 7", "Barra 8"]
  // For managing the state of the dropdowns
  openFrom = false;
  openTo = false;

  // For storing the selected values
  valueFrom:number | null = null; // Default to first station
  valueTo:number |null = null; // Default to second station

  activeDescendant: string | null = null;

  selectedFrom: number | null = null;
  selectedTo: number | null = null;

  // Method to handle button click (toggle dropdown)
  onButtonClick(dropdown: string) {
    if (dropdown === 'from') {
      this.openFrom = !this.openFrom;
      this.openTo = false;
    } else if (dropdown === 'to') {
      this.openTo = !this.openTo;
      this.openFrom = false;
    }
  }

  choose(index: number, dropdown: string) {
    if (dropdown === 'from') {
      this.valueFrom = index;
      if (this.valueTo === index) this.valueTo = null; // Clear "To" if the same station was selected
    } else if (dropdown === 'to') {
      this.valueTo = index;
    }
    this.openFrom = false;
    this.openTo = false;
  }

  onHover(index: number | null, dropdown: string) {
    if (dropdown === 'from') {
      this.selectedFrom = index;
      this.activeDescendant = index !== null ? `station-from-${index}` : null;
    } else if (dropdown === 'to') {
      this.selectedTo = index;
      this.activeDescendant = index !== null ? `station-to-${index}` : null;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.openFrom = false;
      this.openTo = false;
    }
  }
  
  onEscape() {
    this.openFrom = false;
    this.openTo = false;
  }
}
