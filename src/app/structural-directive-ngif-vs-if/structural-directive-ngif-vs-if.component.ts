import { Component, input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.css'
})
export class StructuralDirectiveNgifVsIfComponent {
  isChecked: boolean = false;
  isVisible: boolean = true;
  input1:string = '';
  input2:string = '';

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  ShowDetails(){
    this.isVisible = true;
  }
  HideDetails(){
    this.isVisible = false;
  }
}

