import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsualComponentComponent } from './usual-component.component';

describe('UsualComponentComponent', () => {
  let component: UsualComponentComponent;
  let fixture: ComponentFixture<UsualComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsualComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
