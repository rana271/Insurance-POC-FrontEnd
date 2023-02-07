import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceService } from 'src/app/insurance.service';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
  providers: [InsuranceService]
})
export class InsuranceComponent {


  name: string = "";
  dob: any;
  age: any;
  occupation = "";
  death = "";
  selected = "Select";
  insuranceForm: any;
  TotalPremium: any = 0;

  OccupationList: any[] = [
    { Occupation: "Cleaner", Rating: 'Light Manual' },
    { Occupation: "Doctor", Rating: 'Professional' },
    { Occupation: "Author", Rating: 'White Collar' },
    { Occupation: "Farmer", Rating: 'Heavy Manual' },
    { Occupation: "Mechanic", Rating: 'Heavy Manual' },
    { Occupation: "Florist", Rating: 'Light Manual' }
  ];

  constructor(private service: InsuranceService) { }

  InvokeCalulatePremium(): void {
    var val = {
      "Name": this.name,
      "Age": this.age,
      "Occupation": this.selected,
      "Death": this.death

    };

    this.service.calculatePremium(val).subscribe(res => {
      this.TotalPremium = res.toString();
      //alert(res.toString());
    });

    console.log(val);
  }

  public CalculateAge(): void {
    if (this.dob) {
      //convert date again to type Date
      const bdate = new Date(this.dob);
      const timeDiff = Math.abs(Date.now() - bdate.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
  }
  public onOptionsSelected(event: any) {
    const value = event.target.value;
    this.selected = value;
    console.log(value);
  }

}
