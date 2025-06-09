import { createReducer, on } from '@ngrx/store';
import { addAppointment } from './appointments.actions';

export const initialState: any[] = [];

export const appointmentsReducer = createReducer(
  initialState,
  on(addAppointment, (state, { appointment }) => [...state, appointment])
);
