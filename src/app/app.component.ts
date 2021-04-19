import { Component } from "@angular/core";
import { MatomoInjector } from "ngx-matomo";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "SC 2020 Angular 10 with ngrx-data and Angular Material Tree";
  constructor(private matomoInjector: MatomoInjector) {
    this.matomoInjector.init("//www.piw.geekitude.com/matomo/", 1);
  }
}
