import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-garas",
  templateUrl: "./garas.component.html",
  styleUrls: ["./garas.component.css"]
})
export class GarasComponent implements OnInit {
  dogLookedAt: string;
  dogName: string;
  dogChamps: string;
  dogPic: string;
  dogRegno: string;
  dogDob: string;
  dogLoc: string;
  dogColour: string;
  dogOtherNo: string;
  dogNotes: string;
  nullCondition: string = "-";
  zyra: boolean = false;
  selected: { currentChoice: string };
  garasOrJuka:string;
  currentRoute: any;


  constructor(
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit() {

    if (this.router.url == '/our-dogs/juka') {
      this.garasOrJuka = 'juka'
    }
    if (this.router.url == '/our-dogs/garas') {
      this.garasOrJuka = 'garas'
    }


    
    this.selected = {
      currentChoice: this.route.snapshot.params["id"]
    };

    this.route.params.subscribe((params: Params) => {
      this.selected.currentChoice = params["id"];
    });
  }

  lookingAt(x: any) {
    this.dogLookedAt = x;
    this.dogName = this.ds.dogs[x].name;
    this.dogChamps = this.ds.dogs[x].champs;
    this.dogPic = this.ds.dogs[x].pic;
    this.dogRegno = this.ds.dogs[x].regno;
    this.dogDob = this.ds.dogs[x].dob;
    this.dogLoc = this.ds.dogs[x].loc;
    this.dogColour = this.ds.dogs[x].colour;
    this.dogOtherNo = this.ds.dogs[x].otherno;
    this.dogNotes = this.ds.dogs[x].notes;
    this.zyra = true;
  }
}
