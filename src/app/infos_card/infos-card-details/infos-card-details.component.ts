import { Component, OnInit } from '@angular/core';
import { InfosCard } from '../infos-card';
import { ActivatedRoute, Router } from '@angular/router';
import { InfosCardService } from '../infos-card.service';

@Component({
  selector: 'app-infos-card-details',
  templateUrl: './infos-card-details.component.html',
  styleUrls: ['./infos-card-details.component.sass']
})
export class InfosCardDetailsComponent implements OnInit {

  id: number;
  infosCard: InfosCard;
  constructor(private route: ActivatedRoute,private router: Router,
    private infosCardService: InfosCardService) { }

  ngOnInit(): void {
    this.infosCard = new InfosCard();

    this.id = this.route.snapshot.params['id'];
    
    this.infosCardService.getInfosCard(this.id)
      .subscribe(data => {
        console.log(data)
        this.infosCard = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['infoscards']);
  }


}
