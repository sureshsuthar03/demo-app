import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../control/dialog-box/dialog-box.component';
import { GetDataService } from 'src/app/services/get-data.service';
import { CountryModel } from 'src/app/model/country.model';
import { PaginatorModel } from 'src/app/model/paginator.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
@Injectable()
export class CountryListComponent implements OnInit {

  response: any;
  countryList: CountryModel[] = [];
  pageLength: number = 100;
  pageSize: number = 5;
  pageIndex: number = 0;
  pageSizeOptions = [5, 10, 25, 100];

  paginator: PaginatorModel = {
    pageIndex: this.pageIndex + 1,
    pageSize: this.pageSize,
    sortOrder: "",
    sortColumn: "",
    searchQuery: ""
  };

  constructor(public dialog: MatDialog, private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.getCountryData();
  }

  onChangePage(page: any) {
    this.paginator.pageSize = page.pageSize;
    this.paginator.pageIndex = page.pageIndex + 1;
    this.getCountryData();
  }

  onSearch(searchQuery: any) {
    this.paginator.searchQuery = searchQuery.target.value;
    console.log(this.paginator.searchQuery);
    this.getCountryData();
  }

  isActive(element:any) {
    return (element.status != 10);
  }
  getCountryData() {
    this.getData.getCountryData(this.paginator).subscribe((res) => {
      this.response = res;
      if (this.response.httpStatusCode == 200) {
        //console.log(this.response.content.records.filter(this.isActive));
        this.countryList = this.response.content.records.filter(this.isActive);
      }
      else {

      }
    });
  }

  openDialog(id: number): void {
    this.dialog.open(DialogBoxComponent, {
      width: '500px',
    });
  }

  // openDialog(id: number): void {
  //   let dialogRef = this.dialog.open(DialogBoxComponent, {
  //     width: '500px',
  //     data: {}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }
}
