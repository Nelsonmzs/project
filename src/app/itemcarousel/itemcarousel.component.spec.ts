import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcarouselComponent } from './itemcarousel.component';

describe('ItemcarouselComponent', () => {
  let component: ItemcarouselComponent;
  let fixture: ComponentFixture<ItemcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
