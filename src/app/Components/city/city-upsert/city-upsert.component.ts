import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/model/city.model';
import { AddArticleAction, RemoveArticleAction } from 'src/app/store/article.action';
import { Article } from 'src/models/article.interface';
import { State } from 'src/models/state.model';

@Component({
  selector: 'app-city-upsert',
  templateUrl: './city-upsert.component.html',
  styleUrls: ['./city-upsert.component.css']
})
export class CityUpsertComponent implements OnInit{
  @ViewChild('reload') reload !: ElementRef;
  city:CityModel={
    id:0,
    name:"",
    countryId:0,
    status:0
  }

  cityForm=new FormGroup({
    id:new FormControl(0),
    name:new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[^0-9][a-zA-Z0-9_]+$")])),
    countryId:new FormControl(0,Validators.compose([Validators.required])),
    status:new FormControl("")
  });
  articles$!: Observable<Array<Article>>;
  constructor(private store: Store<State>) {}
  
  ngOnInit(): void {
    this.articles$ = this.store.select((store) => store.article);  
  }

  onInsertCity(){
    this.cityForm.markAllAsTouched();
    if(this.cityForm.valid){
    }
  }

  addArticle(form: NgForm) {    
    this.store.dispatch(
      new AddArticleAction(form.value)
    );
  }

  removeArticle(form: NgForm){
    this.store.dispatch(
      new RemoveArticleAction(form.value)
    );
  }

  seeResult(){    
    this.store.subscribe(res=>{
      console.log(res);
    })
  }

  get validCall(){
    return this.cityForm.controls;
  }

  goBack(){
    history.back()
  }
}
