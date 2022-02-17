import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Wine } from 'shared/wine';
import { WineService } from 'shared/wine-service';

@Component({
  selector: 'wa-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filterForm!: FormGroup;
  id!: string;
  allwines!: Wine[];

  constructor(private ws: WineService, private fb: FormBuilder) { }
  @Input() awardTerm: string = '';
  @Input() vintageTerm: string = '';
  @Input() titelTerm: string = '';
  number!: number;

  titel(searchTermT: string){
    this.ws.getWineOnTitel(searchTermT).subscribe(response => {this.allwines = response;console.log(response);});
  }
  all(){
     this.ws.getWineOnTitel('').subscribe(response => {this.allwines = response;console.log(response);});
  }
  year(searchTermV: string){
    this.ws.getWineOnYear(Number(searchTermV)).subscribe(response => {this.allwines = response;console.log(response);});
  }
  award(searchTermA: string){
    this.ws.getWineAward(encodeURIComponent(searchTermA.trim())).subscribe(response => {this.allwines = response;console.log(response);});
  }

  ngOnInit(){
    this.all();
  }
  /*search(searchTerm: string | number){
    if(this.awardTerm)
    this.ws.getWineAward(encodeURIComponent(this.awardTerm.trim())).subscribe(response => {this.allwines = response;console.log(response);});
    if(searchTerm===this.number)
    this.ws.getWineOnYear(Number(this.vintageTerm)).subscribe(response => {this.allwines = response;console.log(response);});
    if(this.titelTerm)
    this.ws.getWineOnTitel(this.titelTerm).subscribe(response => {this.allwines = response;console.log(response);});
    else
    this.ws.getWineOnTitel('').subscribe(response => {this.allwines = response;console.log(response);});
    return this.allwines;
  }*/

}
