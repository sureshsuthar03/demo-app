import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityUpsertComponent } from './city-upsert.component';

describe('CityUpsertComponent', () => {
  let component: CityUpsertComponent;
  let fixture: ComponentFixture<CityUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityUpsertComponent]
    });
    fixture = TestBed.createComponent(CityUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
