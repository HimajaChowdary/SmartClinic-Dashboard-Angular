import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addAppointment } from '../../store/appointments.actions';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  submit() {
    if (this.appointmentForm.valid) {
      this.store.dispatch(addAppointment({ appointment: this.appointmentForm.value }));
      this.appointmentForm.reset();
    }
  }
}
