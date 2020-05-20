import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IUser } from '../shared/interfaces/user.interface';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  firstNameInp: string;
  lastNameInp: string;
  numberInp: number;
  firstNameEdit: string;
  lastNameEdit: string;
  numberEdit: number;
  user: IUser;

  users: Array<IUser> = [
    {
      firstName: 'Ira',
      lastName: 'Demko',
      numberPhone: 380675437651
    },
    {
      firstName: 'Vira',
      lastName: 'Panchuk',
      numberPhone: 380637465883
    },
    {
      firstName: 'Marta',
      lastName: 'Shved',
      numberPhone: 380976543733
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      numberPhone: 380688843321
    },
    {
      firstName: 'Taras',
      lastName: 'Tarasiv',
      numberPhone: 380981235678
    }
  ];

  modalRef: BsModalRef;

  displayedColumns: string[] = ['firstName', 'lastName', 'numberPhone', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  savePhone(): void{
    if (this.firstNameInp !== '' && this.lastNameInp !== '' && this.numberInp !== null){
      const newPhone: IUser = new User(this.firstNameInp, this.lastNameInp, this.numberInp);
      this.users.push(newPhone);
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.resetForm();
    }
  }

  resetForm(): void{
    this.firstNameInp = '';
    this.lastNameInp = '';
    this.numberInp = null;
  }

  deleteUser(i: number): void{
    this.users.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
  }

  editUser(userModal: TemplateRef<any>, user: IUser): void{
    this.modalRef = this.modalService.show(userModal);
    this.firstNameEdit = user.firstName;
    this.lastNameEdit = user.lastName;
    this.numberEdit = user.numberPhone;
    this.user = user;
  }

  saveEdit(user: IUser): void{
    user.firstName = this.firstNameEdit;
    user.lastName = this.lastNameEdit;
    user.numberPhone = this.numberEdit;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
