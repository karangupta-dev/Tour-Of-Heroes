import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { HeroFetchComponent } from './hero-fetch/hero-fetch.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  { path: '', component: LogInComponent,pathMatch: 'full'},
  { path: 'login', component: LogInComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, 
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-fetch', component: HeroFetchComponent},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'scroll', component: VirtualScrollComponent },
];  

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

