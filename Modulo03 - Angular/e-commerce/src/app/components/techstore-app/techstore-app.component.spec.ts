import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstoreAppComponent } from './techstore-app.component';

describe('TechstoreAppComponent', () => {
  let component: TechstoreAppComponent;
  let fixture: ComponentFixture<TechstoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechstoreAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechstoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
