import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import 'firebase/storage';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  arrProducts: Array<IProduct> = [];
  arrCategories: Array<ICategory> = [];

  productCategory: ICategory;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;

  filterProduct: string;
  isEdit = false;
  idEdit: number;
  deleteProd: IProduct;

  uploadProgress: Observable<number>;

  modalRef: BsModalRef;
  modalRefDel: BsModalRef;

  constructor(
    private catService: CategoryService,
    private prodService: ProductService,
    private modalService: BsModalService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  private getCategories(): void {
    this.catService.getCategories().subscribe(data => this.arrCategories = data);
  }

  private getProducts(): void {
    this.prodService.getProduct().subscribe(data => this.arrProducts = data);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(template: TemplateRef<any>, prod: IProduct) {
    this.modalRefDel = this.modalService.show(template);
    this.deleteProd = prod;
  }

  addProduct(): void {
    const newProd: IProduct = new Product(
      1,
      this.productCategory,
      this.productName,
      this.productDescription,
      this.productPrice,
      this.productImage);
    if (!this.isEdit) {
      if (this.arrProducts.length > 0) {
        newProd.id = this.arrProducts.slice(-1)[0].id + 1;
      }
      if (this.arrProducts.some(prod => prod.name === this.productName) === false) {
        this.prodService.addProduct(newProd).subscribe(() => this.getProducts());
      }
    } else {
      newProd.id = this.idEdit;
      if (this.arrProducts.some(prod => prod.name === this.productName) === false) {
        this.prodService.updateProduct(newProd).subscribe(() => this.getProducts());
      }
      this.isEdit = false;
    }
    this.resetForm();
  }

  uploadFile(event): void {
    const file = event.target.files[0];
    const filePath = `imagesPizza/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this.afStorage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then(e => {
      this.afStorage.ref(`imagesPizza/${e.metadata.name}`).getDownloadURL().subscribe(url => {
        this.productImage = url;
      });
    });
  }

  uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      // tslint:disable-next-line: no-bitwise
      const r: number = Math.random() * 16 | 0;
      // tslint:disable-next-line: no-bitwise
      const v: number = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }

  editProduct(product: IProduct, template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.idEdit = product.id;
    this.productCategory = product.category;
    this.productName = product.name;
    this.productDescription = product.description;
    this.productPrice = product.price;
    this.productImage = product.image;
    this.isEdit = true;
  }

  deleteProduct(): void {
    this.prodService.deleteProduct(this.deleteProd).subscribe(() => this.getProducts());
    this.modalRefDel.hide();
  }

  resetForm(): void {
    this.productName = '';
    this.productDescription = '';
    this.productPrice = null;
    this.modalRef.hide();
  }

}
