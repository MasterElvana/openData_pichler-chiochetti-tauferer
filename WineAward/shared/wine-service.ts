import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Wine } from "./wine";

const URL = 'https://api.tourism.testingmachine.eu/v1/WineAward?language=de';

@Injectable()
export class WineService {
 wine: Wine | null = null;
 error: HttpErrorResponse | null = null;
 response: HttpResponse<Wine> | null = null;

 constructor(private http: HttpClient) { }

 getWineOnTitel(titel: string): Observable<Array<Wine>> {
   console.log(URL+'&searchfilter='+titel);
  return this.http.get<Array<any>>(`${URL}&searchfilter=${titel}`)
  .pipe(
    map((weine)=>{
      return weine.map(actwine => {
    return new Wine(actwine.Id,actwine.Shortname,actwine.Vintage,actwine.Awardyear,actwine.Awards);
  })
 })
 )};

 getWineOnYear(vintage: number): Observable<Wine[]> {
 return this.http
 .get<Wine[]>(`${URL}/wines/search/${vintage}`);
 }

 getWineAward(award: string){
  return this.http.get(`${URL}&searchfilter=${award}`);
 }

}
