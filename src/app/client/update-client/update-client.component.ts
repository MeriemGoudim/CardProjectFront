import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.sass']
})
export class UpdateClientComponent implements OnInit {

    id: number;
    client: Client;
    clients: Observable<Client[]>;
    submitted = false;
    constructor(private route: ActivatedRoute,private router: Router,
      private clientService: ClientService) { }
  
    ngOnInit() {

      this.submitted = false;
      this.client = new Client();
      this.id = this.route.snapshot.params['id'];
      
      this.clientService.getClient(this.id)
        .subscribe(data => {
          console.log(data)
          this.client = data;
          this.reloadData();
        }, error => console.log(error));
    }
  
    reloadData() {
      this.clients = this.clientService.getClientsList();
    }
    updateClient() {
      this.clientService.updateClient(this.id, this.client)
        .subscribe(data => {
          console.log(data),
          this.reloadData();
        }, error => console.log(error));
      this.client = new Client();
      this.gotoList();
    }
  
    onSubmit() {
      this.submitted = true;
      this.updateClient(); 
    }
  
    gotoList() {
      this.router.navigate(['/clients']);
    }
  

}
