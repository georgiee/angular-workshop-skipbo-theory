import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedContentComponent } from './routed-content.component';

describe('RoutedContentComponent', () => {
  let component: RoutedContentComponent;
  let fixture: ComponentFixture<RoutedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
