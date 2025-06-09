import { createAction, props } from '@ngrx/store';

export const addAppointment = createAction(
  '[Appointment] Add Appointment',
  props<{ appointment: any }>()
);
