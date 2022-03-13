import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rotor',
  templateUrl: './rotor.component.html',
  styleUrls: ['./rotor.component.css']
})
export class RotorComponent  {
  @Input() srcFond = 'rotorBeige.png';
  @Input() srcAvant = 'fleche1.png';
  rotation = 0;
  rotateValue = 360/26;
  rotationString = '';

  constructor() {
    this.rotation = 360 / 26 * Math.floor(Math.random() * 26);
    this.rotationString = 'rotate(' + this.rotation + 'deg)';
  }

  rotate() {
    this.rotation += this.rotateValue;
    this.rotationString = 'rotate('+this.rotation+'deg)';
    console.log(this.rotation);
  }
}
