import { Component } from '@angular/core';
import { IMAGEURL } from '../../core/constants/constants';
import { AWESOME_ICONS } from '../../core/constants/constants';
import { FOOTER_MESSAGES } from 'src/app/core/constants/messages';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  imageUrl = IMAGEURL;
  // url paths
  AWESOME_ICONS = AWESOME_ICONS;
  // constants
  FOOTER_MESSAGES = FOOTER_MESSAGES;
}
