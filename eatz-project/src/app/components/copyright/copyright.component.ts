import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
})
export class CopyrightComponent {
  //Inputs
  @Input() src!: string;
  @Input() alt!: string;
  @Input() name!: string;
}
