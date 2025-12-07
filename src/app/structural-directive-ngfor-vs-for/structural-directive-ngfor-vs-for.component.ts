import { Component, input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.css'
})
export class StructuralDirectiveNgforVsForComponent {
  employees:any[] = [
    {empName: 'Habibur',empNum:101,empEmail:'habibcsepust@gmail.com',empDept:'IT'},
    {empName: 'Sajid',empNum:102,empEmail:'sajiddcseu@gmail.com',empDept:'IT'},
    {empName: 'Haidar',empNum:103,empEmail:'haidarcsepust@gmail.com',empDept:'HR'},
  ]

  companyList:string[]=['Bdjobs.Com','NextJobz','Pintech', 'NBPLC','Google','Amazon']
}


