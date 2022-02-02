import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Wine } from "./wine";

const URL = 'https://api.tourism.testingmachine.eu/v1/WineAward';

@Injectable()
export class WineService {
 wine: Wine | null = null;
 error: HttpErrorResponse | null = null;
 response: HttpResponse<Wine> | null = null;

 constructor(private http: HttpClient) { }

 getWine(titel: string) {
  return this.http.get<Wine>(`${URL}/wine/${titel}`);
 }

 getAllWineSearchTerm(searchTerm: string): Observable<Wine[]> {
 return this.http
 .get<Wine[]>(`${URL}/wines/search/${searchTerm}`);
 }

 getAllWines(){
  return this.http
  .get<Wine[]>(`${URL}/wines`);
 };

}
