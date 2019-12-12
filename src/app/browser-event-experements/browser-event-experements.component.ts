import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-browser-event-experements",
  templateUrl: "./browser-event-experements.component.html",
  styleUrls: ["./browser-event-experements.component.css"]
})
export class BrowserEventExperementsComponent implements OnInit {
  hoverSection: HTMLElement;
  constructor() {}

  ngOnInit() {
    this.hoverSection = document.getElementById("hover");
    this.hoverSection.addEventListener("mouseover", onMouseMove);
  }
  unsubscribe() {
    console.log("unsusbcribe");
    this.hoverSection.removeEventListener("mouseover", onMouseMove);
  }
}
function onMouseMove(event: MouseEvent) {
  console.log(event);
}
