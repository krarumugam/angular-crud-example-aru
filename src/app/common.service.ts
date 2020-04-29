import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { TeamMember } from './models/teamMember.model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  API_URL = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  public addTeamMember(teammember) : Observable<TeamMember>{
    return this.httpClient.post<TeamMember>(this.API_URL + '/teammembers/', JSON.stringify(teammember), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getAllTeamMember(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL+ '/teamMembers/');
  }
  updTeamMember(){}
  delTeamMember(){}

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}


