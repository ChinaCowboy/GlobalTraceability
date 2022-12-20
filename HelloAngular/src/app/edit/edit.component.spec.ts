import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute } from '../shared/search/mocks/routes';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let mockActivatedRoute: MockActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
        ],
      imports: [ HttpClientTestingModule]
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
