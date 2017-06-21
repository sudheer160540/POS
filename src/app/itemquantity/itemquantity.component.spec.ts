import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemquantityComponent } from './itemquantity.component';

describe('ItemquantityComponent', () => {
  let component: ItemquantityComponent;
  let fixture: ComponentFixture<ItemquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
