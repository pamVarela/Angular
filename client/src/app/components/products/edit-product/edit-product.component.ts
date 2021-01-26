import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  formEditProduct: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, public dialogRef: MatDialogRef<EditProductComponent>,
     @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService, private ngxLoader: NgxUiLoaderService) { 
  } 

  ngOnInit(): void {
    this.product = this.data.product;
    this.formEditProduct = this.fb.group({
      name: ['', Validators.required],
      materials: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  edit() {
    let data = this.formEditProduct.value;

    if(this.formEditProduct.valid){
      this.productService.update(this.product.id, data)
      .subscribe(
        response => {
          this.toastr.success(`Producto ${data.name} modificado con éxito!`);
          this.ngxLoader.start();
          setTimeout( () => {
            window.location.reload();
            this.ngxLoader.stop();
          }, 2000);
        },
        error => {
          this.toastr.error(`Error para agregar Producto...`);
        });
    }else{
      this.toastr.error(`Debe completar los campos`);
    }
    
  }

}
