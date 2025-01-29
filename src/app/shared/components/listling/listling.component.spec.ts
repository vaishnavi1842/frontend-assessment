import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlingComponent } from './listling.component';

describe('ListlingComponent', () => {
  let component: ListlingComponent;
  let fixture: ComponentFixture<ListlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
