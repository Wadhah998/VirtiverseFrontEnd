import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplatesBackComponent } from './BackOffice/all-templates-back/all-templates-back.component';
import { AllTemplatesFrontComponent } from './FrontOffice/all-templates-front/all-templates-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { CollocationListComponent } from './FrontOffice/viewsFront/colocation/collocation-list/collocation-list.component';

import { EventListComponent } from './BackOffice/viewsBack/event/event-list/event-list.component';
import { EventListFrontComponent } from './FrontOffice/viewsFront/event/event-list-front/event-list-front.component';

import { EventAddFrontComponent } from './FrontOffice/viewsFront/event/event-add-front/event-add-front.component';
import { EventDetailFrontComponent } from './FrontOffice/viewsFront/event/event-detail-front/event-detail-front.component';

import { ItemListComponent } from './BackOffice/viewsBack/lostandfound/item-list/item-list.component';

import { ItemListUsersComponent } from './FrontOffice/viewsFront/lostandfound/item-list-users/item-list-users.component';

import { PubDiscussComponent } from './FrontOffice/viewsFront/lostandfound/pub-discuss/pub-discuss.component';
import { MyitemsComponent } from './FrontOffice/viewsFront/lostandfound/myitems/myitems.component';


import { EventCalendarComponent } from './FrontOffice/viewsFront/event/event-calendar/event-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ParticipationListFrontComponent } from './FrontOffice/viewsFront/event/participation-list-front/participation-list-front.component';
import { ParticipationListComponent } from './BackOffice/viewsBack/event/participation-list/participation-list.component';
import { EventListUserComponent } from './FrontOffice/viewsFront/event/event-list-user/event-list-user.component';
import { StatEventComponent } from './BackOffice/viewsBack/event/stat-event/stat-event.component';
import { environment } from './environnement/environnement';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { PubitemComponent } from './BackOffice/viewsBack/marketplace/pubitem/pubitem.component';

import { CartComponent } from './BackOffice/viewsBack/marketplace/cart/cart.component';
import { MarketComponent } from './FrontOffice/viewsFront/marketplace/market/market.component';
import { ItemdetailComponent } from './FrontOffice/viewsFront/marketplace/itemdetail/itemdetail.component';
import { MyitemspComponent } from './FrontOffice/viewsFront/marketplace/myitems/myitemp.component';
import { MatSliderModule } from '@angular/material/slider';
import { CartfComponent } from './FrontOffice/viewsFront/marketplace/cartf/cartf.component';


import { ChartpubComponent } from './BackOffice/viewsBack/marketplace/chartpub/chartpub.component';


import { MaisonlistComponent } from './FrontOffice/viewsFront/maison/maisonlist/maisonlist.component';
import { ContratLocationlistComponent } from './BackOffice/viewsBack/contratLocation/contrat-locationlist/contrat-locationlist.component';




import { MaisonlistbackComponent } from './BackOffice/viewsBack/maison/maisonlist/maisonlist.component';
import { MaisondetailComponent } from './FrontOffice/viewsFront/maison/maisondetail/maisondetail.component';
import { MaisondetailbackComponent } from './BackOffice/viewsBack/maison/maisondetailback/maisondetailback.component';






import { CovoiturageComponent } from './BackOffice/viewsBack/covoiturage/covoiturage.component';
import { AddCovoiturageComponent } from './FrontOffice/viewsFront/covoiturage/add-covoiturage/add-covoiturage.component';
import { ListCovoiturageComponent } from './FrontOffice/viewsFront/covoiturage/list-covoiturage/list-covoiturage.component';
import { AvisComponent } from './BackOffice/viewsBack/avis/avis.component'; 

import { MapComponent } from './FrontOffice/viewsFront/covoiturage/map/map.component';
import { DetailCovoiturageComponent } from './FrontOffice/viewsFront/covoiturage/detail-covoiturage/detail-covoiturage.component';  
import { ReactiveFormsModule } from '@angular/forms';
import { MyCovoituragesComponent } from './FrontOffice/viewsFront/covoiturage/my-covoiturages/my-covoiturages.component'; 
import { CollocationListComponent } from './FrontOffice/viewsFront/colocation/collocation-list/collocation-list.component';
import { LoginComponent } from './Login/login/login.component';
import { JwtModule } from "@auth0/angular-jwt";
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CustomInterceptor } from './Service/custom.interceptor';
import { GUserComponent } from './BackOffice/viewsBack/user/g-user/g-user.component';
import { SignuppComponent } from './Login/signupp/signupp.component';


import { ProfileComponent } from './Login/profile/profile.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgetpwdComponent } from './Login/forgetpwd/forgetpwd.component';
import { SessionAddComponent } from './FrontOffice/viewsFront/raba3/session-add/session-add.component';
import { GameListComponent } from './FrontOffice/viewsFront/raba3/game-list/game-list.component';
import { SessionListComponent } from './FrontOffice/viewsFront/raba3/session-list/session-list.component';
import { GameAddComponent } from './BackOffice/viewsBack/raba3/game-add/game-add.component';
import { GameEditComponent } from './BackOffice/viewsBack/raba3/game-edit/game-edit.component';
import { GameListBComponent } from './BackOffice/viewsBack/raba3/game-list-b/game-list-b.component';
import { SessionListBComponent } from './BackOffice/viewsBack/raba3/session-list-b/session-list-b.component';
import { UserSessionsComponent } from './FrontOffice/viewsFront/raba3/user-sessions/user-sessions.component';
import { environments } from 'src/environements/environement';
import {initializeApp} from 'firebase/app';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { filter } from 'rxjs';
import { StatsComponent } from './FrontOffice/viewsFront/raba3/stats/stats.component';

initializeApp(environments.firebase);



@NgModule({
  declarations: [
    AppComponent,
    AllTemplatesBackComponent,
    AllTemplatesFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    EventListComponent,
    EventListFrontComponent,
    EventAddFrontComponent,
    EventDetailFrontComponent,
    EventCalendarComponent,
    ParticipationListFrontComponent,
    ParticipationListComponent,
    EventListUserComponent,
    StatEventComponent,
    PubitemComponent,
    CartComponent,
    MarketComponent,
    ItemdetailComponent,
    MyitemspComponent,
  CartfComponent,
  ChartpubComponent,
 MaisonlistComponent,
    ContratLocationlistComponent,
    MaisonlistbackComponent,
    MaisondetailComponent,
    MaisondetailbackComponent,
    ContratLocationlistComponent,
    CovoiturageComponent,
    AddCovoiturageComponent,
    ListCovoiturageComponent,

    
    AvisComponent,
          MapComponent,
          DetailCovoiturageComponent,
          MyCovoituragesComponent,
    ItemListComponent,
    ItemListUsersComponent,
    PubDiscussComponent,
    MyitemsComponent,
    
    LoginComponent,
    GUserComponent,
    SignuppComponent,
    ProfileComponent,
    ForgetpwdComponent,
    SessionAddComponent,
    GameListComponent,
    SessionListComponent,
    GameAddComponent,
    GameEditComponent,
    GameListBComponent,
    SessionListBComponent,
    UserSessionsComponent,
    StatsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  FullCalendarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule to imports
    MatSnackBarModule,
 

    HttpClientModule,
    MatDialogModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
      
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    
   
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
