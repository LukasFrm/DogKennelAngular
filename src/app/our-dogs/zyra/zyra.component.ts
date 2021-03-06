import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { DataService } from "../../data.service";



@Component({
  selector: "app-zyra",
  templateUrl: "./zyra.component.html",
  styleUrls: ["./zyra.component.css"]
})
export class ZyraComponent implements OnInit {
  selected: { currentChoice: string };

  dogLookedAt:string;
  dogName: string;
  dogChamps: string;
  dogPic: string;
  dogRegno: string;
  dogDob: string;
  dogLoc: string;
  dogColour: string;
  dogOtherNo:string;
  nullCondition:string = '-';
  zyra:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ds: DataService
  ) {}

  ngOnInit() {
    this.selected = {
      currentChoice: this.route.snapshot.params["id"]
    };

    this.route.params.subscribe((params: Params) => {
      this.selected.currentChoice = params["id"];
    });
  }

  lookingAt(x: any) {
    this.dogLookedAt = x
    console.warn('dogLookedAt:' + this.dogLookedAt)
    console.warn()
    this.dogName = this.ds.dogs[x].name;
    this.dogChamps = this.ds.dogs[x].champs
    this.dogPic = this.ds.dogs[x].pic;
    this.dogRegno = this.ds.dogs[x].regno;
    this.dogDob = this.ds.dogs[x].dob;
    this.dogLoc = this.ds.dogs[x].loc;
    this.dogColour = this.ds.dogs[x].colour;
    this.dogOtherNo = this.ds.dogs[x].otherno;
    this.zyra = true;
  }
}
