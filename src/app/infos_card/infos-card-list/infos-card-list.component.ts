import { Component, OnInit } from '@angular/core';
import { InfosCard } from '../infos-card';
import { Observable } from 'rxjs';
import { InfosCardService } from '../infos-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infos-card-list',
  templateUrl: './infos-card-list.component.html',
  styleUrls: ['./infos-card-list.component.sass']
})
export class InfosCardListComponent implements OnInit {

  infosCards: Observable<InfosCard[]>;

  constructor(private infosCardService: InfosCardService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.infosCards = this.infosCardService.getInfosCardList();
    console.warn('infoCards', this.infosCardService.getInfosCardList());
  }

  deleteInfosCard(id: number) {
    this.infosCardService.deleteInfosCard(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  infosCardDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateInfosCard(id: number){
    this.router.navigate(['update', id]);
  }

}
