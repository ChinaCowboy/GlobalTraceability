import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-portrait-component',
  templateUrl: './portrait-component.component.html',
  styleUrls: ['./portrait-component.component.css']
})
export class PortraitComponentComponent implements OnInit {
  person!: Person;
  sub!: Subscription;
  constructor(private route: ActivatedRoute,private router: Router,private service: SearchService) { }

  async ngOnInit(): Promise<void> {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      this.service.get(id).subscribe(person => {
        if (person) {
          this.person = person;
        } else {
          // this.gotoList();
        }
      });
    });
  }


}
