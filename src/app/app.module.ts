import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularWebStorageModule } from 'angular-web-storage';

import { StoreModule } from '@ngrx/store';
// import { reducer } from './reducers/tutorials.reducer';
import { reducer } from './reducers/hero.reducer';
import { userreducer } from './reducers/user.reducer';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { HeroFetchComponent } from './hero-fetch/hero-fetch.component';
import { HeaderComponent } from './header/header.component';
import { UserFetchComponent } from './user-fetch/user-fetch.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    ReadComponent,
    CreateComponent,
    HeroFetchComponent,
    HeaderComponent,
    UserFetchComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularWebStorageModule,
    ScrollingModule,
    NgxPaginationModule,  

    StoreModule.forRoot({ hero: reducer ,user: userreducer }),
    
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
