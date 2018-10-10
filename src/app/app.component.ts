import { stages } from './mock-data';
import { Component } from '@angular/core';
import { HotTableRegisterer } from '@handsontable-pro/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataset = stages;

  options = {
    rowHeaders : false,
    columnHeaders : ['ID', 'Stage', 'Modes'],
    fixedRowsTop : 0,
    fixedColumnsLeft : 0,
    contextMenu : false,
    manualColumnFreeze : false,
    columnSorting : false,
    dropdownMenu: true,
    nestedHeaders: [
      [
        {
          label: 'Stages',
          colspan: 2
        }
      ],
      [
        'ID',
        'Description',
        ,
      ],
      [
        {
          label: 'Modes',
          colspan: 2
        }
      ]
    ]
  };
  constructor(private _hotRegisterer: HotTableRegisterer) {}
}
