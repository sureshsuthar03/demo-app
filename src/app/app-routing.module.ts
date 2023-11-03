import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CityComponent } from './Components/city/city.component';
import { CityUpsertComponent } from './Components/city/city-upsert/city-upsert.component';
import { CountriesComponent } from './Components/countries/countries.component';
import { CountryUpsertComponent } from './Components/countries/country-upsert/country-upsert.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home", component: HomeComponent, children: [
      { path: "city", component: CityComponent },
      { path: "city-upsert", component: CityUpsertComponent },
      { path: "country", component: CountriesComponent },
      { path: "country-upsert", component: CountryUpsertComponent },
      { path: "country-upsert/:id", component: CountryUpsertComponent }
    ]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
