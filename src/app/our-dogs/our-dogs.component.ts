import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild
} from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Subscription, from } from "rxjs";

@Component({
  selector: "app-our-dogs",
  templateUrl: "./our-dogs.component.html",
  styleUrls: ["./our-dogs.component.css"]
})
export class OurDogsComponent implements OnInit {
  selected: any;
  paramsSubscription: Subscription;
  picture: Array<string>;

  constructor(private router: Router, renderer: Renderer2) {}

  ngOnInit() {}

  navigateToDog(x) {
    this.router.navigate(["/our-dogs/" + x + ""]);
  }
}
