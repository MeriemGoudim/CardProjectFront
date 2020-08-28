import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInfosCardComponent } from './infos_card/create-infos-card/create-infos-card.component';
import { UpdateInfosCardComponent } from './infos_card/update-infos-card/update-infos-card.component';
import { InfosCardDetailsComponent } from './infos_card/infos-card-details/infos-card-details.component';
import { InfosCardListComponent } from './infos_card/infos-card-list/infos-card-list.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInfosCardComponent,
    UpdateInfosCardComponent,
    InfosCardDetailsComponent,
    InfosCardListComponent,
    CreateClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
