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

}
