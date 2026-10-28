
import { Component, OnInit } from '@angular/core';
import { Api, Project, Team } from '../../services/api';

@Component({
  selector: 'app-projekt-liste',
  templateUrl: './projekt-liste.page.html',
  styleUrls: ['./projekt-liste.page.scss'],
  standalone: false
})
export class ProjektListePage implements OnInit {
  projekte: Project[] = []; // Safes die projects which comes from the backend
  teams: { [id: number]: Team } = {};

  constructor(private api: Api) {} // integrates the  API service.

 ngOnInit() {
  console.log('Projektliste wurde gestartet');

  this.api.getProjects().subscribe(data => {
    console.log('Aktuelle Projektdaten:', data);
    this.projekte = data;

    data.forEach(projekt => {
      this.api.getTeam(projekt.teamId).subscribe(team => {
        this.teams[projekt.teamId] = team;
        console.log('Gespeicherte Teams:', this.teams);
      });
    });
  });
}
}
