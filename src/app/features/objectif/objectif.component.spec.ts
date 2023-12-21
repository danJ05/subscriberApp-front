import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifComponent } from './objectif.component';

describe('ObjectifComponent', () => {
  let component: ObjectifComponent;
  let fixture: ComponentFixture<ObjectifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectifComponent]
    });
    fixture = TestBed.createComponent(ObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
