import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Describes the datas of a project
export interface Project {
  id?: number;
  teamId: number;
  titel: string;
  beschreibung: string;
  praesentiertAm: string;
}

// Describes the datas of a team 
export interface Team {
  id?: number;
  name: string;
  klasse: string;
}

// Describes the data of an evaluation
export interface Evaluation {
  id?: number;
  projectId: number;
  criterionId: number;
  jurorId: number;
  score: number;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class Api {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Gets all projects from backend
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects`);
  }

  // Gets one project by id
  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/projects/${id}`);
  }

  // Gets one team by id
  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.url}/teams/${id}`);
  }

  // Gets all evaluations for one project
getEvaluations(projectId: number): Observable<Evaluation[]> {
  return this.http.get<Evaluation[]>(
    `${this.url}/evaluations?projectId=${projectId}`
  );
}
}