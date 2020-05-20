import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IUser } from '../shared/interfaces/user.interface';

const USERS: IUser[] = [
  {
    firstName: 'Ira',
    lastName: 'Demko',
    numberPhone: 675437651
  },
  {
    firstName: 'Vira',
    lastName: 'Panchuk',
    numberPhone: 637465883
  },
  {
    firstName: 'Marta',
    lastName: 'Shved',
    numberPhone: 976543733
  },
  {
    firstName: 'Petro',
    lastName: 'Petriv',
    numberPhone: 688843321
  },
  {
    firstName: 'Taras',
    lastName: 'Tarasiv',
    numberPhone: 981235678
  }
];

@Component({
  selector: 'app-sort-am',
  templateUrl: './sort-am.component.html',
  styleUrls: ['./sort-am.component.css']
})
export class SortAMComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'numberPhone', 'edit', 'delete'];
  dataSource = new MatTableDataSource(USERS);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
