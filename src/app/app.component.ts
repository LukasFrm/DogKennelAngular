import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = "Veislynas &ldquo;Ištikimas šuo&rdquo;";
  currentDog: any;
  openClass = 'closed'

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    
    ) {}


    ngOnInit() {
      this.currentDog = this.route.snapshot.params['id']
    }

  navigateToDog(x) {
    this.router.navigate(["/our-dogs/" + x]);
  }
  addOpen() {
    var smth = <HTMLDivElement>document.getElementById("carret");
    smth.className+="open";
  }





  

}
