import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { InfosCardDetailsComponent } from './infos_card/infos-card-details/infos-card-details.component';
import { InfosCardListComponent } from './infos_card/infos-card-list/infos-card-list.component';
import { UpdateInfosCardComponent } from './infos_card/update-infos-card/update-infos-card.component';
import { CreateInfosCardComponent } from './infos_card/create-infos-card/create-infos-card.component';


const routes: Routes = [
  { path: '', redirectTo: 'infoscard', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'client/add', component: CreateClientComponent },
  { path: 'client/update/:id', component: UpdateClientComponent },
  { path: 'client/details/:id', component: ClientDetailsComponent },
  { path: 'infoscards', component: InfosCardListComponent },
  { path: 'infoscards/add', component: CreateInfosCardComponent },
  { path: 'infoscards/update/:id', component: UpdateInfosCardComponent },
  { path: 'infoscards/details/:id', component: InfosCardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
