import { Injectable } from "@angular/core";
import { ZyraComponent } from "./our-dogs/zyra/zyra.component";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  dogs = {
    zyra: {
      pic: "http://www.istikimassuo.puslapiai.lt/images/stories/zyra.jpg",
      name: "Zyra Puikus Medžioklis ♀ RIP",
      regno: "LŠVK BIG0256/08",
      dob: "2008.02.01",
      loc: "Šiauliai"
    },
    brukne: {
      name: "Bruknė Petesha (LT JCH-CH-VCH)",
      regno: "LŠVK JRT 0069/09",
      dob: "2008.02.01",
      loc: "Šiauliai"
    }
  };
}
