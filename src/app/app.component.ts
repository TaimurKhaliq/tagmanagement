import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';

const TAG_DATA: TagElement[] = [
  { Tag: '123445499999', Quantity: 1, Description: '', Progress: '', ProgressPercentage: '',
    CWP: '', FIWP: '', System: '', SubSystem: '', EquipmentType: '', CostAccount: ''
  },
  { Tag: '9485885', Quantity: 2, Description: '', Progress: '', ProgressPercentage: '',
    CWP: '', FIWP: '', System: '', SubSystem: '', EquipmentType: '', CostAccount: ''
  },
  { Tag: '5939484', Quantity: 3, Description: '', Progress: '', ProgressPercentage: '',
    CWP: '', FIWP: '', System: '', SubSystem: '', EquipmentType: '', CostAccount: ''
  },
  { Tag: '0101933', Quantity: 4, Description: '', Progress: '', ProgressPercentage: '',
    CWP: '', FIWP: '', System: '', SubSystem: '', EquipmentType: '', CostAccount: ''
  },
  { Tag: '0928383', Quantity: 5, Description: '', Progress: '', ProgressPercentage: '',
    CWP: '', FIWP: '', System: '', SubSystem: '', EquipmentType: '', CostAccount: ''
  }
];
export interface TagElement {
  Tag: string;
  Quantity: number;
  Description: string;
  Progress: string;
  ProgressPercentage: string;
  CWP: string;
  FIWP: string;
  System: string;
  SubSystem: string;
  EquipmentType: string;
  CostAccount: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tag-management';
  displayedColumnsV2: string[] = [
    'Tag',
    'Description',
    'Quantity',
    'Progress',
    'ProgressQuantity',
    'QuantityAmount',
    'QuantityUnit'
  ];
  dataSource2 = new MatTableDataSource(TAG_DATA);
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataSource2.sort = this.sort;
  }
}
