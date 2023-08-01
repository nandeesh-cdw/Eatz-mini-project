import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FORM_MESSAGES } from 'src/app/core/constants/messages';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  //constants 
  FORM_MESSAGES = FORM_MESSAGES;
  

  //variables 
  selectedDate!: string;
  selectedTime!: string;
  isModalOpen: boolean=false;
  constructor() {}

  /**
   * The function validates if the selected date is in the past and sets an error if it is.
   * @param {NgForm} myForm - The parameter `myForm` is of type `NgForm`
   */
  validateDate(myForm: NgForm) {
    console.log(myForm);
    const selectedDate = new Date(this.selectedDate);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate < currentDate) {
      // Set the validity of the date control to false
      myForm.controls['date'].setErrors({ pastDate: true });
    } else {
      // Reset any previous errors
      myForm.controls['date'].setErrors(null);
    }
  }

  /**
   * The function validates if the selected time is within the range of 9 AM to 9 PM.
   * @param {NgForm} myForm - The parameter `myForm` is of type `NgForm`
   */
  validateTime(myForm: NgForm) {
    const selectedHours = this.selectedTime.split(':').map(Number)[0];
    
    const startHour = 9;
    const endHour = 21;

    if (selectedHours < startHour || selectedHours > endHour) {
      myForm.controls['time'].setErrors({ invalidTime: true });
    } else {
      myForm.controls['time'].setErrors(null);
    }
  }

  /**
   * The function showModal sets the isModalOpen property to true.
   */
  showModal(){
    this.isModalOpen = true;
  }
  /**
   * The function is used to close the modal 
   */
  onClose(){
    this.isModalOpen = false;
  }
}
