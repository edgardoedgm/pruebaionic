import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbCollapsedClickEventDetail } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  mensajes:any;
  opcion2:boolean;
  opcion1:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { 

    this.opcion1=false;
    this.opcion2=false;
  }



  firstOption(){
    this.opcion1=true;
    this.opcion2=false;
    this.mensajes=null;
    this.mensajes=this.dataService.getPosts();
    //.subscribe((posts:any[]) => {
     // console.log(posts);
     // this.mensajes=posts;
    //})


  }

  twoOption(){
    this.opcion1=false;
    this.opcion2=true;
    this.mensajes=null;
    this.mensajes=this.dataService.getPosts2();
    //.subscribe((posts:any[]) => {
     // console.log(posts);
     // this.mensajes=posts;
    //})


  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');



  }

}
