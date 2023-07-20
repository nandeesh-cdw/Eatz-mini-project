import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  selectedDate!: string;
  selectedTime!: string;
  constructor() {}

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

  showModal(){
    console.log('showModal');
  }
}
