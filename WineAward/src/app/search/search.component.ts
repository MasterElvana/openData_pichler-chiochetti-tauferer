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

  test(){
     return this.ws.getWineOnTitel(this.titelTerm).subscribe(response => console.log(response));
  }
  all(){
     return this.ws.getWineOnTitel('').subscribe(response => console.log(response));
  }
  year(){
    return this.ws.getWineOnYear(Number(this.vintageTerm)).subscribe(response => console.log(response));
  }
  award(){
    return this.ws.getWineAward(encodeURIComponent(this.awardTerm.trim())).subscribe(response => console.log(response));
  }

  ngOnInit(){
    /*this.ws.getAllWines().subscribe(res => {
      this.allwines = res});


    const award: string='';
    const vintage:number=0;
    const titel: string='';
    this.filterForm = this.fb.group({
      award: [award],
      year: [vintage],
      name: [titel]
    });
    if(award)
      this.ws.getWineAward(encodeURIComponent(award.trim()));
    if(vintage)
      this.ws.getWineOnYear(vintage);
    if(titel)
      this.ws.getWineOnTitel(titel);*/
  }
  search(){
    if(this.awardTerm)
    this.ws.getWineAward(encodeURIComponent(this.awardTerm.trim())).subscribe(response => {this.allwines = response;console.log(response);});
    if(this.vintageTerm)
    this.ws.getWineOnYear(Number(this.vintageTerm)).subscribe(response => {this.allwines = response;console.log(response);});
    if(this.titelTerm)
    this.ws.getWineOnTitel(this.titelTerm).subscribe(response => {this.allwines = response;console.log(response);});
    else
    this.ws.getWineOnTitel('').subscribe(response => {this.allwines = response;console.log(response);});
    return this.allwines;
  }

}
