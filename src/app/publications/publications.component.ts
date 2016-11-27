import { Component, OnInit } from '@angular/core';
import {PublicationsService} from "../services/publications.service";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  title = "Publications";
  publications;

  constructor(private publicationService : PublicationsService) { }

  ngOnInit() {
    this.publications =this.publicationService.getPublications()
  }

}
