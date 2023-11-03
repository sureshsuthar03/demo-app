import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountryModel } from 'src/app/model/country.model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-country-upsert',
  templateUrl: './country-upsert.component.html',
  styleUrls: ['./country-upsert.component.css']
})
export class CountryUpsertComponent implements OnInit{
  constructor(private getDataService:GetDataService,private route: ActivatedRoute){}
  country:CountryModel={
    id:0,
    name:"",
    status:0
  };
  countryForm=new FormGroup({
    id:new FormControl(0),
    name:new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[^0-9][a-zA-Z0-9_]+$")])),
    status:new FormControl(0)
  });

  ngOnInit(): void {
    this.getDataService.getSingleCountry(<any>this.route.snapshot.paramMap.get('id')).subscribe((res:any)=>{
      this.country=<CountryModel>res.content
      this.countryForm.setValue(res.content);
    });
  }

  onInsertCountry(){
    this.countryForm.markAllAsTouched();
    if(this.countryForm.valid){
      this.country=<any>this.countryForm.value
      this.country.status=this.countryForm.value.status?1:0;
      console.log(this.country);
      this.getDataService.addCountry(this.country).subscribe((res:any)=>console.log(res.messages[0]));
    }
  }

  get validCall(){
    return this.countryForm.controls;
  }

  goBack(){
    history.back()
  }
}
