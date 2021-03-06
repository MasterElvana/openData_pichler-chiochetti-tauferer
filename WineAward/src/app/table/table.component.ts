import { WineService } from 'shared/wine-service';
import { Wine } from 'shared/wine';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'wa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  wine!: Wine;
  @Input() data!: Wine[];
  displayedColumns: string[] = ['id', 'titel', 'vintage', 'awardyear', 'awards'];

  constructor(private ws: WineService) {
  }
  ngOnInit(): void {
  }

}
