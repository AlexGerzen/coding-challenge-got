import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPersonsComponent } from './dialog-persons.component';

describe('DialogPersonsComponent', () => {
  let component: DialogPersonsComponent;
  let fixture: ComponentFixture<DialogPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPersonsComponent]
    });
    fixture = TestBed.createComponent(DialogPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
