import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rotors';
  rotation = 0;
  rotateValue = 45;

  rotate() {
    this.rotation += this.rotateValue;
    const d = document.querySelector("#img");
    if(d != null) {
      console.log(this.rotation);
      d.setAttribute("style", "transform: rotate(" + this.rotation + "deg)");
    }

  }
}
