import { Component, OnInit } from '@angular/core';
import { InfosCard } from '../infos-card';
import { Observable } from 'rxjs';
import { Client } from 'src/app/client/client';
import { Fournisseur } from 'src/app/fournisseur/fournisseur';
import { User } from 'src/app/user/user';
import { InfosCardService } from '../infos-card.service';
import { Router } from '@angular/router';
import { UploadFileService } from '../upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';


declare var $: any;

@Component({
  selector: 'app-create-infos-card',
  templateUrl: './create-infos-card.component.html',
  styleUrls: ['./create-infos-card.component.sass']
})
export class CreateInfosCardComponent implements OnInit {

  infosCard: InfosCard = new InfosCard();
  clientData: Client = new Client();
  fournisseur: Fournisseur = new Fournisseur();
  idClient: any;
  idFournisseur: any;

  infosCards: Observable<InfosCard[]>;
  clients: Observable<Client[]>;
  fournisseurs: Observable<Fournisseur[]>;
  users: Observable<User[]>;
  scheimes: Observable<string[]>;
  submitted = false;
  moyenPaiement= ['ATM', 'TPE', 'PAIEMENT INTERNET'];
  finitions= ["GLOSS", "MAT"];
  typeImp=["EMBOSSAGE","IN FILL"];

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  constructor(private infosCardService: InfosCardService,private uploadService: UploadFileService,
    private router: Router) { }

  ngOnInit(): void {
    this.clients=this.infosCardService.getClientsList();
    this.fournisseurs=this.infosCardService.getFournisseursList();
    this.scheimes=this.infosCardService.getScheimeList();
    this.fileInfos = this.uploadService.getFiles();

    $(document).ready(function(){

      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      
      $(".next").click(function(){
      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
      step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
      
      current_fs.css({
      'display': 'none',
      'position': 'relative'
      });
      next_fs.css({'opacity': opacity});
      },
      duration: 600
      });
      });
      
      $(".previous").click(function(){
      
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show();
      
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
      step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
      
      current_fs.css({
      'display': 'none',
      'position': 'relative'
      });
      previous_fs.css({'opacity': opacity});
      },
      duration: 600
      });
      });
    
      $('.radio-group .radio').click(function(){
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
      });
      
      $(".submit").click(function(){
      return false;
      })
      
      });
  }

  newInfosCard(): void {
    this.submitted = false;
    this.infosCard = new InfosCard();
  }

  reloadData() {
    this.infosCards = this.infosCardService.getInfosCardList();
  }

  save() {
    this.infosCard.client.id = this.idClient;
    this.infosCard.fournisseur.id = this.idFournisseur;

    console.warn( JSON.stringify(this.infosCard));

    this.infosCardService.createInfosCard(this.infosCard)
    .subscribe(data => {
      console.log(data),
      this.reloadData();
    }, error => console.log(error));

    this.infosCard = new InfosCard();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/infoscards']);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

}
