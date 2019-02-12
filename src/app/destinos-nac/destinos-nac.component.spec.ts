import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosNacComponent } from './destinos-nac.component';

describe('DestinosNacComponent', () => {
  let component: DestinosNacComponent;
  let fixture: ComponentFixture<DestinosNacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinosNacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinosNacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
