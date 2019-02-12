import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedessociaisComponent } from './redessociais.component';

describe('RedessociaisComponent', () => {
  let component: RedessociaisComponent;
  let fixture: ComponentFixture<RedessociaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedessociaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedessociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
