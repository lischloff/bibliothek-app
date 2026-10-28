
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api, Project, Evaluation } from '../../services/api';

@Component({
  selector: 'app-projekt-detail',
  templateUrl: './projekt-detail.page.html',
  styleUrls: ['./projekt-detail.page.scss'],
  standalone: false
})

// Creates the detail page for a project
export class ProjektDetailPage implements OnInit {
  projekt?: Project; // creates the variable projekt, which saves the data of a project
  bewertungen: Evaluation[] = [];

  constructor(
    private route: ActivatedRoute, // Is used to get the project id from the URL
    private api: Api // Is used to use the methods from the API Service like getProject(id)
  ) { }

  ngOnInit() {
    // Gets the ID from the project from the URL and turns it into a number
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.api.getProject(id).subscribe(data => { // calls the backend method
      console.log('Geladenes Projekt:', data);
      this.projekt = data; // saves the data in the variable projekt
    });
    this.api.getEvaluations(id).subscribe(data => {
      this.bewertungen = data;
    });
  }
}
