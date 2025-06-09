# SmartClinic Dashboard 🏥

A modular healthcare admin dashboard built with Angular. Enables appointment scheduling, patient records, and real-time data handling using NgRx and RxJS.

## 🔧 Tech Stack
- Angular 17
- RxJS, NgRx
- SCSS, Angular Router
- Angular Signals (optional)
- Webpack (via Angular CLI)

## ✨ Features
- Reactive appointment form with validation
- Route guards for secure navigation
- Lazy-loaded feature modules
- Global state management with NgRx
- Observable data streams with RxJS
- Fully responsive UI with SCSS

## 🚀 Getting Started
```bash
npm install
ng serve
```

## 🔒 Route Guard Example
```ts
{ path: 'appointments', component: AppointmentComponent, canActivate: [AuthGuard] }
```

## 📂 Folder Structure
```
src/app/
│── components/
│   └── appointment-form/
│── services/
│── store/
│── app-routing.module.ts
```

## 📡 API Integration
- [x] Async API calls with RxJS
- [x] Error/loading state handling
