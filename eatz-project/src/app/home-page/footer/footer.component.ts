import { Component } from '@angular/core';
import { IMAGEURL } from '../../core/constants/constants'
import { AWESOME_ICONS } from '../../core/constants/constants';
import { FOOTER_CONSTANTS } from '../../core/constants/constants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
imageUrl = IMAGEURL;
// url paths 
instagram:string = AWESOME_ICONS.instagram;
facebook:string = AWESOME_ICONS.facebook;
linkedin:string = AWESOME_ICONS.linkedin;
copyright:string = AWESOME_ICONS.copyright;
// constants 
footerTitle:string = FOOTER_CONSTANTS.footer_title;
footerDescription:string = FOOTER_CONSTANTS.footer_description;
foodName:string = FOOTER_CONSTANTS.food_title;
foodDescription:string = FOOTER_CONSTANTS.food_description;
foodPrice:string = FOOTER_CONSTANTS.food_price;
companyName:string=FOOTER_CONSTANTS.company_name;
}
