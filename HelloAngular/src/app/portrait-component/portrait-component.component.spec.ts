import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitComponentComponent } from './portrait-component.component';

describe('PortraitComponentComponent', () => {
  let component: PortraitComponentComponent;
  let fixture: ComponentFixture<PortraitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortraitComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortraitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
