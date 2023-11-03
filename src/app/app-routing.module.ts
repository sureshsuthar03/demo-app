import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CityComponent } from './Components/city/city.component';
import { CityUpsertComponent } from './Components/city/city-upsert/city-upsert.component';
import { CountriesComponent } from './Components/countries/countries.component';
import { CountryUpsertComponent } from './Components/countries/country-upsert/country-upsert.component';

const routes: Routes = [
  {
    path : "",
    component : CityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
