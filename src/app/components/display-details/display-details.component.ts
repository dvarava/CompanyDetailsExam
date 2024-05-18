import { Component } from '@angular/core';
import { MockapiService } from '../../services/mockapi.service';
import { CommonModule } from '@angular/common';
import { companyDetails } from '../../interfaces/interfaceCompany';

@Component({
  selector: 'app-display-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {
  results: companyDetails[] | undefined;

  constructor(private _mockapi: MockapiService) { }

  getCompanies(): boolean {
    this._mockapi.getCompanyDetails().subscribe(
      companyData => {
        this.results=companyData;
        console.log(this.results);
      }
    )
    return false;
  }

  ngOnInit() {
    this.getCompanies();
  }}
