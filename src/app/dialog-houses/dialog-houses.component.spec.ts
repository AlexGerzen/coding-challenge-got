import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHousesComponent } from './dialog-houses.component';

describe('DialogHousesComponent', () => {
  let component: DialogHousesComponent;
  let fixture: ComponentFixture<DialogHousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogHousesComponent]
    });
    fixture = TestBed.createComponent(DialogHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
