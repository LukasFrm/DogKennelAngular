import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import {DataService} from '../../data.service'

@Component({
  selector: 'app-zyra',
  templateUrl: './zyra.component.html',
  styleUrls: ['./zyra.component.css']
})
export class ZyraComponent implements OnInit {

selected:{currentChoice:string};

constructor(private route: ActivatedRoute, private router: Router, private ds:DataService) {}

  ngOnInit() {
    this.selected = {
      currentChoice:this.route.snapshot.params['id']
    };

    this.route.params.subscribe((params: Params) => {
      this.selected.currentChoice = params["id"];
    });

    console.log(this.dataService)
  }

}
