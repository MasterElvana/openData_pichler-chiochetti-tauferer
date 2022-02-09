import { WineService } from './../../shared/wine-service';
import { Component } from '@angular/core';
import { Wine } from 'shared/wine';


@Component({
  selector: 'wa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WineAward';
  response!: any;
  wine!: Wine;
  yearsearch!: number;
  titelsearch!: string;
  awardsearch!: string;

  constructor(private ws: WineService){}

  test(titel: string){
    this.ws.getWineOnTitel(titel).subscribe(response => console.log(response));
  }
  all(){
    this.ws.getWineOnTitel('').subscribe(response => console.log(response));
  }
  year(year: number){
    this.ws.getWineOnYear(year).subscribe(response => console.log(response));
  }
  award(award: string){
    this.ws.getWineAward(encodeURIComponent(award.trim())).subscribe(response => console.log(response));
  }
}
