import { Component, OnInit } from '@angular/core';
import { SessionStorageService} from 'angular-web-storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  logged:boolean;
  id : string;

  constructor(public session: SessionStorageService, private route : ActivatedRoute) { }

  ngOnInit() {
    debugger;
   this.logged= this.session.get("logged");
    this.route.params.subscribe(params => {
        this.id = params["id"];
    })
  }

}
