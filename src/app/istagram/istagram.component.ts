import { Component, OnInit } from "@angular/core";

import { DataService } from "../data.service";

@Component({
  selector: "app-istagram",
  templateUrl: "./istagram.component.html",
  styleUrls: ["./istagram.component.css"]
})
export class IstagramComponent implements OnInit {
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

  constructor(private ds: DataService) {}

  ngOnInit() {}
  
  lookingAt(x: any) {
    this.dogLookedAt = x;
    console.warn("dogLookedAt:" + this.dogLookedAt);
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
