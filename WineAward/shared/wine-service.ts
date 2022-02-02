import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Wine } from "./wine";

const URL = 'https://api.tourism.testingmachine.eu/v1/WineAward?language=de';

@Injectable()
export class WineService {
 wine: Wine | null = null;
 error: HttpErrorResponse | null = null;
 response: HttpResponse<Wine> | null = null;

 constructor(private http: HttpClient) { }

 getWineOnTitel(titel: string) {
  var wines: Wine[];
  var hilfe: any;
  this.http.get(`${URL}&searchfilter=${titel}`).subscribe((weine)=>hilfe=weine);
  hilfe.forEach(actwine => {
    wines.push();
  });
 }

 getWineOnYear(vintage: number): Observable<Wine[]> {
 return this.http
 .get<Wine[]>(`${URL}/wines/search/${vintage}`);
 }

 getWineAward(award: string){
  return this.http.get(`${URL}&searchfilter=${award}`);
 }

 getAllWines(){
  return this.http.get<Wine[]>(`${URL}&searchfilter=""`);
 };

}
