import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginatorModel } from "../model/paginator.model";
import { CountryModel } from "../model/country.model";
@Injectable({
    providedIn: 'root'
  })
export class GetDataService {
    countryDataUrl: string = "https://apit2.web2.anasource.com/admin/Countries/GetList";
    countryUrl: string = "https://apit2.web2.anasource.com/admin/Countries";

    constructor(private http: HttpClient) { }

    getCountryData(paginator:PaginatorModel):Observable<any[]> {
        const headers= new HttpHeaders({ });
        let body:any=({
            'pageIndex':paginator.pageIndex,
            'pageSize':paginator.pageSize,
            'sortOrder':paginator.sortOrder,
            'sortColumn': paginator.sortColumn,
            'searchQuery':paginator.searchQuery
        });
        return this.http.post<any[]>(this.countryDataUrl,body,{headers});
    }

    deleteCountry(){
        const headers= new HttpHeaders({ });
        const urlSearchParams=new URLSearchParams({
            'id':"1"
        });
        this.http.post(this.countryUrl,urlSearchParams,{headers});
    }

    getSingleCountry(id:number):Observable<any>{
        const headers= new HttpHeaders({ });
        return this.http.get(this.countryUrl+"/"+id);
    }

    addCountry(countryData:CountryModel){
        let body:any=({
            'id':countryData.id,
            'name':countryData.name,
            'status':countryData.status,
        });
        return this.http.post(this.countryUrl,body);
    }
}   