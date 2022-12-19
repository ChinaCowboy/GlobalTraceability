import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from './search.component';
import { MockActivatedRoute } from '../shared/search/mocks/routes';
import { SearchService } from '../shared';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockActivatedRoute: MockActivatedRoute;
  let mockSearchService: SearchService;
  beforeEach(async () => {
    mockActivatedRoute = new MockActivatedRoute({term: 'nikola'});
    
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
        ],
        imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    // mock response
    mockSearchService = TestBed.inject(SearchService);
    mockSearchService.search = jasmine.createSpy().and.returnValue(of([]));
    // initialize component
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
