import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  arrCategories: Array<ICategory> = [];
  nameCategory: string;
  filterCategory: string;
  isEdit = false;
  isEmpty = true;
  idEdit: number;
  deleteCat: ICategory;

  modalRef: BsModalRef;
  modalRefDel: BsModalRef;

  constructor(
    private catService: CategoryService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.catService.getCategories().subscribe(data => {
      this.arrCategories = data;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(template: TemplateRef<any>, cat: ICategory) {
    this.modalRefDel = this.modalService.show(template);
    this.deleteCat = cat;
  }

  addCategories(): void {
      const newCat: ICategory = new Category(1, this.nameCategory);
      if (!this.isEdit) {
        if (this.arrCategories.length > 0) {
          newCat.id = this.arrCategories.slice(-1)[0].id + 1;
        }
        if (this.arrCategories.some(cat => cat.name === this.nameCategory) === false){
          this.catService.addCategory(newCat).subscribe(() => this.getCategories());
        }
      } else {
        newCat.id = this.idEdit;
        if (this.arrCategories.some(cat => cat.name === this.nameCategory) === false){
          this.catService.updateCategory(newCat).subscribe(() => this.getCategories());
        }
        this.isEdit = false;
      }
      this.nameCategory = '';
      this.isEmpty = true;
      this.modalRef.hide();
  }

  editCategory(category: ICategory, template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.isEdit = true;
    this.isEmpty = false;
    this.idEdit = category.id;
    this.nameCategory = category.name;
  }

  deleteCategory(): void {
    this.catService.deleteCategory(this.deleteCat).subscribe(() => this.getCategories());
  }

  typeInNameCategory(): void {
    if (this.nameCategory.length > 0){
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }


}
