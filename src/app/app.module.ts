import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/laytout/header/header.component';
import { FooterComponent } from './Components/laytout/footer/footer.component';
import { SidebarComponent } from './Components/laytout/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CityListComponent } from './Components/city/city-list/city-list.component';
import { CityUpsertComponent } from './Components/city/city-upsert/city-upsert.component';
import { DialogBoxComponent } from './Components/control/dialog-box/dialog-box.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { CommanService } from './services/comman.service';
import { CountryListComponent } from './Components/countries/country-list/country-list.component';
import { CountryUpsertComponent } from './Components/countries/country-upsert/country-upsert.component';
import { CountriesComponent } from './Components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDataService } from './services/get-data.service';
import { StoreModule } from '@ngrx/store';
import { ArticleReducer } from 'src/reducers/article.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    CityComponent,
    CityListComponent,
    CityUpsertComponent,
    DialogBoxComponent,
    CountriesComponent,
    CountryListComponent,
    CountryUpsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      articles : ArticleReducer,
    }),
  ],
  providers: [
    CommanService,
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
