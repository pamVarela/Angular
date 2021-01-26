import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Product } from '../../models/Product';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  faPlus = faPlus; faTrash = faTrashAlt; faPencil = faPencilAlt;

  dataSource = this.productService.getAll();
  
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService) { }

  columns: string[] = ['Nombre', 'Categoría', 'Precio', 'Cantidad', 'Inventario', 'Acción'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.dialog.open(AddProductComponent, {
      width: '500px',
    });
  }

  editProduct(product: Product) {
    this.dialog.open(EditProductComponent, {
      width: '500px',
      data: { product: product }
    });
  }

  deleteProduct(product: Product) {
    this.dialog.open(DeleteProductComponent, {
      width: '500px',
      data: { product: product }
    });
  }


}
