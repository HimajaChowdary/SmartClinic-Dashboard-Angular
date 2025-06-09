import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { appointmentsReducer } from './store/appointments.reducer';

@NgModule({
  declarations: [
    AppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ appointments: appointmentsReducer })
  ],
  providers: [],
  bootstrap: [AppointmentFormComponent]
})
export class AppModule {}
