import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productData: Product;

  constructor(private fb: FormBuilder, private toastr: ToastrService, public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService, private ngxLoader: NgxUiLoaderService) {

    this.productData = data.product;
  }

  ngOnInit(): void {

  }

  delete() {
    this.productService.delete(this.productData.id)
      .subscribe(
        response => {
          this.toastr.success(`Producto eliminado con éxito!`);
          this.ngxLoader.start();
          setTimeout( () => {
            window.location.reload();
            this.ngxLoader.stop();
          }, 2000);
        },
        error => {
          this.toastr.error(`Error al eliminar Producto...`);
        });
  }

}
